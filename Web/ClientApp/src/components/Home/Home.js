import React, { useState, useEffect, useContext } from 'react';
import RandomElements from './RandomElements/RandomElements';
import HomeContext from '../Contexts/HomeContext';
import './Home.css';
import authService from '../api-authorization/AuthorizeService';


const Home = (props) => {
    const [blogs, SetBlogs] = useState({
        name: 'blogs',
        detailsPath: 'blogDetails'
    });
    const [cars, SetCars] = useState({
        name: 'cars',
        detailsPath: 'carDetails'
    });


    return (
        <>
            <div className="home-wrapper">
                <HomeContext.Provider value={cars}>
                    <RandomElements />
                </HomeContext.Provider>
                <HomeContext.Provider value={blogs}>
                    <RandomElements />
                </HomeContext.Provider>
            </div>
        </>
    )
}


export default Home;
