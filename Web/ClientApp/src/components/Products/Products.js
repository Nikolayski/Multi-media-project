import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as services from '../../Services/ComponentServices';
import Product from './Product/Product';
import './Products.css';
import ProductsType from './ProductsType/ProductsType';

const Products = (props) => {
    const [products, SetProducts] = useState([]);

    useEffect(() => {
        services.getAll('products')
            .then(data => SetProducts(data))
            .catch(error => console.log(error.message))
    }, [])

    const productSearch = (event) => {
        event.preventDefault();
        if (event.target.value!='error') {
            if (event.target.value == 'all') {
                services.getAll('products')
                    .then(data => SetProducts(data))
                    .catch(error => console.log(error.message))
            }
            else {

                services.getOption(event.target.value, 'products')
                    .then(data => SetProducts(data))
                    .catch(err => console.log(err.message))
            }

        }
      

    }
    if (products.length == 0) {
        return <article className="addProduct-button-wrapper">
            <h2 style={{color:'whitesmoke'}}>No products</h2>
            <ProductsType change={productSearch} />
            <Link className="addProduct-button" to="/addProduct">Add product</Link>
        </article>
    }

    return (

        <section className="products-wrapper">
            <article className="addProduct-button-wrapper">
                <ProductsType change={productSearch} />
                <Link className="addProduct-button" to="/addProduct">Add product</Link>
            </article>
            <article className="product-card-wrapper">
                {products.map(x => (
                    <Product key={x.id}
                        id={x.id}
                        productType={x.productType}
                        image={x.image}
                        description={x.description}
                        price={x.price}
                        creatorUsername={x.creatorUsername}
                    />
                ))}
            </article>
        </section>
    )
}
export default Products;
