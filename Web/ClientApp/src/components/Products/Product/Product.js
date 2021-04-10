import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {

    return (
        <div className="product-card">
            <h3 className="product-card-title">{props.productType}</h3>
            <img className="product-card-image"src={props.image} />
            <p>From:<i> {props.creatorUsername}</i></p>
            <p className="product-card-description">{props.description.slice(0,10)}</p>
            <p className="product-card-price">Price: {props.price}$</p>
            <Link to={`/productDetails/${props.id}`}>Details</Link>
        </div>
        )
}

export default Product;