import React, { useState, useEffect } from 'react';
import RandomElement from './RandomElement';



const RandomElements = (props) => {
    const [cars, SetCars] = useState([]);
    const [blogs, SetBlogs] = useState([]);

    useEffect(() => {
        if (props.children.toLowerCase() == 'Cars'.toLowerCase()) {
            fetch("https://localhost:44387/api/cars/randomcollection")
                .then(res => res.json())
                .then(data => {
                    data.forEach(car => {
                        SetCars(oldCars => [...oldCars, {
                            id: car.id,
                            manufacturer: car.manufacturer,
                            model: car.model,
                            image: car.image
                        }])
                    })
                })

        }
        if (props.children.toLowerCase() == 'Blogs'.toLowerCase()) {
            fetch("https://localhost:44387/api/blogs/randomCollection")
                .then(res => res.json())
                .then(data => {
                    data.forEach(blog => {
                        SetBlogs(oldBlogs => [...oldBlogs, {
                            id: blog.id,
                            theme: blog.theme,
                            title: blog.title,
                            image: blog.image
                        }])
                    })
                })
        }
    }, [])

    if (cars.length != 0) {
        return (
            <section className="random-elements-wrapper">
                {cars.map(x => (
                    <RandomElement key={x.id} id={x.id} manufacturer={x.manufacturer} model={x.model} image={x.image} />
                ))}
            </section>
        )
    }
    return (
        <section className="random-elements-wrapper">
                {blogs.map(x => (
                    <RandomElement key={x.id} id={x.id} theme={x.theme} title={x.title} image={x.image} />
                ))}
            </section>
        )


    }

export default RandomElements;