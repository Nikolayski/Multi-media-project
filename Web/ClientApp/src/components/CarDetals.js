import React,{ Component } from 'react';

export default class CarDetails extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h1>{this.props.match.params.id}</h1>

                <p>sf faf afasfasf as f</p>
            </div>
            )
    }
}