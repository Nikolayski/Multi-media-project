import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Car.css';
import * as services from '../../../Services/ComponentServices';

export default class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ratingUp: 0,
            ratingDown: 0,
            IsDeleted: ""
        }
    }

    componentWillMount() {
        this.setState({
           ratingUp: this.props.ratingUp,
           ratingDown: this.props.ratingDown,
        })
    }

    rateUp() {
        services.rateUp(this.props.id)
            .then(data => this.setState({ ratingUp: data }))
            .catch(err => console.log(err.message))
    }

    rateDown() {
        services.rateDown(this.props.id)
            .then(data => this.setState({ ratingDown: data }))
            .catch(err => console.log(err.message))
    }

    removeCar() {
            services.remove(this.props.id, "cars")
            .then(data => this.setState({ IsDeleted: true }))
            .catch(error => console.log(error))
 }

    render() {
        if (this.state.IsDeleted) {
            return <Redirect to="/MyCars" />
        }
        return (
            <div className="car-card">
                <h5 className="car-card-title">Manufacturer: {this.props.manufacturer}</h5>
                <p className="car-card-model">Model: {this.props.model}</p>
                <img className="car-card-image" src={this.props.image}></img>
                <p className="car-card-year">Year: {this.props.year}</p>
                <p className="car-card-price">Price: {this.props.price}$</p>
                <p className="car-card-price">Owner: {this.props.owner}</p>
                <p className="car-card-price">Contact: {this.props.contact}</p>
                <article className="car-card-thumbs">
                    <p><i onClick={this.rateUp.bind(this)} className="far fa-thumbs-up"></i><span> {this.state.ratingUp}</span></p>
                    <p><i onClick={this.rateDown.bind(this)} className="far fa-thumbs-down"></i><span> {this.state.ratingDown}</span></p>
                </article>
                <Link to={`/CarDetails/${this.props.id}`}>Details</Link>
                <article>
                    {this.props.edit ? <Link to={`/edit/cars/${this.props.id}`}>Edit</Link> : ''}
                    {this.props.remove ? <button onClick={this.removeCar.bind(this)} className="car-card-remove">Remove</button> : ''}
                </article>
            </div>
        )
    }
}