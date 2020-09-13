import React from 'react';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import Footer from '../footer/Footer';

const PageTemplate = props => {
    return (
        <>
            <Header />
            <Hero />
            {props.children}
            <Footer />
        </>
    )
}

export default PageTemplate;