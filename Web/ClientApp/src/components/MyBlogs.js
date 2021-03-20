import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService';
import Blog from './Blog';


export default class MyBlogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        }
    }

    componentDidMount() {
        authService.getUser().then(response => {
            var userId = response.sub;
            fetch(`https://localhost:44387/api/blogs/myBlogs/${userId}`)
                .then(res => res.json())
                .then(data => {
                    for (var i = 0; i < data.length; i++) {
                        var currBlogs = this.state.blogs;
                        currBlogs.push(data[i]);
                        this.setState({
                            blogs: currBlogs
                        })
                    }
                })
                .catch(error => console.log(error.message))
        })
    }


    render() {
        return (
            <article className="car-card-wrapper">
                {this.state.blogs.map(x => (
                    <Blog
                        key={x.id}
                        id={x.id}
                        theme={x.theme}
                        title={x.title}
                        image={x.image}
                        description={x.description}
                        creator={x.creatorUsername}
                        edit="true"
                        remove="true"
                    />
                ))}
            </article>

        )
    }
}