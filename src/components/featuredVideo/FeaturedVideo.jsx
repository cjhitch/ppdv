import React from 'react';
import './FeaturedVideo.scss';
import { faAngleDown  } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeaturedVideo = props => {
    return (
        <section className="FeaturedVideo">
            <span className="select">
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
                <FontAwesomeIcon className="select-dropdown-icon" icon={faAngleDown} />
            </span>
            <h2>
                {props.title}
            </h2>
            <p>
                {props.desc}
            </p>
            <span className="video">
                <iframe title="Learning Python" className="" src={`https://www.youtube-nocookie.com/embed/${props.video}?rel=0`} frameBorder="0" allowFullScreen></iframe>
            </span>
        </section>
    )
}

export default FeaturedVideo;