import React, { Component, useState } from 'react';
import Car from '../Car/Car';
import authService from '../../api-authorization/AuthorizeService';
import SelectManufacturer from '../SelectManufacturer';
import '../../Edit/Edit.css';
import * as services from '../../../Services/ComponentServices';
import { Redirect } from 'react-router-dom';
import { render } from 'react-dom';

export default class AddCar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            car: {},
            errors: {}
        }
    }


    inputOnChange(event) {
        if (event.target.value != "error" && event.target.value != "all") {
            var currCar = { ...this.state.car };
            currCar[event.target.name] = event.target.value;
            this.setState({ car: currCar })
        }
    }

    validation() {
        if (this.state.errors.manufacturerError == '' && this.state.errors.modelError == ''
            && this.state.errors.imageError == '' && this.state.errors.yearError == ''
            && this.state.errors.priceError == '' && this.state.errors.contactError == ''
            && this.state.errors.infoError == '') {
            return true;
        }
        return false;
    }

    handleEvent(event) {
        event.preventDefault();
        const [manufacturer, model, image, year, price, contact, info] = event.target;

        this.setState({
            errors: {
                manufacturerError: manufacturer.value && manufacturer.value!='error' && manufacturer.value!='all' ? '' : 'Invalid manufacturer',
                modelError: model.value ? '' : 'Invalid model',
                imageError: image.value ? '' : 'Invalid image',
                yearError: year.value ? '' : 'Invalid year',
                priceError: price.value ? '' : 'Invalid price',
                contactError: contact.value ? '' : 'Invalid contact',
                infoError: info.value ? '' : 'Invalid info',

            }
        })

        if (this.validation()) {
            authService.getUser().then(res => {
                if (!res) {
                    this.props.history.push('/authentication/login')
                }
                else {

                    this.setState(prevState => ({ ...prevState, car: { ...prevState.car, userId: res.sub } }))
                    services.create(this.state.car, "cars")
                        .then(data => this.props.history.push("/cars"))
                        .catch(err => console.log(err.message))
                }

            })
                .catch(error => console.log(error.message))

        }
    }

    render() {
        return (
            <section className="car-form-wrapper">
                <Car manufacturer={this.state.car.manufacturer} model={this.state.car.model} image={this.state.car.image} year={this.state.car.year} contact={this.state.car.contact} price={this.state.car.price} />
                <div className="car-form">
                    <form className="car-items" onSubmit={this.handleEvent.bind(this)}>
                        <SelectManufacturer change={this.inputOnChange.bind(this)} />
                        <span className="field-validation">{this.state.errors.manufacturerError}</span>
                        <input onChange={this.inputOnChange.bind(this)} type="text" placeholder="Model" name="model" />
                        <span className="field-validation">{this.state.errors.modelError}</span>
                        <input onChange={this.inputOnChange.bind(this)} type="text" placeholder="Image Url" name="image" />
                        <span className="field-validation">{this.state.errors.imageError}</span>
                        <input onChange={this.inputOnChange.bind(this)} type="number" placeholder="Year" name="year" />
                        <span className="field-validation">{this.state.errors.yearError}</span>
                        <input onChange={this.inputOnChange.bind(this)} type="number" placeholder="Price" name="price" />
                        <span className="field-validation">{this.state.errors.priceError}</span>
                        <input onChange={this.inputOnChange.bind(this)} type="number" placeholder="Phone Contact" name="contact" />
                        <span className="field-validation">{this.state.errors.contactError}</span>
                        <textarea onChange={this.inputOnChange.bind(this)} type="text" placeholder="Info" name="info"></textarea>
                        <span className="field-validation">{this.state.errors.infoError}</span>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </section>
        )
    }
}

