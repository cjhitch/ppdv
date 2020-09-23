import React from 'react';
import './Hero.scss';

const Hero = () => {
    return (
        <section className="Hero">
            <h1>
                Learn To Code!
            </h1>
            <p>
                Have you ever wanted to learn React?
                Check out the free tutorials written by me
                If you have questions please let me know
            </p>
            <button className="large">
                Contact Me
            </button>
            <div className="overlay"></div>
        </section>
    )
}

export default Hero;