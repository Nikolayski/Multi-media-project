import React, { Component } from 'react';
import axios from 'axios';
import authService from '../../api-authorization/AuthorizeService';
import '../../Edit/Edit.css';

export default class AddBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: {},
        }
    }

    onInputChange(event) {
        var currBlog = this.state.blog;
        currBlog[event.target.name] = event.target.value;
        this.setState({
            blog: currBlog
        })
    }

    async sendData(e) {
        e.preventDefault();
        const token = await authService.getAccessToken();
        const data = this.state.blog;
        axios.post('/api/blogs/post', data, {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` },
        })
            .then(response => {
                this.props.history.push("/blogs");
            })
            .catch(error => {
                console.log(error.message);
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