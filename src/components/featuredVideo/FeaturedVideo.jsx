import React from 'react';
import { faAngleDown  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './FeaturedVideo.scss';

const FeaturedVideo = props => {
    return (
        <section className="FeaturedVideo">
            <span className="select z-line">
                <select
                value={props.value}
                onChange={(e) => props.changeHandler(e)}
                name=""
                id=""
                >
                    {props.titles.map((el, index) => (
                        <option key={index}>{el}</option>
                    ))}
                </select>
                <FontAwesomeIcon className="select-dropdown-icon z-line" icon={faAngleDown} />
            </span>
            <h2 className="z-line">
                {props.title}
            </h2>
            <p className="z-line">
                {props.desc}
            </p>
            <span className="video z-line">
                <iframe title="Learning Python" className="" src={`https://www.youtube-nocookie.com/embed/${props.video}?rel=0`} frameBorder="0" allowFullScreen></iframe>
            </span>
        </section>
    )
}

export default FeaturedVideo;