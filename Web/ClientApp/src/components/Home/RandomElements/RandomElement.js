import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RandomElement = (props) => {
    const [car, SetCar] = useState({});
    const [blog, SetBlog] = useState({});

    useEffect(() => {
        if (props.manufacturer && props.model) {
            SetCar({
                id: props.id,
                manufacturer: props.manufacturer,
                model: props.model,
                image: props.image
            });
        }
        if (props.theme && props.title) {
            SetBlog({
                id: props.id,
                theme: props.theme,
                title: props.title,
                image: props.image
            })
        }

    }, [])

    if (car.manufacturer != '' && car.manufacturer != null) {
        return (
            <div className="randomelement">
                <h3>{car.manufacturer}</h3>
                <p>{car.model}</p>
                <Link to={`/carDetails/${car.id}`}><img src={car.image} /></Link>
            </div>
        )
    }
    return (
        <div className="randomelement">
            <h3>{blog.theme}</h3>
            <p>{blog.title}</p>
            <Link to={`/blogDetails/${blog.id}`}><img src={blog.image} /></Link>
        </div>
    )
}

export default RandomElement;