import React, { Component, Suspense } from 'react';
import axios from 'axios';
import Car from './Car/Car';
import { Link } from 'react-router-dom';

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
        if (event.target.value == "all" || event.target.value == "ERROR") {
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
                <select onChange={this.getManufacturer.bind(this)}>
                    <option value="ERROR">Manufacturer:</option>
                    <option value="alfaRomeo">Alfa Romeo</option>
                    <option value="audi">Audi</option>
                    <option value="bentley">Bentley</option>
                    <option value="bmw">Bmw</option>
                    <option value="bugatti">Bugatti</option>
                    <option value="cadillac">Cadillac</option>
                    <option value="chevrolet">Chevrolet</option>
                    <option value="citroen">Citroen</option>
                    <option value="dacia">Dacia</option>
                    <option value="fiat">Fiat</option>
                    <option value="ford">Ford</option>
                    <option value="jeep">Jeep</option>
                    <option value="kia">Kia</option>
                    <option value="lada">Lada</option>
                    <option value="lexus">Lexus</option>
                    <option value="maserati">Maserati</option>
                    <option value="maybach">Maybach</option>
                    <option value="mazda">Mazda</option>
                    <option value="mcLaren">McLaren</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="mitsubishi">Mitsubishi</option>
                    <option value="nissan">Nissan</option>
                    <option value="opel">Opel</option>
                    <option value="peugeot">Peugeot</option>
                    <option value="renault">Renault</option>
                    <option value="rover">Rover</option>
                    <option value="saab">Saab</option>
                    <option value="seat">Seat</option>
                    <option value="smart">Smart</option>
                    <option value="skoda">Skoda</option>
                    <option value="tesla">Tesla</option>
                    <option value="toyota">Toyota</option>
                    <option value="volkswagen">Volkswagen</option>
                    <option value="volvo">Volvo</option>
                    <option value="all">All</option>
                </select>
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
