import React, { Component } from 'react';
import axios from 'axios';
import authService from '../../api-authorization/AuthorizeService';
import '../../Edit/Edit.css';
import * as services from '../../../Services/ComponentServices';

export default class AddBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    onInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    sendData(e) {
        e.preventDefault();
        authService.getUser().then(response => {
            this.setState({ userId: response.sub })
           services.create(this.state, "blogs")
                .then(data => this.props.history.push("/blogs"))
                .catch(error => console.log(error.message))
        })
    }

   render() {
        return (
            <form onSubmit={this.sendData.bind(this)}>
                <article className="addblog-wrapper">
                    <select onChange={this.onInputChange.bind(this)} name="theme">
                        <option value="ERROR">Choose your theme</option>
                        <option value="photography">Photography</option>
                        <option value="sports">Sports</option>
                        <option value="movies">Movies</option>
                        <option value="news">News</option>
                        <option value="space">Space</option>
                        <option value="holidays">Holidays</option>
                        <option value="lifestyle">Lifestyle</option>
                        <option value="history">History</option>
                    </select>
                    <input onChange={this.onInputChange.bind(this)} type="text" placeholder="Title" name="title" />
                    <textarea onChange={this.onInputChange.bind(this)} rows="20" type="text" placeholder="Description" name="description"></textarea>
                    <input onChange={this.onInputChange.bind(this)} type="text" placeholder="Image Url" name="image" />
                    <button type="submit">DONE</button>
                </article>
            </form>
        )
    }
}