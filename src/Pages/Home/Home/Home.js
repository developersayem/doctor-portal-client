import React from 'react';
import Appointment from '../Appointment/Appointment';
import Hero from '../Hero/Hero';
import IconCard from '../infoCard/Infocard'
import Services from '../Services/Services';
import Treatment from '../Treatment/Features';

const Home = () => {
    return (
        <div className='mx-10'>
            <Hero></Hero>
            <IconCard></IconCard>
            <Services></Services>
            <Treatment></Treatment>
            <Appointment></Appointment>
        </div >
    );
};

export default Home;