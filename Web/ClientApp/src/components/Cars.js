import React, { Component } from 'react';
import axios from 'axios';
import { AddCar } from './AddCar';
import Car from './Car';
import { Link } from 'react-router-dom';

export default class Cars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        }
    }

        componentDidMount = () => {
            axios.get('/api/cars/get').then(response => {
                for (var i = 0; i < response.data.length; i++) {
                    var currCars = this.state.cars;
                    currCars.push(response.data[i]);
                    this.setState({
                        cars: currCars
                    })
                }
            })
        }


        render() {
            return (
                <div>
                    <Link className="addcar-button" to="/addCar" Component={AddCar}>Add Car</Link>
                    <section className="car-card-wrapper">
                        {this.state.cars.map(x => (
                            <Car manufacturer={x.manufacturer} model={x.model} image={x.image} year={x.year} price={x.price} />
                        ))}
                    </section>
                </div>
            )
        }
    }