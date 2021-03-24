import React, { Component } from 'react';
import authService from '../../api-authorization/AuthorizeService';

export default class CarDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            manufacturer: "",
            model: "",
            contact: "",
            image: "",
            info: "",
            owner: "",
            year: "",
            price: "",
            ratingUp: "",
            ratingDown: ""
        }
    }

    componentDidMount() {

        fetch('https://localhost:44387/api/cars/' + this.props.match.params.id)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    id: data.id,
                    manufacturer: data.manufacturer,
                    model: data.model,
                    contact: data.contact,
                    image: data.image,
                    info: data.info,
                    owner: data.ownerUsername,
                    year: data.year,
                    price: data.price,
                    ratingUp: data.ratingUp,
                    ratingDown: data.ratingDown
                })

            })
            .catch(error => console.log(error.message))

    }

    render() {
        return (
            <div className="car-details-wrapper">
                <article className="car-details-image">
                    <img src={this.state.image}></img>
                </article>
                <article className="car-details-info">
                    <h2>Manufacturer: {this.state.manufacturer}</h2>
                    <h4>Model: {this.state.model}</h4>
                    <p>Info: {this.state.info}</p>
                    <p>Contact: {this.state.contact}</p>
                    <p>Owner: {this.state.owner}</p>
                    <p>Year: {this.state.year}</p>
                    <p>Price: {this.state.price}</p>
                    <p>Rate up: {this.state.ratingUp}</p>
                    <p>Rate down: {this.state.ratingDown}</p>
                </article>
            </div>
        )
    }
}