import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RandomElementContent from './RandomElementContent';

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

    if (car.manufacturer != '' && car.manufacturer != null &&
        car.model != '' && car.model != null &&
        car.image != '' && car.image != null) {
        return (
            <RandomElementContent>
                {car.manufacturer}
                {car.model}
                {car.id}
                {car.image}
                carDetails
            </RandomElementContent>
        )
    }
    return (
        <RandomElementContent>
            {blog.theme}
            {blog.title}
            {blog.id}
            {blog.image}
            blogDetails
        </RandomElementContent>
    )
}

export default RandomElement;