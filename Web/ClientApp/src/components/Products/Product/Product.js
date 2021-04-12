import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Product.css';
import * as services from '../../../Services/ComponentServices';

const Product = (props) => {

    const [IsDeleted, SetIsDeleted] = useState(false)

    const removeCar = () => {
        services.remove(props.id, "products")
            .then(data => SetIsDeleted( true))
            .catch(error => console.log(error))
    }

    if (IsDeleted) {
        return <Redirect to="/MyProducts" />
    }

    return (
        <div className="product-card">
            <h3 className="product-card-title">{props.productType}</h3>
            <img className="product-card-image" src={props.image} />
            <p>From:<i> {props.creatorUsername}</i></p>
            <p className="product-card-description">{props.description.slice(0, 30)}</p>
            <p className="product-card-price">Price: {props.price}$</p>
            <Link to={`/productDetails/${props.id}`}>Details</Link>
            <article>
                {props.edit ? <Link to={`/edit/products/${props.id}`}>Edit</Link> : ''}
                {props.remove ? <button onClick={removeCar} className="car-card-remove">Remove</button> : ''}
            </article>
        </div>
    )
}

export default Product;