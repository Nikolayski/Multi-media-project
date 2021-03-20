import React,{ Component } from 'react';
import authService from './api-authorization/AuthorizeService';

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
            <div>
                <h2>{this.state.manufacturer}</h2>
                <h4>{this.state.model}</h4>
                <img src={this.state.image}></img>
                <p>{this.state.info}</p>
                <p>{this.state.contact }</p>
                <p>{this.state.owner }</p>
                <p>{this.state.year }</p>
                <p>{this.state.price }</p>
                <p>{this.state.ratingUp }</p>
                <p>{this.state.ratingDown }</p>
            </div>
            )
    }
}