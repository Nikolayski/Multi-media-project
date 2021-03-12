import React, { Component } from 'react';
import axios from 'axios';
import { AddCar } from './AddCar';

export class Home extends Component {
    static displayName = Home.name;
    constructor(props) {
        super(props);
    }




    render() {
        return (
                <h3>HELLO from index</h3>
        )
    }
}

