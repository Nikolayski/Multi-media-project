import React, { Component } from 'react';
import axios from 'axios';
import Car from '../Car/Car';
import { Link } from 'react-router-dom';
import authService from '../../api-authorization/AuthorizeService';
import '../Cars.css';
import * as services from '../../../Services/ComponentServices'

export default class MyCars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [],
            userId: ""
        }
    }

    componentDidMount() {
        authService.getUser().then(response => {
            this.setState({ userId: response.sub })
            services.getMyCollection(this.state.userId, "cars/my-cars")
                .then(data => this.setState({ cars: data }))
                .catch(err => console.log(err.message));
        });
    }

    render() {
        if (this.state.cars.length==0) {
            return <h2>No cars available</h2>
        }
        return (
            <div>
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
                            edit="true"
                            remove="true"
                        />
                    ))}
                </section>
            </div>
        )
    }
}