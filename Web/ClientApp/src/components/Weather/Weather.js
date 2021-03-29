import React, { Component } from 'react';
import axios from 'axios';
import './Weather.css'

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            town: "",
            temp: "",
            feels_like: "",
            min_temp: "",
            max_temp: "",
            wind: "",
            description: ""
        }
    }

    getTownName(event) {
        this.setState({
            town: event.target.value
        })
    }

    getInfo = () => {
        axios.get('/api/weather/' + this.state.town).then(response => {
            this.setState({
                temp: response.data.main.temp,
                feels_like: response.data.main.feels_like,
                min_temp: response.data.main.temp_min,
                max_temp: response.data.main.temp_max,
                wind: response.data.wind.speed,
                description: response.data.weather[0].description
            })
        })
    }

    render() {
        if (this.state.temp == "" || this.state.temp == null) {
            return (
                <article className="weather-form">
                    <input onChange={this.getTownName.bind(this)} type="text" placeholder="Enter town name" />
                    <button onClick={() => this.getInfo()}>Get weather info</button>
                </article>
            )
        }
        else {
            return (
                <section className="weather-wrapper">
                  <article className="weather-form">
                    <input onChange={this.getTownName.bind(this)} type="text" placeholder="Enter town name" />
                    <button onClick={() => this.getInfo()}>Get weather info</button>
                </article>
                    <article className="weather-info">
                    <span>Town: <strong>{this.state.town}</strong> </span>
                        <span>Temperature: <strong>{this.state.temp}°</strong></span>
                        <span>Min. Temperature: <strong>{this.state.min_temp}°</strong></span>
                        <span>Max. Temperature: <strong>{this.state.max_temp}°</strong></span>
                        <span>Wind: <strong>{this.state.wind} m/s</strong></span>
                        <span>Description: <strong>{this.state.description}</strong></span>
                    </article>
                </section>
                )
        }
        
    }

}