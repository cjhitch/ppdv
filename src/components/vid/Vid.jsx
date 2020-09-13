import React from 'react';
import './Vid.scss';

const Vid = props => {
    return (
        <article onClick={props.changeHandler} id={props.index} className="Vid">
            <h4>
                {props.title}
            </h4>
            <img src={props.src} alt={props.alt} />
            <a href={props.link}>
                Learn More
            </a>
        </article>
    )
}

export default Vid;