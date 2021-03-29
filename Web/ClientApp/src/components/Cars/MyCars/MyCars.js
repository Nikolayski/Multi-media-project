import React, { Component } from 'react';
import axios from 'axios';
import Car from '../Car/Car';
import { Link } from 'react-router-dom';
import authService from '../../api-authorization/AuthorizeService';
import '../Cars.css';

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
            axios.get('/api/cars/my-cars/' + this.state.userId).then(res => {
                for (var i = 0; i < res.data.length; i++) {
                    var currCars = this.state.cars;
                    currCars.push(res.data[i]);
                    this.setState({ cars: currCars })
                }
            })
                .catch(err => console.log(err.message));
        });




    }

    render() {
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