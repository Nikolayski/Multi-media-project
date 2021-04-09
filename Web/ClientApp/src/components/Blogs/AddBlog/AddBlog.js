import React, { Component } from 'react';
import authService from '../../api-authorization/AuthorizeService';
import * as services from '../../../Services/ComponentServices';
import './AddBlog.css';

export default class AddBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: {},
            errors: {}
        }
    }
    componentWillMount() {
        authService.getUser().then(res => {
            if (!res) {
                this.props.history.push('/authentication/login')
            }
        })
    }

    validation() {
        if (this.state.errors.themeError === '' && this.state.errors.titleError === ''
            && this.state.errors.descriptionError == '' && this.state.errors.imageError == '') {
            return true;
        }
        return false;
    }

    onInputChange(event) {
        if (event.target.value != 'ERROR') {
            var currBlog = { ...this.state.blog };
            currBlog[event.target.name] = event.target.value;
            this.setState({ blog: currBlog })
        }

    }

    sendData(e) {
        e.preventDefault();
        const [theme, title, description, image] = e.target;

        this.setState({
            errors: {
                themeError: theme.value && theme.value != 'ERROR' ? '' : 'Invalid theme',
                titleError: title.value ? '' : 'Invalid title',
                descriptionError: description.value ? '' : 'Invalid description',
                imageError: image.value ? '' : 'Invalid image',
            }
        })
        if (this.validation()) {
            authService.getUser().then(response => {
                this.setState(prevState => ({ ...prevState, blog: { ...prevState.blog, userId: response.sub } }))
                services.create(this.state.blog, "blogs")
                    .then(data => this.props.history.push("/blogs"))
                    .catch(error => console.log(error.message))
            })
        }

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
                    <span className="field-validation">{this.state.errors.themeError}</span>
                    <input onChange={this.onInputChange.bind(this)} type="text" placeholder="Title" name="title" />
                    <span className="field-validation">{this.state.errors.titleError}</span>
                    <textarea onChange={this.onInputChange.bind(this)} rows="20" type="text" placeholder="Description" name="description"></textarea>
                    <span className="field-validation">{this.state.errors.descriptionError}</span>
                    <input onChange={this.onInputChange.bind(this)} type="text" placeholder="Image Url" name="image" />
                    <span className="field-validation">{this.state.errors.imageError}</span>
                    <button type="submit">DONE</button>
                </article>
            </form>
        )
    }
}