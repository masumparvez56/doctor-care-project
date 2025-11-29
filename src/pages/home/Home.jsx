import React from 'react';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import Stats from '../../components/stats/Stats';
import Services from '../../components/services/Services';
import About from '../../components/about/About';


const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Stats />
            <Services />
            <About/>
        </div>
    );
};

export default Home;