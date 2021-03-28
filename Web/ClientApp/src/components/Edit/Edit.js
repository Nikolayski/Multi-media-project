import React, { Component } from 'react';
import authService from '../api-authorization/AuthorizeService';
import Car from '../Cars/Car/Car';
import axios from 'axios';
import Blog from '../Blogs/Blog/Blog';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            car: {},
            blog: {},
        }
    }

    componentDidMount() {
        if (this.props.match.params.type == "car") {
            fetch("https://localhost:44387/api/cars/" + this.props.match.params.id)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        car: data
                    })
                })
                .catch(error => console.log(error.message))
        }

        else {
            fetch("https://localhost:44387/api/blogs/" + this.props.match.params.id)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        blog: data
                    })
                })
                .catch(error => console.log(error.message))
        }
    }

    inputOnChange(event) {
        var currCar = this.state.car;
        currCar[event.target.name] = event.target.value;

        this.setState({
            car: currCar
        })
    }

   onInputBlogChange(event) {
        var currBlog = this.state.blog;
        currBlog[event.target.name] = event.target.value;
        this.setState({
            blog: currBlog
        })
    }

   async handleEvent(event) {
        event.preventDefault();
        const token = await authService.getAccessToken();
        const data = this.state.car;
        axios.post('/api/cars/edit/', data, {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` },
        })
            .then(response => {
                this.props.history.push("/myCars")

            })
            .catch(error => {
                console.log(error.message);
            })
    }

    async sendData(event) {
        event.preventDefault();
        const token = await authService.getAccessToken();
        const data = this.state.blog;
        axios.post('/api/blogs/edit', data, {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` },
        })
            .then(response => {
                this.props.history.push("/myBlogs")
            })
            .catch(error => {
                console.log(error.message);
            })
    }

   render() {
        if (this.props.match.params.type == "car") {
            return (
                <section className="car-form-wrapper">
                    <Car manufacturer={this.state.car.manufacturer} model={this.state.car.model} image={this.state.car.image} year={this.state.car.year} contact={this.state.car.contact} price={this.state.car.price} />
                    <div className="car-form">
                        <form className="car-items" onSubmit={this.handleEvent.bind(this)}>
                            <input onChange={this.inputOnChange.bind(this)} type="text" placeholder="Model" name="model" defaultValue={this.state.car.model} />
                            <input onChange={this.inputOnChange.bind(this)} type="text" placeholder="Image Url" name="image" defaultValue={this.state.car.image} />
                            <input onChange={this.inputOnChange.bind(this)} type="number" placeholder="Year" name="year" defaultValue={this.state.car.year} />
                            <input onChange={this.inputOnChange.bind(this)} type="number" placeholder="Price" name="price" defaultValue={this.state.car.price} />
                            <input onChange={this.inputOnChange.bind(this)} type="number" placeholder="Phone Contact" name="contact" defaultValue={this.state.car.contact} />
                            <textarea onChange={this.inputOnChange.bind(this)} type="text" placeholder="Info" name="info" defaultValue={this.state.car.info}></textarea>
                            <button type="submit">Add</button>
                        </form>
                    </div>
                </section>
            )
        }

        else {
            return (
                <form onSubmit={this.sendData.bind(this)}>
                    <article className="addblog-wrapper">
                        <input onChange={this.onInputBlogChange.bind(this)} type="text" placeholder="Title" name="title" defaultValue={this.state.blog.title} />
                        <textarea onChange={this.onInputBlogChange.bind(this)} rows="20" type="text" placeholder="Description" name="description" defaultValue={this.state.blog.description} ></textarea>
                        <input onChange={this.onInputBlogChange.bind(this)} type="text" placeholder="Image Url" name="image" defaultValue={this.state.blog.image} />
                        <button type="submit">DONE</button>
                    </article>
                </form>
            )
        }
    }
}