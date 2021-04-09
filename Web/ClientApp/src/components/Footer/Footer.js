import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = (props) => {


    return (
        <footer className="footer-wrapper">
            <ul className="footer-navigation">
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                    <span>Country: Bulgaria</span>
                </li>
                <li>
                    <span>Phone: 0888888880</span>
                </li>
            </ul>
            <ul className="footer-navigation">
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <span>Company: SoftDev </span>
                </li>
                <li>
                    <span>Registered: 2021</span>
                </li>
            </ul>
            <ul className="footer-navigation">
                <li>
                    <Link to="/cars">Cars Collections</Link>
                </li>
                <li>
                    <Link to="/blogs">Blogs Collections</Link>
                </li>

            </ul>
            <ul className="footer-navigation">
                <li>
                    <Link to="/authentication/login">You didn't sign up?</Link>
                </li>
                <li>
                    <span>Copyrights &copy; 2021</span>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;