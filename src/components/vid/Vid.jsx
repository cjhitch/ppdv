import React from 'react';
import './Vid.scss';

const Vid = props => {
    return (
        <article onClick={() => props.changeHandler(props.index)} id={props.index} className="Vid">
            <h4>
                {props.title}
            </h4>
            <img src={props.src} alt={props.alt} />
            <p>
                {props.desc}
            </p>
            <a href={props.link}>
                Learn More
            </a>
        </article>
    )
}

export default Vid;