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
            .catch(err => console.log(err.message))
    }, [])


    if (homeContext.name == "cars") {
        return (
            <section className="random-elements-wrapper">
                {randomCollection.map(x => (

                    <div key={x.id} className="randomelement">
                        <h3>{x.manufacturer}</h3>
                        <p>{x.model}</p>
                        <Link to={`/${homeContext.detailsPath}/${x.id}`}><img src={x.image} /></Link>
                    </div>
                ))}
            </section>
        )
    }
    else if (homeContext.naem == "blogs") {
        return (
            <section className="random-elements-wrapper">
                {randomCollection.map(x => (

                    <div key={x.id} className="randomelement">
                        <h3>{x.theme}</h3>
                        <p>{x.title}</p>
                        <Link to={`/${homeContext.detailsPath}/${x.id}`}><img src={x.image} /></Link>
                    </div>
                ))}
            </section>
        )
    }
    return (
        <section className="random-elements-wrapper">
            {randomCollection.map(x => (

                <div key={x.id} className="randomelement">
                   <h3>{x.productType}</h3>
                   <p>{x.title}</p>
                    <Link to={`/${homeContext.detailsPath}/${x.id}`}><img src={x.image} /></Link>
                </div>
            ))}
        </section>
    )
}

export default RandomElements;

