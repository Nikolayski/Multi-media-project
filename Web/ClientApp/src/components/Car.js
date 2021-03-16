import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ratingUp: 0,
            ratingDown: 0,
            info: this.props.info.slice(0, 10)
        }
    }

    componentDidMount() {
        axios.get('/api/cars/rating/' + this.props.id).then(res => {
            this.setState({
                ratingUp: res.data[0],
                ratingDown: res.data[1]
            })
        })
    }

    rateUp() {
        axios.get('/api/cars/rup/' + this.props.id).then(res => {
            this.setState({ ratingUp: res.data });
        })
        .catch(err=> console.log(err.message))
    }

    rateDown() {
        axios.get('/api/cars/rdown/' + this.props.id).then(res => {
            this.setState({ ratingDown: res.data });
        })
            .catch(err => console.log(err.message))
    }

    render() {
        return (
            <div className="car-card">
                <h5 className="car-card-title">Manufacturer: {this.props.manufacturer }</h5>
                <img className="car-card-image" src={this.props.image}></img>
                <p className="car-card-model">Model: {this.props.model}</p>
                <p className="car-card-year">Year: {this.props.year}</p>
                <p className="car-card-price">Price: {this.props.price}$</p>
                <p className="car-card-price">Contact: {this.props.contact}</p>
                <p className="car-card-price">Info: {this.state.info}</p>
                <article className="car-card-thumbs">
                    <p><i onClick={this.rateUp.bind(this) } className="far fa-thumbs-up"></i><span> {this.state.ratingUp}</span></p>
                    <p><i onClick={this.rateDown.bind(this)} className="far fa-thumbs-down"></i><span> {this.state.ratingDown}</span></p>
                </article>
                <Link to={`/CarDetails/${this.props.id}`}>Details</Link>
            </div>
            )
    }
}