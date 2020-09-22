import React from 'react';
import './Vid.scss';

const Vid = props => {
    return (
        <article onClick={props.changeHandler} id={props.index} className="Vid">
            <h4>
                {props.title}
            </h4>
            <img src={props.src} alt={props.alt} />
            <a rel="noopener noreferrer" target="_blank" href={`https://www.youtube.com/watch?v=${props.link}&list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU`}>
                Watch on YouTube
            </a>
        </article>
    )
}

export default Vid;