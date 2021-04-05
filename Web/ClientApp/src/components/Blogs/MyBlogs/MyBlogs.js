import React, { Component } from 'react';
import authService from '../../api-authorization/AuthorizeService';
import Blog from '../Blog/Blog';
import '../Blogs.css';
import * as services from '../../../Services/ComponentServices';


export default class MyBlogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
            userId: ''
        }
    }

    componentDidMount() {
        authService.getUser().then(response => {
            this.setState({ userId: response.sub })
            services.getMyCollection(this.state.userId, "blogs/my-blogs")
                .then(data => this.setState({ blogs: data }))
                .catch(error => console.log(error.message))
        })
    }

    render() {
        return (
            <article className="blog-card-wrapper">
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