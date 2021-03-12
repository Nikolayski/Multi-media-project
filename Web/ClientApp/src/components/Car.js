import React, { Component } from 'react';

export default class Car extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="car-card">
                <h5 className="car-card-title">Manufacturer: {this.props.manufacturer }</h5>
                <img className="car-card-image" src={this.props.image}></img>
                <p className="car-card-model">Model: {this.props.model}</p>
                <p className="car-card-year">Year: {this.props.year}</p>
                <p className="car-card-price">Price: {this.props.price}$</p>
            </div>
            )
    }
}