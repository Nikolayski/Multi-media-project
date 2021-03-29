import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Blog from './Blog/Blog';
import './Blogs.css';
import SelectBlogTheme from './SelectBlogTheme';

export default class Blogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        }
    }

    componentDidMount() {
        this.setState({ blogs: [] });
        axios.get('/api/blogs/allblogs').then(response => {
            for (var i = 0; i < response.data.length; i++) {
                var currBlog = this.state.blogs;
                currBlog.push(response.data[i]);
                this.setState({
                    blogs: currBlog
                })
            }
        })
    }

    showTheme(event) {
        if (event.target.value == "all" || event.target.value == "ERROR") {
            this.componentDidMount();
        }
        else {
            axios.post('/api/blogs/' + event.target.value).then(response => {
                this.setState({ blogs: [] })
                for (var i = 0; i < response.data.length; i++) {
                    var currBlog = this.state.blogs;
                    currBlog.push(response.data[i]);
                    this.setState({
                        blogs: currBlog
                    })
                }
            })
                .catch(err => console.log(err.message));
        }

    }


    render() {
        return (
            <section>
             <SelectBlogTheme change={this.showTheme.bind(this)} />
                <Link className="addblog-button" to="/addBlog">Add Blog</Link>
                <article className="blog-card-wrapper">
                    {this.state.blogs.map(x => (
                        <Blog
                            key={x.id}
                            id={x.id}
                            theme={x.theme}
                            title={x.title}
                            image={x.image}
                            description={x.description}
                            creator={x.creatorUsername} />
                    ))}
                </article>
            </section>
        )
    }
}