import React, { Component } from 'react';
import './SelectBlogTheme.css';

export default class SelectBlogTheme extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <select className="select-theme" onChange={this.props.change}>
                <option value="ERROR">Search theme...</option>
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