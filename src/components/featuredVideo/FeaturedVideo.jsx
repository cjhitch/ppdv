import React from 'react';
import './FeaturedVideo.scss';

const FeaturedVideo = props => {
    return (
        <section>
			`<iframe title="Learning Python" className="" width="1050px" height="600px" src={`https://www.youtube-nocookie.com/embed/${props.video}?rel=0`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen></iframe>`
        </section>
    )
}

export default FeaturedVideo;