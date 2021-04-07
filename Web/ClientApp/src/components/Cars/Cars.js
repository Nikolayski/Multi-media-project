import React, { Component, Suspense } from 'react';
import Car from './Car/Car';
import SelectManufacturer from './SelectManufacturer';
import { Link } from 'react-router-dom';
import './Cars.css';
import * as services from '../../Services/ComponentServices';

export default class Cars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [],
            searchCars: []
        }
    }

    componentDidMount() {
        if (this.state.searchCars.length==0) {
            services.getAll("cars")
                .then(data => this.setState({ cars: data }))
                .catch(error => console.log(error.message))
        }     
    }

    getManufacturer(event) {
        if (event.target.value != "error") {
            if (event.target.value == "all") {
                this.setState({searchCars: []})
                this.componentDidMount();
            }
            else {
                this.setState({ cars: [] })
                services.getOption(event.target.value, "cars")
                    .then(data => this.setState({ cars: data }))
                    .catch(error => console.log(error.message))
            }
        }
           }

    formSearchHandler = (e) => {
        e.preventDefault();

        const car = {
            manufacturer: e.target.manufacturer.value,
            yearFrom: e.target.yearFrom.value ? e.target.yearFrom.value : 1950,
            yearTo: e.target.yearTo.value ? e.target.yearTo.value : 2021,
            priceFrom: e.target.priceFrom.value ? e.target.priceFrom.value : 0,
            priceTo: e.target.priceTo.value ? e.target.priceTo.value : 200000,
        };

        fetch("https://localhost:44387/api/cars/search/", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(car)
        })
            .then(res => res.json())
            .then(data => {
                this.setState({ searchCars: data })
            })
            .catch(error => console.log(error.message))


        e.target.manufacturer.value = '';
        e.target.yearFrom.value = '';
        e.target.yearTo.value = '';
        e.target.priceFrom.value = '';
        e.target.priceTo.value = '';
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
                <form className="car-search" onSubmit={this.formSearchHandler.bind(this)}>
                    <input type="text" placeholder="Manufacturer" name="manufacturer" />
                    <input type="number" placeholder="Year from" name="yearFrom" />
                    <input type="number" placeholder="Year to" name="yearTo" />
                    <input type="number " placeholder="Price from" name="priceFrom" />
                    <input type="number " placeholder="Price to" name="priceTo" />
                    <input type="submit" value="Search" />
                </form>
                <section className="car-card-wrapper">
                    {this.state.searchCars.length!=0 ? this.state.searchCars.map(x => (
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
                    )) : this.state.cars.map(x => (
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
