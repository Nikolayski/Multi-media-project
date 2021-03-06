import React from 'react';
import './About.css'
import HomeContext from '../Contexts/HomeContext';
import RandomElements from '../Home/RandomElements/RandomElements';


const About = () => {


    return (
        <>
            <div className="collection-wrapper">
                <HomeContext.Provider value={{ name: 'products', detailsPath: 'productDetails' }}>
                    <RandomElements />
                </HomeContext.Provider>
            </div>
            <section className="about-wrapper">
                <h1 className="about-wrapper-title">Share your adventures, sell products and find new friends!</h1>
                <div className="about-product">
                    <img src="https://cloudcart.com/blog/wp-content/uploads/2017/03/product-ideas-min.jpg" alt={'product'} />
                    <div>
                        <p>1.Get Product</p>
                        <p>2.Register</p>
                        <p>3.Sell your product!</p>
                    </div>
                </div>
                <div className="about-blog">
                    <div>
                        <p>Share your adventure with community</p>
                    </div>
                    <img src="https://learnjazzyenglish.com/wp-content/uploads/2020/04/20161021_001944-768x576.jpg" alt={'share'} />
                </div>
                <div className="about-selling">
                    <img src="https://nextsuperb.com/wp-content/uploads/2021/02/Blog-Image.jpg" alt={'selling'} />
                    <div>
                        <p>It's easy</p>
                        <p>It's fast</p>
                        <p>It's secure</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
