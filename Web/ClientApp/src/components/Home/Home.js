import React, { useState, useContext } from 'react';
import RandomElements from './RandomElements/RandomElements';
import HomeContext from '../Contexts/HomeContext';
import './Home.css';
import Slide from '../Slide/Slide';


const Home = (props) => {
    const [blogs, SetBlogs] = useState({
        name: 'blogs',
        detailsPath: 'blogDetails'
    });

    const [cars, SetCars] = useState({
        name: 'cars',
        detailsPath: 'carDetails'
    });

    const slideImages = [
        'https://www.openbusinesscouncil.org/wp-content/uploads/2020/09/Main-Picture.jpg',
        'https://miro.medium.com/max/683/1*B29dWBwY9nAZExVaYTMkUQ.png',
        'https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140604_960_720.jpg',
        'https://www.cloudways.com/blog/wp-content/uploads/Trending-products-to-sell-1.jpg'
    ]

    return (
        <>
            <div className="collection-wrapper">
                <HomeContext.Provider value={cars}>
                    <RandomElements />
                </HomeContext.Provider>
            </div>
            <Slide images={slideImages} height={700 }/>

        </>
    )
}


export default Home;
