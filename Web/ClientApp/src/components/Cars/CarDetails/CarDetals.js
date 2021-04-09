import React, { Component } from 'react';
import './CarDetails.css';
import * as services from '../../../Services/ComponentServices';

export default class CarDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        services.getDetails(this.props.match.params.id, "cars")
            .then(data => this.setState(data))
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
                </article>
            </div>
        )
    }
}