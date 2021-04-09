import React, { Component } from 'react';
import authService from '../api-authorization/AuthorizeService';
import Car from '../Cars/Car/Car';
import axios from 'axios';
import Blog from '../Blogs/Blog/Blog';
import './Edit.css';
import * as services from '../../Services/ComponentServices';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        services.getDetails(this.props.match.params.id, this.props.match.params.type)
            .then(data => this.setState(data))
            .catch(error => console.log(error.message))

    }

    inputOnChange(event) {
        var currState = this.state;
        currState[event.target.name] = event.target.value;
        this.setState({ currState });
    }


    async handleEvent(event) {
        event.preventDefault();
        const token = await authService.getAccessToken();
        const data = this.state;
        axios.post(`/api/${this.props.match.params.type}/edit/`, data, {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` },
        })
            .then(response => {
                this.props.history.push(`/my${this.props.match.params.type}`)

            })
            .catch(error => {
                console.log(error.message);
            })
    }

    render() {
        if (this.props.match.params.type == "cars") {
            return (
                <section className="car-form-wrapper">
                    <Car manufacturer={this.state.manufacturer} model={this.state.model} image={this.state.image} year={this.state.year} contact={this.state.contact} price={this.state.price} />
                    <div className="car-form">
                        <form className="car-items" onSubmit={this.handleEvent.bind(this)}>
                            <input onChange={this.inputOnChange.bind(this)} type="text" placeholder="Model" name="model" defaultValue={this.state.model} />
                            <input onChange={this.inputOnChange.bind(this)} type="text" placeholder="Image Url" name="image" defaultValue={this.state.image} />
                            <input onChange={this.inputOnChange.bind(this)} type="number" placeholder="Year" name="year" defaultValue={this.state.year} />
                            <input onChange={this.inputOnChange.bind(this)} type="number" placeholder="Price" name="price" defaultValue={this.state.price} />
                            <input onChange={this.inputOnChange.bind(this)} type="number" placeholder="Phone Contact" name="contact" defaultValue={this.state.contact} />
                            <textarea onChange={this.inputOnChange.bind(this)} type="text" placeholder="Info" name="info" defaultValue={this.state.info}></textarea>
                            <button type="submit">Add</button>
                        </form>
                    </div>
                </section>
            )
        }

        return (
            <form onSubmit={this.handleEvent.bind(this)}>
                <article className="addblog-wrapper">
                    <input onChange={this.inputOnChange.bind(this)} type="text" placeholder="Title" name="title" defaultValue={this.state.title} />
                    <textarea onChange={this.inputOnChange.bind(this)} rows="20" type="text" placeholder="Description" name="description" defaultValue={this.state.description} ></textarea>
                    <input onChange={this.inputOnChange.bind(this)} type="text" placeholder="Image Url" name="image" defaultValue={this.state.image} />
                    <button type="submit">DONE</button>
                </article>
            </form>
        )
    }
}