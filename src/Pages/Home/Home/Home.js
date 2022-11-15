import React from 'react';
import Appointment from '../Appointment/Appointment';
import Hero from '../Hero/Hero';
import IconCard from '../infoCard/Infocard'
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Treatment from '../Treatment/Features';

const Home = () => {
    return (
        <div className='mx-10'>
            <Hero></Hero>
            <IconCard></IconCard>
            <Services></Services>
            <Treatment></Treatment>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
        </div >
    );
};

export default Home;