import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LoginMenu } from '../../api-authorization/LoginMenu';
import Weather from '../../Weather/Weather';
import './Nav.css';
import authService from '../../api-authorization/AuthorizeService';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IsLogged: false
        }
    }
    componentDidMount() {
        authService.isAuthenticated().then(res => this.setState({ IsLogged: res }))
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
                            <NavLink activeClassName="navlink-active" className="navigation-link" exact={true} to="/">Home</NavLink>
                        </li>
                        <li className="navigation-item">
                            <NavLink activeClassName="navlink-active" className="navigation-link" exact={true}   to="/cars" >Cars</NavLink>
                        </li>
                        <li className="navigation-item">
                            <NavLink activeClassName="navlink-active" className="navigation-link" exact={true}   to="/blogs">Blogs</NavLink>
                        </li>
                        {this.state.IsLogged ? <li className="navigation-item hiddens">
                            <button className="navigation-item-btn">Collections <i className="fa fa-caret-down"></i></button>
                            <div className="navigation-item-links">
                                <Link className="navigation-item-links-link"   to="/myBlogs">My Blogs</Link>
                                <Link className="navigation-item-links-link"   to="/myCars">My Cars</Link>
                            </div>
                        </li> : ''}
                        <li className="navigation-item">
                            <NavLink activeClassName="navlink-active" className="navigation-link" exact={true}   to="/about">About</NavLink>
                        </li>
                        <li className="navigation-item">
                            <NavLink activeClassName="navlink-active" className="navigation-link" exact={true}   to="/contact">Contact</NavLink>
                        </li>
                        <LoginMenu></LoginMenu>
                    </ul>
                </nav>
                <Weather />
            </header>
        )
    }
}