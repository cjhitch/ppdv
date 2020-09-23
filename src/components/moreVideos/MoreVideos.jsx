import React from 'react';
import { faCircle  } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft, faAngleRight, faCircle as faCircleLine  } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './MoreVideos.scss';

const MoreVideos = props => {
    const pages = [];

    for (let index = 0; index < props.pagi; index++) {
        pages.push(index);        
    }

    return (
        <section className="MoreVideos">
            <h3>
                More Videos
            </h3>
            <p>
            Check out the other videos here. Each video, if done in order, will take you from beginning step all the way to being able to write python on your own.
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
            <div>
                {pages.map( (el, index) => {
                    if (index === props.active) {
                        return <span key={index} onClick={() => props.pagiHandler(index+1)}><FontAwesomeIcon className="active" icon={faCircle}/></span>
                    } else {
                        return <span key={index} onClick={() => props.pagiHandler(index+1)}><FontAwesomeIcon icon={faCircleLine} /></span>
                    }
                })}
            </div>
        </section>
    )
}

export default MoreVideos;