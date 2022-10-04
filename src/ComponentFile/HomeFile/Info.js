import React from 'react';
import Cardinfo from './Cardinfo';
// import './Info.css';
// import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import clock from "../../assets/icons/clock.svg";

const Info = () => {
    return (
        // <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16 px-10 bg-primary'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 bg-neutral pt-24 md:pt-32 md:pb-10 lg:py-36 lg:px-10'>
            {/* <img src={clock} alt="" /> */}
            <Cardinfo
                cardTitle="Opening Hours"
                description="Lorem Ipsum is simply dummy text of the pri"
                icone={clock}
                hover="hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition duration-700"
            ></Cardinfo>
            <Cardinfo
                cardTitle="Visit our location"
                description="Brooklyn, NY 10036, United States"
                icone={marker}
                bgColor="bg-gradient-to-r from-cyan-500 to-blue-500"
            ></Cardinfo>
            <Cardinfo
                cardTitle="Contact us now"
                description="+000 123 456789"
                icone={phone}
                hover="hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition duration-1000"
            ></Cardinfo>
        </div>
    );
};

export default Info;