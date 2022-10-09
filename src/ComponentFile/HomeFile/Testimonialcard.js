import React from 'react';
import "./TestimonialCard.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination } from "swiper";



const Testimonialcard = ({ value }) => {
    return (
        <div>
            <div className="testimonial-style flex justify-center items-center ">
                <div className="testimonial bg-accent p-2  rounded">
                    <img className='logo-style mx-auto' src={value.logo} alt=''  />
                    <p>{value.description}</p>
                    <img  className=" mx-auto rounded-full w-1/4" src={value.img} alt='' />
                    <h5>name : {value.name}</h5>
                </div>
            </div>
        </div>
    );
};

export default Testimonialcard;