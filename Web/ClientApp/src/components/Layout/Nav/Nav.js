﻿import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LoginMenu } from '../../api-authorization/LoginMenu';
import Weather from '../../Weather/Weather';
import './Nav.css';

export default class Nav extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <header className="header">
                <nav className="nav">
                    <article className="nav-logo-wrapper">
                        <Link className="navigation-link" to="/"><img className="nav-logo" src="https://images.vexels.com/media/users/3/142898/isolated/preview/a0e8dda6f119164cfd44fa29d848bd91-multicolor-bubbles-globe-icon-by-vexels.png"></img></Link>
                    </article>
                    <ul className="navigation">
                        <li className="navigation-item">
                            <NavLink className="navigation-link" to="/" >Home</NavLink>
                        </li>
                        <li className="navigation-item">
                            <Link className="navigation-link" to="/cars">Cars</Link>
                        </li>

                        <li className="navigation-item">
                            <Link className="navigation-link" to="/blogs" >Blogs</Link>
                        </li>

                        <li className="navigation-item hiddens">
                            <button className="navigation-item-btn">Collections <i className="fa fa-caret-down"></i></button>
                            <div className="navigation-item-links">
                                <Link className="navigation-item-links-link" to="/myBlogs">My Blogs</Link>
                                <Link className="navigation-item-links-link" to="/myCars">My Cars</Link>
                            </div>
                        </li>
                        <li className="navigation-item">
                            <Link className="navigation-link" to="/about">About</Link>
                        </li>
                        <li className="navigation-item">
                            <Link className="navigation-link" to="/contact">Contact</Link>
                        </li>
                        <LoginMenu></LoginMenu>
                    </ul>
                </nav>
                <Weather />
            </header>
        )
    }
}