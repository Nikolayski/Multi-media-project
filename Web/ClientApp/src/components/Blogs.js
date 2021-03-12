import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddBlog from './AddBlog';
import axios from 'axios';
import Blog from './Blog';

export default class Blogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: []
        }
    }

    componentDidMount = () => {
        axios.get('/api/blogs/allblogs').then(response => {
            for (var i = 0; i < response.data.length; i++) {
                var currBlog = this.state.blog;
                currBlog.push(response.data[i]);
                this.setState({
                    blog: currBlog
                })
            }
        })
    }

    render() {
        return (
            <section>
                <Link className="addblog-button" to="/addBlog" Component={AddBlog}>Add Blog</Link>
                <article className="car-card-wrapper">
                    {this.state.blog.map(x => (
                        <Blog id={x.id} theme={x.theme} title={x.title} image={x.image} description={x.description} />
                        ))}
                </article>
            </section>
        )
    }
}