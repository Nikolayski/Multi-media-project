import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

export default class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ratingUp: 0,
            ratingDown: 0,
            IsDeleted: ""
        }
    }



    rateUp() {
        axios.get('/api/cars/rup/' + this.props.id).then(res => {
            var ratingUpper = this.state.ratingUp;
            ratingUpper += 1;
            this.setState({ ratingUp: ratingUpper })
        })
            .catch(err => console.log(err.message))
    }

    rateDown() {
        axios.get('/api/cars/rdown/' + this.props.id).then(res => {
            var ratingDoown = this.state.ratingDown;
            ratingDoown += 1;
            this.setState({ ratingDown: ratingDoown })
        })
            .catch(err => console.log(err.message))
    }

    removeCar() {
        fetch("https://localhost:44387/api/cars/remove/" + this.props.id)
            .then(res => res.text())
            .then(data => this.setState({ IsDeleted: true }))
            .catch(error => console.log(error))
   
    }

    render() {
        if (this.state.IsDeleted) {
          return <Redirect to="/MyCars" />
        }
        else {
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
                        <p><i onClick={this.rateUp.bind(this)} className="far fa-thumbs-up"></i><span> {this.props.ratingUp + this.state.ratingUp}</span></p>
                        <p><i onClick={this.rateDown.bind(this)} className="far fa-thumbs-down"></i><span> {this.props.ratingDown + this.state.ratingDown}</span></p>
                    </article>
                    <Link to={`/CarDetails/${this.props.id}`}>Details</Link>
                    <article>
                        {this.props.edit ? <button className="car-card-edit">Edit</button> : ''}
                        {this.props.remove ? <button onClick={this.removeCar.bind(this)} className="car-card-remove">Remove</button> : ''}
                    </article>
                </div>
            )
        }
       



    }
}