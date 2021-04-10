import React, { Component } from 'react';
import './Details.css'
import * as services from '../../Services/ComponentServices';
import authService from '../api-authorization/AuthorizeService';
import CommentForm from '../CommentForm/CommentForm';
import Comments from '../Comments/Comments';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: {},
            comments: [],
            detailsPath: '',
        }
    }
    componentWillMount() {
        if (this.props.match.path.slice(1, 4) == 'car') {
            this.setState({ detailsPath: 'cars' });
        }
        else if (this.props.match.path.slice(1, 5) == 'blog') {
            this.setState({ detailsPath: 'blogs' });
        }
        else {
            this.setState({ detailsPath: 'products' })
        }
    }

    componentDidMount() {
        services.getDetails(this.props.match.params.id, this.state.detailsPath)
            .then(data => this.setState({ result: data }))
            .catch(error => console.log(error.message))

        fetch(`https://localhost:44387/api/comments/${this.state.detailsPath}/get/` + this.props.match.params.id)
            .then(res => res.json())
            .then(data => this.setState({ comments: data }))
            .catch(error => console.log(error.message))
    }




    commentFormHandler(event) {
        event.preventDefault();
        const [description] = event.target;

        authService.getUser()
            .then(res => {
                if (!res) {
                    this.props.history.push('/authentication/login')
                }
                else {
                    fetch(`https://localhost:44387/api/comments/${this.state.detailsPath}/post/`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            description: description.value,
                            userId: res.sub,
                            id: this.props.match.params.id
                        })
                    })
                        .then(res => res.text())
                        .then(data => {
                            description.value = '';
                            this.componentDidMount();
                        })
                        .catch(error => console.log(error.message))
                }

            })
    }

    render() {
        if (this.state.result.manufacturer) {
            return (
                <section className="car-details-container">
                    <div className="car-details-wrapper">
                        <article className="car-details-image">
                            <img style={{height:'550px', objectFit:'cover'}} src={this.state.result.image}></img>
                        </article>
                        <article className="car-details-info">
                            <h2>Manufacturer: {this.state.result.manufacturer}</h2>
                            <h4>Model: {this.state.result.model}</h4>
                            <p>Info: {this.state.result.info}</p>
                            <p>Contact: {this.state.result.contact}</p>
                            <p>Owner: {this.state.result.ownerUsername}</p>
                            <p>Year: {this.state.result.year}</p>
                            <p>Price: {this.state.result.price}</p>
                        </article>
                    </div>

                    <Comments comments={this.state.comments} />
                    <CommentForm submit={this.commentFormHandler.bind(this)} />

                </section>

            )
        }
        else if (this.state.result.theme) {
            return (
                <section className="blogdetail">
                    <section className="blog-details-wrapper">
                        <h1>{this.state.result.theme}</h1>
                        <h4>{this.state.result.title}</h4>
                        <img style={{ height: '550px', objectFit: 'cover' }} src={this.state.result.image}></img>
                        <p>{this.state.result.description}</p>
                    </section>

                    <Comments comments={this.state.comments} />
                    a<CommentForm submit={this.commentFormHandler.bind(this)} />

                </section>
            )
        }
        return (
            <section className="blogdetail">
                <section className="blog-details-wrapper">
                    <h1>Type: {this.state.result.productType}</h1>
                    <h4>Creator: {this.state.result.creatorUsername}</h4>
                    <img style={{ height: '550px', objectFit: 'cover' }} src={this.state.result.image}></img>
                    <p>{this.state.result.description}$</p>
                    <p>Price: {this.state.result.price}$</p>
                </section>

                <Comments comments={this.state.comments} />
                <CommentForm submit={this.commentFormHandler.bind(this)} />

            </section>
        )

    }


}