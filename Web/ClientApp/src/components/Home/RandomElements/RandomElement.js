import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RandomElement = (props) => {
    const detailsRoute = props.routing.slice(0, props.routing.length - 1) + 'Details';
    return (
        <>
            {props.collection.map(x => (
                <div key={x.id} className="randomelement">
                    {x.manufacturer ? <h3>{x.manufacturer}</h3> : <h3>{x.theme}</h3>}
                    {x.model ? <p>{x.model}</p> : <p>{x.title}</p>}
                    <Link to={`/${detailsRoute}/${x.id}`}><img src={x.image} /></Link>
                </div>
            ))}
        </>
    )
}

export default RandomElement;