import React from 'react';
import Card from './Card/Card';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'


const Infocard = () => {
    const infoCardDatas = [
        {
            id: 1,
            name: "Opening Hours",
            details: "Our Opening Hours is 9 AM to 9 PM",
            bgColor: "bg-gradient-to-r from-accent to-info",
            icon: clock
        },
        {
            id: 2,
            name: "Visit Our Location",
            details: "Visit our location to see how we teate people",
            bgColor: "bg-neutral",
            icon: marker

        },
        {
            id: 3,
            name: "Contact Us",
            details: "+8801xxxxxxxxx",
            bgColor: "bg-gradient-to-r from-accent to-info",
            icon: phone
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2	 lg:grid-cols-3 gap-6 my-28	'>
            {
                infoCardDatas.map(data => <Card key={data.id} data={data}></Card>)
            }
        </div>
    );
};

export default Infocard;