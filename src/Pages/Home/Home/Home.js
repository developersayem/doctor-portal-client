import React from 'react';
import Hero from '../Hero/Hero';
import IconCard from '../infoCard/Infocard'
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Hero></Hero>
            <IconCard></IconCard>
            <Services></Services>
        </div>
    );
};

export default Home;