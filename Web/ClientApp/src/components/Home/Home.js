import React, { useState, useEffect } from 'react';
import RandomElements from './RandomElements/RandomElements';

const Home = (props) => {
    const [ blogs, SetBlogs ] = useState('Blogs');
    const [ cars, SetCars ] = useState('Cars');


    return (
        <div className="home-wrapper">
            <RandomElements>{ blogs}</RandomElements>
            <RandomElements>{ cars }</RandomElements>
        </div>
    )
}

export default Home;
