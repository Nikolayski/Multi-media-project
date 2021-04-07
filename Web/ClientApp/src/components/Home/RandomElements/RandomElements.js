import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import HomeContext from '../../Contexts/HomeContext';
import './RandomElements.css'

const RandomElements = (props) => {

    const [randomCollection, SetRandomCollection] = useState([]);
    const homeContext = useContext(HomeContext);

    useEffect(() => {
        fetch(`https://localhost:44387/api/${homeContext.name}/randomCollection`)
            .then(res => res.json())
            .then(data => SetRandomCollection(data))
    }, [])

    return (
        <section className="random-elements-wrapper">
            {randomCollection.map(x => (
                <div key={x.id} className="randomelement">
                    {x.manufacturer ? <h3>{x.manufacturer}</h3> : <h3>{x.theme}</h3>}
                    {x.model ? <p>{x.model}</p> : <p>{x.title}</p>}
                    <Link to={`/${homeContext.detailsPath}/${x.id}`}><img src={x.image} /></Link>
                </div>
            ))}
        </section>
    )
}

export default RandomElements;