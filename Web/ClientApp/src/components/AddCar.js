import React, { Component } from 'react';
import axios from 'axios';
import Car from './Car';

export class AddCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            car: {
                manufacturer: "",
                model: "",
                image: "",
                year: "",
                price: ""
            }
        }

    }

    manufacturer(event) {
        let currCar = this.state.car;
        currCar.manufacturer = event.target.value;
        this.setState({
            car: currCar
        })
    }

    model(event) {
        let currCar = this.state.car;
        currCar.model = event.target.value;
        this.setState({
            car: currCar
        })
    }


    image(event) {
        let currCar = this.state.car;
        currCar.image = event.target.value;
        this.setState({
            car: currCar
        })
    }


    year(event) {
        let currCar = this.state.car;
        currCar.year = event.target.value;
        this.setState({
            car: currCar
        })
    }

    price(event) {
        let currCar = this.state.car;
        currCar.price = event.target.value;
        this.setState({
            car: currCar
        })
    }

    handleEvent = () => {
        axios.post('/api/cars/post/', this.state.car)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    render() {
        return (
            <section className="car-form-wrapper">
                <Car manufacturer={this.state.car.manufacturer} model={this.state.car.model} image={this.state.car.image} year={this.state.car.year} price={this.state.car.price} />
                <div className="car-form">
                    <input onChange={this.manufacturer.bind(this)} type="text" placeholder="Manufacturer" />
                    <input onChange={this.model.bind(this)} type="text" placeholder="Model" />
                    <input onChange={this.image.bind(this)} type="text" placeholder="Image Url" />
                    <input onChange={this.year.bind(this)} type="number" placeholder="Year" />
                    <input onChange={this.price.bind(this)} type="number" placeholder="Price" />
                    <button onClick={() => this.handleEvent()}>Add</button>
                </div>
            </section>
        )
    }
}
