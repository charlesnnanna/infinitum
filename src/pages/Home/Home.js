import React from 'react';
import Header from '../../components/Header';
import About from './components/About';
import Download from './components/Download';
import Features from './components/Features';
import Hero from './components/Hero';
import "../../styles/home.css"

function Home(props) {
    return (
        <div id = "home">
            <Hero/>
            <About/>
            <Features/>
            <Download/>
        </div>
    );
}

export default Home;