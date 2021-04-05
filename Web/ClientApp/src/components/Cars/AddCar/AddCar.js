import React, { Component } from 'react';
import Car from '../Car/Car';
import authService from '../../api-authorization/AuthorizeService';
import SelectManufacturer from '../SelectManufacturer';
import '../../Edit/Edit.css';
import * as services from '../../../Services/ComponentServices';

export class AddCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    inputOnChange(event) {
        if (event.target.value != "error" && event.target.value != "all") {
            this.setState({ [event.target.name]: event.target.value })
        }
    }

     handleEvent(event) {
        event.preventDefault();
        authService.getUser().then(res => {
            this.setState({ userId: res.sub })
            services.create(this.state, "cars")
                .then(data => this.props.history.push("/cars"))
                .catch(err => console.log(err.message))
        })
            .catch(error => console.log(error.message))
    }

    render() {
        return (
            <section className="car-form-wrapper">
                <Car manufacturer={this.state.manufacturer} model={this.state.model} image={this.state.image} year={this.state.year} contact={this.state.contact} price={this.state.price} />
                <div className="car-form">
                    <form className="car-items" onSubmit={this.handleEvent.bind(this)}>
                        <SelectManufacturer change={this.inputOnChange.bind(this)} />

                        <input onChange={this.inputOnChange.bind(this)} type="text" placeholder="Model" name="model" />
                        <input onChange={this.inputOnChange.bind(this)} type="text" placeholder="Image Url" name="image" />
                        <input onChange={this.inputOnChange.bind(this)} type="number" placeholder="Year" name="year" />
                        <input onChange={this.inputOnChange.bind(this)} type="number" placeholder="Price" name="price" />
                        <input onChange={this.inputOnChange.bind(this)} type="number" placeholder="Phone Contact" name="contact" />
                        <textarea onChange={this.inputOnChange.bind(this)} type="text" placeholder="Info" name="info"></textarea>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </section>
        )
    }
}
