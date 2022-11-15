import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    const servicesDatas = [
        {
            id: 1,
            name: "Fluoride Treatment",
            details: "Fluoride is a naturally occurring mineral that helps build strong teeth and prevent cavities.",
            icon: fluoride,
        },
        {
            id: 2,
            name: "Cavity Filling",
            details: " Basically, a cavity is hole in the tooth . This is often often caused by bacteria, which builds up from eating unhealthy food and not caring for your teeth properly.",
            icon: cavity,
        },
        {
            id: 3,
            name: "Teeth Whitening",
            details: `We all want a white brighter smile.But this begs the question "where we do"`,
            icon: whitening,
        },
    ]
    return (
        <div>
            <div className='text-center'>
                <h4 className='text-emerald-400 font-bold'>Our Services</h4>
                <h1 className='text-3xl	'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2	 lg:grid-cols-3 gap-6 my-28	'>
                {
                    servicesDatas.map(data => <ServiceCard key={data.id} data={data}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;