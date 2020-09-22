import React from 'react';
import { faCircle  } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft, faAngleRight  } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            <span className="fa-layers fa-fw" onClick={props.prevClickHandler}>
                <FontAwesomeIcon className="circle-bg" icon={faCircle} size="2x" />
                <FontAwesomeIcon icon={faAngleLeft} size="1x" />
            </span>
            {props.children}
            <span className="fa-layers fa-fw" onClick={props.nextClickHandler}>
                <FontAwesomeIcon className="circle-bg" icon={faCircle} size="2x" />
                <FontAwesomeIcon icon={faAngleRight} size="1x" />
            </span>
        </section>
    )
}

export default MoreVideos;