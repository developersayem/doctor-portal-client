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
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="border-none px-5 py-2 rounded-md text-white uppercase bg-gradient-to-r from-accent to-info">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;