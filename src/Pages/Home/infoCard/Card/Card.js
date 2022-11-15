import React from 'react';

const Card = ({ data }) => {
    const { name, icon, details, bgColor } = data;
    return (
        <div className={`card card-side shadow-xl ${bgColor} px-10 text-white `}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default Card;