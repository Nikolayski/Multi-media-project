import React, { Component } from 'react';
import './BlogDetails.css';
import * as services from '../../../Services/ComponentServices';

export default class BlogDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount = () => {
        services.getDetails(this.props.match.params.id, "blogs")
            .then(data => this.setState(data))
            .catch(error => console.log(error.message))
    }

    render() {
        return (
            <section className="blogdetail-wrapper">
                <h1>{this.state.theme}</h1>
                <h4>{this.state.title}</h4>
                <img src={this.state.image}></img>
                <p>{this.state.description}</p>
            </section>
        )
    }
}