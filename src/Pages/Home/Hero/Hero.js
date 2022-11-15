import React from 'react';
import heroImg from "../../../assets/images/chair.png"
import heroBg from "../../../assets/images/bg.png"

const Hero = () => {

    return (
        <div className='my-16'>
            <div className="hero" style={{
                backgroundImage: `url(${heroBg})`
            }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={heroImg} className="lg:w-1/2 rounded-lg shadow-2xl" alt='hero' />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">It is really very important to choose the right dentist for you and your family. Doctors Portal offers a team of  best dentist.</p>
                        <button className="border-none px-5 py-2 rounded-md text-white uppercase bg-gradient-to-r from-accent to-info hover:scale-110">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;