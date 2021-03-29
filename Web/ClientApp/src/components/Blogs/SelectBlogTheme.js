import React, { Component } from 'react';

export default class SelectBlogTheme extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <select onChange={this.props.change} placeholder="Show theme:">
                <option value="ERROR">Choose your theme</option>
                <option value="photography">Photography</option>
                <option value="sports">Sports</option>
                <option value="movies">Movies</option>
                <option value="news">News</option>
                <option value="space">Space</option>
                <option value="holidays">Holidays</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="history">History</option>
                <option value="all">All</option>
            </select>
            )
    }
}