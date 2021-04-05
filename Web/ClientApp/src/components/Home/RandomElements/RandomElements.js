import React, { useState, useEffect } from 'react';
import RandomElement from './RandomElement';

const RandomElements = (props) => {

    const [randomCollection, SetRandomCollection] = useState([]);

    useEffect(() => {
        fetch(`https://localhost:44387/api/${props.children}/randomcollection`)
            .then(res => res.json())
            .then(data => SetRandomCollection(data))
    }, [])

    return (
        <section className="random-elements-wrapper">
            <RandomElement collection={randomCollection} routing={ props.children} />
        </section>
    )
}

export default RandomElements;