import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'

const Appointment = () => {
    return (
        <div className='my-16 mt-48  '>
            <div className="hero h-1/2 rounded-xl" style={{
                backgroundImage: `url(${appointment})`
            }}>
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={doctor} className="lg:w-1/2 -mt-32 rounded-lg " alt='hero' />
                    <div className='lg:w-1/2 text-white'>
                        <h4 className='text-emerald-400 font-bold my-3'>Appointment</h4>
                        <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <button className="border-none px-5 py-2 rounded-md text-white uppercase bg-gradient-to-r from-accent to-info hover:scale-110">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;