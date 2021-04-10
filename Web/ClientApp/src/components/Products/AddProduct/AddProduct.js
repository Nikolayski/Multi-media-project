import React, { useEffect } from 'react';
import authService from '../../api-authorization/AuthorizeService';
import * as services from '../../../Services/ComponentServices';
import ProductsType from '../ProductsType/ProductsType';
import './AddProduct.css';

const AddProduct = (props) => {

    useEffect(() => {
        authService.getUser()
            .then(res => {
                if (!res) {
                    props.history.push('/authentication/login');
                }
            })
    })

    const productSubmit = (event) => {
        event.preventDefault();
        const [productType, image, description, price] = event.target;
        if (productType != 'all') {

            authService.getUser().then(res => {


                const product = {
                    productType: productType.value,
                    image: image.value,
                    description: description.value,
                    price: price.value,
                    userId: res.sub
                }
                services.create(product, 'products')
                    .then(data => props.history.push('/products'))
                    .catch(err => console.log(err.message))
            })
                .catch(error => console.log(error.message))
        }


    }

    return (
        <div className="addProduct-form-wrapper">
            <form onSubmit={productSubmit}>
                <div>
                    <ProductsType />
                </div>
                <div>
                    <input type="text" placeholder="Image" name="image" placeholder="Image" />
                </div>
                <div>
                    <textarea rows='15' cols='50' placeholder="Description" name="description"></textarea>
                </div>
                <div>
                    <input type="number" placeholder="Price" name="price" />
                </div>
                <div>
                    <input className="addproduct-form-button" type="submit" value="Add" />
                </div>
            </form>
        </div>
    )
}

export default AddProduct;