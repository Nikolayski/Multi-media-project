﻿import React, { useState, useEffect } from 'react';
import HomeContext from '../Contexts/HomeContext';
import RandomElements from '../Home/RandomElements/RandomElements';
import Slide from '../Slide/Slide';
import './Contact.css';



const Contact = (props) => {
    const [desc, SetDesc] = useState('');
    const [message, SetMessage] = useState('');

    const slideImages = [
        'https://hedreezblog.com/wp-content/uploads/2020/04/Contact.png',
        'https://cdn11.bigcommerce.com/s-t2pg2ul4dc/product_images/uploaded_images/contact-us-via-phone-email.jpg',
        'https://www.cloudways.com/blog/wp-content/uploads/Trending-products-to-sell-1.jpg'
    ]

    const formSubmit = (event) => {
        event.preventDefault();

        fetch("https://localhost:44387/api/contact/post/", {
            method: 'POST',
            body: JSON.stringify({
                firstName: event.target.firstName.value,
                lastName: event.target.lastName.value,
                email: event.target.email.value,
                country: event.target.country.value,
                description: desc
            }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.text())
            .then(data => {
                SetMessage('Done!')
            })
            .catch(err => console.log(err.message))


    }

    const descriptionChange = (event) => {
        SetDesc(event.target.value)
    }

    return (
        <>
            <div className="collection-wrapper">

                <HomeContext.Provider value={{ name: 'blogs', detailsPath: 'blogDetails' }}>
                    <RandomElements />
                </HomeContext.Provider>
            </div>

            <Slide images={slideImages} height={500} />

            <section className="contact-wrapper">
                <div className="contact-image">
                    <img src="https://fixmyridedubai.com/wp-content/uploads/2020/12/FixMyRide-Dubai-contact-us.jpg" />
                    <img src="https://www.cubecraft.net/attachments/website_banner_ihaveaquestion-jpg.49912/" />

                </div>
                <form onSubmit={formSubmit}>
                    <article className="contact-inputs-wrapper">
                        <div className="contact-field">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" />
                        </div>
                        <div className="contact-field">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" />
                        </div>
                        <div className="contact-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className="contact-field">
                            <label htmlFor="country">Country</label>
                            <input type="text" id="country" name="country" />
                        </div>
                        <div className="contact-field field-textarea">
                            <label htmlFor="description">Description</label>
                            <textarea onChange={descriptionChange} cols="35" rows="9" id="description" name="description"></textarea>
                        </div>
                        <div className="contact-field field-button">
                            <input type="submit" value="Send" />
                        </div>
                        <p>{message}</p>
                    </article>
                </form>
            </section>
        </>
    )
}

export default Contact;