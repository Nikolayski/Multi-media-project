import React, { Component } from 'react';
import axios from 'axios';
import './BlogDetails.css';

export default class BlogDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            theme: "",
            title: "",
            image: "",
            description: ""
        }   
    }
    
    componentDidMount = () => {
        axios.get('/api/blogs/' + this.props.match.params.id).then(response => {
            this.setState({
                id: response.data.id,
                theme: response.data.theme,
                title: response.data.title,
                image: response.data.image,
                description: response.data.description
            })
        })
        .catch(error => {
                console.log(error.message);
        })
    }

    render() {
        return (
            <section className="blogdetail-wrapper">
                <h1>{this.state.theme }</h1>
                <h4>{this.state.title}</h4>
                <img src={this.state.image}></img>
                <p>{this.state.description }</p>
            </section>
        )
    }
}