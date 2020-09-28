import React from 'react';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import Footer from '../footer/Footer';
import Lines from '../lines/Lines'

const PageTemplate = props => {
    return (
        <>
            <Lines />
            <Header />
            <Hero />
            {props.children}
            <Footer />
        </>
    )
}

export default PageTemplate;