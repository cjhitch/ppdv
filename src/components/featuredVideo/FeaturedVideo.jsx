import React from 'react';
import './FeaturedVideo.scss';

const FeaturedVideo = props => {
    return (
        <section className="FeaturedVideo">
            <div>
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
                <h2>
                    {props.title}
                </h2>
                <p>
                    {props.desc}
                </p>
            </div>
            <span>
                <iframe title="Learning Python" className="" src={`https://www.youtube-nocookie.com/embed/${props.video}?rel=0`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen></iframe>
            </span>
        </section>
    )
}

export default FeaturedVideo;