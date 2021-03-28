import React, { Component } from 'react';
import axios from 'axios';
import Car from '../Car/Car';
import authService from '../../api-authorization/AuthorizeService';
import SelectManufacturer from '../../SelectManufacturer';


export class AddCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            car: {},
        }

    }

    inputOnChange(event) {
        var currCar = this.state.car;
        currCar[event.target.name] = event.target.value;

        this.setState({
            car: currCar
        })
    }


    async handleEvent(event) {
        event.preventDefault();
        const token = await authService.getAccessToken();
        const data = this.state.car;
        axios.post('/api/cars/post/', data, {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` },
        })
            .then(response => {
                this.props.history.push("/cars");
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    render() {
        return (
            <section className="car-form-wrapper">
                <Car manufacturer={this.state.car.manufacturer} model={this.state.car.model} image={this.state.car.image} year={this.state.car.year} contact={this.state.car.contact} price={this.state.car.price} />
                <div className="car-form">
                    <form className="car-items" onSubmit={this.handleEvent.bind(this)}>
                        <SelectManufacturer change={this.inputOnChange.bind(this) } />
                       
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
