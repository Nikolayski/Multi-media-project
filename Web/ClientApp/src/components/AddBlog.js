import React, { Component } from 'react';
import axios from 'axios';
import authService from './api-authorization/AuthorizeService'

export default class AddBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: {
                theme: "",
                title: "",
                description: "",
                image: ""
            }
        }
    }

    getTheme(event) {
        var prevBlog = this.state.blog;
        prevBlog.theme = event.target.value;
        this.setState({
            blog: prevBlog
        })
    }

    getTitle(event) {
        var prevBlog = this.state.blog;
        prevBlog.title = event.target.value;
        this.setState({
            blog: prevBlog
        })
    }

    getDescription(event) {
        var prevBlog = this.state.blog;
        prevBlog.description = event.target.value;
        this.setState({
            blog: prevBlog
        })
    }

    getImage(event) {
        var prevBlog = this.state.blog;
        prevBlog.image = event.target.value;
        this.setState({
            blog: prevBlog
        })
    }

    async sendData() {
        const token = await authService.getAccessToken();
        const data = this.state.blog;
        axios.post('/api/blogs/post', data, {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` },
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error.message);
            })
    }



    render() {
        return (
            <article className="addblog-wrapper">
                <select onChange={this.getTheme.bind(this)}>
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
                <input onChange={this.getTitle.bind(this)} type="text" placeholder="Title" />
                <textarea onChange={this.getDescription.bind(this)} rows="20" type="text" placeholder="Description"></textarea>
                <input onChange={this.getImage.bind(this)} type="text" placeholder="Image Url" />
                <button onClick={this.sendData.bind(this)}>DONE</button>
            </article>
        )
    }
}