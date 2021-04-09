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
            manufacturers: [
                'alfaromeo', 'audi', 'bentley', 'bmw', 'bugatti', 'cadillac', 'chevrolet', 'citroen', 'dacia',
                'fiat', 'ford', 'jeep', 'kia', 'lada', 'lexus', 'maserati', 'maybach', 'mazda', 'mcLaren', 'mercedes',
                'mitsubishi', 'nissan', 'opel', 'peugeot', 'renault', 'rover', 'saab', 'seat', 'smart', 'skoda', 'tesla',
                'toyota', 'volkswagen', 'volvo'
            ],
            manufacturerError: '',
            cars: [],
            searchCars: [],
        }
    }


    componentDidMount() {
        if (this.state.searchCars.length == 0) {
            services.getAll(`${this.props.match.path.slice(1, this.props.match.path.length)}`)
                .then(data => this.setState({ cars: data }))
                .catch(error => console.log(error.message))
        }
    }

    getManufacturer(event) {
        if (event.target.value != "error") {
            if (event.target.value == "all") {
                this.setState({ searchCars: [] })
                this.componentDidMount();
            }
            else {
                this.setState({ cars: [] })
                services.getOption(event.target.value, this.props.match.path.slice(1, this.props.match.path.length))
                    .then(data => this.setState({ cars: data }))
                    .catch(error => console.log(error.message))
            }
        }
    }

    formSearchHandler = (e) => {
        e.preventDefault();
        var IsValid = this.state.manufacturers.includes(e.target.manufacturer.value.toLowerCase())
        if (IsValid) {
            const car = {
                manufacturer: e.target.manufacturer.value,
                yearFrom: e.target.yearFrom.value ? e.target.yearFrom.value : 0,
                yearTo: e.target.yearTo.value ? e.target.yearTo.value : 2021,
                priceFrom: e.target.priceFrom.value ? e.target.priceFrom.value : 0,
                priceTo: e.target.priceTo.value ? e.target.priceTo.value : 200000,
            };

            services.search(car, this.props.match.path.slice(1, this.props.match.path.length))
                .then(data => this.setState({ searchCars: data }))
                .catch(error => this.setState({ message: 'Invalid data' }))


            e.target.manufacturer.value = '';
            e.target.yearFrom.value = '';
            e.target.yearTo.value = '';
            e.target.priceFrom.value = '';
            e.target.priceTo.value = '';
            this.setState({ manufacturerError: '' });
        }
        else {
            this.setState({ manufacturerError: 'Invalid manufacturer!' })
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
                <form className="car-search" onSubmit={this.formSearchHandler.bind(this)}>
                    <div>
                        <input type="text" placeholder="Manufacturer" name="manufacturer" />
                        <span style={{ color: 'red', fontWeight: 'bold' }}>{this.state.manufacturerError}</span>
                    </div>
                    <div>
                        <input type="number" placeholder="Year from" name="yearFrom" />
                    </div>
                    <div>
                        <input type="number" placeholder="Year to" name="yearTo" />
                    </div>
                    <div>
                        <input type="number " placeholder="Price from" name="priceFrom" />
                    </div >
                    <div>
                        <input type="number " placeholder="Price to" name="priceTo" />
                    </div >
                    <div>
                        <input type="submit" value="Search" />
                    </div >
                </form>

                <section className="car-card-wrapper">
                    {this.state.searchCars.length != 0 ? this.state.searchCars.map(x => (
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