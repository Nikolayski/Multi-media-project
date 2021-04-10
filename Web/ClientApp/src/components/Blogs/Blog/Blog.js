import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../Blogs.css';
import * as services from '../../../Services/ComponentServices';

export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDeleted: ""
        }
    }


    removeBlog() {
        services.remove(this.props.id, "blogs")
            .then(data => this.setState({ isDeleted: true }))
            .catch(error => console.log(error.message))
    }

    render() {
        if (this.state.isDeleted) {
            return <Redirect to="/MyBlogs" />
        }

        return (
            <section className="blog-card">
                <h4 className="blog-card-theme">{this.props.theme}</h4>
                <img className="blog-card-image" src={this.props.image} alt={'blog image'}></img>
                <p className="blog-card-title">{this.props.title}</p>
                <p className="blog-card-description">{this.props.desc}</p>
                <p className="blog-card-description">{this.props.creator}</p>
                <Link to={`/BlogDetails/${this.props.id}`}>See More...</Link>
                <article>
                    {this.props.edit ? <Link to={`/edit/blogs/${this.props.id}`}>Edit</Link> : ''}
                    {this.props.remove ? <button onClick={this.removeBlog.bind(this)}>Remove</button> : ''}
                </article>
            </section>
        )


    }
}