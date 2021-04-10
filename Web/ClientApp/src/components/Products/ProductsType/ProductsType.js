import React from 'react';
import './ProductsType.css'

const ProductsType = (props) => {

    return (
        <select onChange={props.change} className="select-product" name="productType">
            <option value="error">Search:</option>
            <option value="all">Products:</option>
            <option value="electronic">Electronic</option>
            <option value="music">Music</option>
            <option value="game">Game</option>
            <option value="Computer">Computer</option>
            <option value="tv">TV</option>
            <option value="beauty">Beauty</option>
            <option value="health">Health</option>
            <option value="clothes">Clothes</option>
            <option value="children">Children</option>
            <option value="accessories">Accessories</option>
        </select>
        )
}

export default ProductsType;