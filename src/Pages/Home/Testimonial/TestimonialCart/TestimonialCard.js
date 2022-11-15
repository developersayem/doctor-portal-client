import React from 'react';

const TestimonialCard = ({ data }) => {
    const { name, icon, details, address } = data;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <p>{details}</p>
            </figure>
            <div className=" flex ml-4">
                <div className='m-5'>
                    <img src={icon} alt="Shoes" style={{ width: "3rem" }} className="rounded-xl" />
                </div>
                <div className='mt-5'>
                    <h2 className="card-title">{name}</h2>
                    <p>{address}</p>
                </div>

            </div>
        </div>
    );
};

export default TestimonialCard;