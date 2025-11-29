import React from 'react';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import Stats from '../../components/stats/Stats';
import Services from '../../components/services/Services';
import About from '../../components/about/About';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Stats />
            <Services />
            <About/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;