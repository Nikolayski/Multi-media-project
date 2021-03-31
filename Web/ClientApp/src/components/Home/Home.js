import React, { Component } from 'react';
import RandomElements from './RandomElements/RandomElements';

export class Home extends Component {
    static displayName = Home.name;
    constructor(props) {
        super(props);
    }




    render() {
        return (
                <div className="home-wrapper">
                    <RandomElements>Blogs</RandomElements>
                    <RandomElements>Cars</RandomElements>
                </div>
        )
    }
}

