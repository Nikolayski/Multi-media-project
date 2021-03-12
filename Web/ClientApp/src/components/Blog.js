import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogDetails from './BlogDetails';

export default class Blog extends Component {
    constructor(props) {
        super(props);
        
    }


    render() {
        return (
            <section className="blog-card">
                <h4 className="blog-card-theme">{this.props.theme }</h4>
                <p className="blog-card-title">{this.props.title}</p>
                <img className="blog-card-image" src={this.props.image}></img>
                <p className="blog-card-description">{this.props.description}</p>
                <Link to={`/BlogDetails/${this.props.id}`}>See More...</Link>
            </section>
            )
    }
}