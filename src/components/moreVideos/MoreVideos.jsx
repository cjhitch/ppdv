import React from 'react';
import Vid from '../vid/Vid';
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
            {props.children}
        </section>
    )
}

export default MoreVideos;