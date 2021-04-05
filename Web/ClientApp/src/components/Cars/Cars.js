﻿import React, { Component, Suspense } from 'react';
import Car from './Car/Car';
import SelectManufacturer from './SelectManufacturer';
import { Link } from 'react-router-dom';
import './Cars.css';
import * as services from '../../Services/ComponentServices';


export default class Cars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        }
    }

    componentDidMount() {
        this.setState({ cars: [] })
        services.getAll("cars")
            .then(data => this.setState({ cars: data }))
            .catch(error => console.log(error.message))
    }

    getManufacturer(event) {
        if (event.target.value == "all") {
            this.componentDidMount();
        }
        else {
            this.setState({ cars: [] })
            services.getOption(event.target.value, "cars")
                .then(data => this.setState({ cars: data }))
                .catch(error => console.log(error.message))
        }
    }

    render() {
        if (this.state.cars.length == 0) {
            return (
                <div className="no-cars-manufacturer">
                    <h2 className="no-cars-message">No cars available</h2>
                    <SelectManufacturer change={this.getManufacturer.bind(this)} />
                    <Link className="addcar-button" to="/addCar">Add Car</Link>
                </div>
            )
        }
        return (
            <div>
                <div className="cars-buttons">
                    <SelectManufacturer change={this.getManufacturer.bind(this)} />
                    <Link className="addcar-button" to="/addCar">Add Car</Link>
                </div>
                <section className="car-card-wrapper">
                    {this.state.cars.map(x => (
                        <Car key={x.id}
                            id={x.id}
                            manufacturer={x.manufacturer}
                            model={x.model}
                            image={x.image}
                            year={x.year}
                            price={x.price}
                            contact={x.contact}
                            owner={x.ownerUsername}
                            ratingUp={x.ratingUp}
                            ratingDown={x.ratingDown}
                        />
                    ))}
                </section>
            </div>
        )
    }
}
