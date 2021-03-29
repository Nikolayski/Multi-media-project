import React, { Component, Suspense } from 'react';
import axios from 'axios';
import Car from './Car/Car';
import SelectManufacturer from './SelectManufacturer';
import { Link } from 'react-router-dom';
import './Cars.css';

export default class Cars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        }
    }
    //async populateWeatherData() {
    //    const token = await authService.getAccessToken();
    //    const response = await fetch('weatherforecast', {
    //        headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
    //    });
    //    const data = await response.json();
    //    this.setState({ forecasts: data, loading: false });
    //}


    componentDidMount() {
        this.setState({ cars: [] })
        axios.get('/api/cars')
            .then(response => {
                for (var i = 0; i < response.data.length; i++) {
                    var currCars = this.state.cars;
                    currCars.push(response.data[i]);
                    this.setState({
                        cars: currCars
                    })
                }
            })
    }

    getManufacturer(event) {
        if (event.target.value == "all") {
            this.componentDidMount();
        }
        else {
            this.setState({ cars: [] })
            axios.post('/api/cars/get/' + event.target.value).then(response => {
                for (var i = 0; i < response.data.length; i++) {
                    var currCars = this.state.cars;
                    currCars.push(response.data[i]);
                    this.setState({
                        cars: currCars
                    })
                }
            })
                .catch(error => console.log(error.message))
        }

    }


    render() {

        return (
            <div>
               <SelectManufacturer change={this.getManufacturer.bind(this)} />
               
                <Link className="addcar-button" to="/addCar">Add Car</Link>
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
