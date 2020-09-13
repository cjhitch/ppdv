import React from 'react';
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa';
import './MoreVideos.scss';

const MoreVideos = props => {
    return (
        <section className="MoreVideos">
            <h3>
                More Videos
            </h3>
            <p>
                Select a new video from the list
            </p>
            <FaChevronCircleLeft onClick={props.prevClickHandler}/>
            {props.children}
            <FaChevronCircleRight onClick={props.nextClickHandler}/>
        </section>
    )
}

export default MoreVideos;