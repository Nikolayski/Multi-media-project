import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Blog from './Blog/Blog';
import './Blogs.css';
import SelectBlogTheme from './SelectBlogTheme';
import * as services from '../../Services/ComponentServices';

export default class Blogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        }
    }

    componentDidMount() {
        this.setState({ blogs: [] });
        services.getAll("blogs")
            .then(data => this.setState({ blogs: data }))
            .catch(err => console.log(err.message))
    }

    showTheme(event) {
        if (event.target.value == "all" || event.target.value == "ERROR") {
            this.componentDidMount();
        }
        else {
            services.getOption(event.target.value, "blogs")
                .then(data => this.setState({ blogs: data }))
                .catch(err => console.log(err.message));
        }

    }

    render() {
        if (this.state.blogs.length != 0) {
            return (
                <section>
                    <div className="blogs-theme">
                        <SelectBlogTheme change={this.showTheme.bind(this)} />
                        <Link className="addblog-button" to="/addBlog">Add Blog</Link>
                    </div>
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
        return (
            <div className="no-blogs-theme">
                <h2>No blogs available</h2>
                <SelectBlogTheme change={this.showTheme.bind(this)} />
                <Link className="addblog-button" to="/addBlog">Add Blog</Link>
            </div>
        )
    }
}