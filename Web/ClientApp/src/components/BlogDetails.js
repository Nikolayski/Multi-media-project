import React, { Component } from 'react';
import axios from 'axios';

export default class BlogDetails extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {
        axios.get('/api/blogs/' + this.props.match.params.id).then(response => {
            console.log(response);
        })
        .catch(error => {
                console.log(error.message);
        })
    }

    render() {
        return (
            <section>
                <h1>{this.props.match.params.id}</h1>
            </section>
        )
    }
}