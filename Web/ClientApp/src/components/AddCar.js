import React, { Component } from 'react';
import axios from 'axios';
import Car from './Car';
import authService from './api-authorization/AuthorizeService'

export class AddCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            car: {
                manufacturer: "",
                model: "",
                image: "",
                year: "",
                price: "",
                contact: "",
                info: "",
            },
            message: ""
                
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

    contact(event) {
        let currCar = this.state.car;
        currCar.contact = event.target.value;
        this.setState({
            car: currCar
        })
    }

    info(event) {
        let currCar = this.state.car;
        currCar.info = event.target.value;
        this.setState({
            car: currCar
        })
    }

    async handleEvent() {
        const token = await authService.getAccessToken();
        const data =  this.state.car;
        axios.post('/api/cars/post/', data, {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` },
        })
            .then(response => {
                console.log(response);
                this.setState({message: "Successfully added car!"})
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
                    <select onChange={this.manufacturer.bind(this)}>
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
                    </select>                 
                    <input onChange={this.model.bind(this)} type="text" placeholder="Model" />
                    <input onChange={this.image.bind(this)} type="text" placeholder="Image Url" />
                    <input onChange={this.year.bind(this)} type="number" placeholder="Year" />
                    <input onChange={this.price.bind(this)} type="number" placeholder="Price" />
                    <input onChange={this.contact.bind(this)} type="number" placeholder="Phone Contact" />
                    <textarea onChange={this.info.bind(this)} type="text" placeholder="Info"></textarea>
                    <button onClick={this.handleEvent.bind(this)}>Add</button>
                    <h4>{this.state.message }</h4>
                </div>
            </section>
        )
    }
}
