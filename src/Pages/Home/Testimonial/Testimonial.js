import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import TestimonialCard from './TestimonialCart/TestimonialCard';

const Testimonial = () => {
    const testimonialData = [
        {
            id: 1,
            name: "Winson Herry",
            details: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            icon: people1,
            address: "California"
        },
        {
            id: 2,
            name: "Olivia Ava",
            details: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            icon: people2,
            address: "Las Vegas"
        },
        {
            id: 3,
            name: "Sophia Mia",
            details: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            icon: people3,
            address: "Louisiana"
        },
    ]

    return (
        <div>
            <div>
                <div className=''>
                    <h4 className='text-emerald-400 font-bold'>Testimonial</h4>
                    <h1 className='text-3xl	'>What Our Patients Says</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2	 lg:grid-cols-3 gap-6 my-28	'>
                    {
                        testimonialData.map(data => <TestimonialCard key={data.id} data={data}></TestimonialCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;