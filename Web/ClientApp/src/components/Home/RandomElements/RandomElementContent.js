import React from 'react';
import { Link } from 'react-router-dom';

const RandomElementContent = (props) => {


    return (
        <div className="randomelement">
            <h3>{props.children[0]}</h3>
            <p>{props.children[1]}</p>
            <Link to={`/${props.children[4]}/${props.children[2]}`}><img src={props.children[3]} /></Link>
        </div>
        )
}

export default RandomElementContent;