import React from 'react';
import Button from '../ButtonFile/Button';
import { AiOutlineArrowRight } from "react-icons/ai";

const SingleService = ({ service, setServiceInfo }) => {
    const { serviceName, description, img } = service;
    return (
        <div className="service-card ">
            <div className="face front-face">
                <img src={img} alt="" />
                <div className="text">
                    <h2 className='text-accent font-semibold '>{serviceName}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="face back-face">
                <div className="black-bar mt-4"></div>
                <div className="authorize text-uppercase ps-3 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, repellendus.</div>
                <div className="absolute bottom-0 left-0">

                    <label
                        htmlFor="info-Modal"
                        className="btn modal-button text-accent"
                        onClick={() => setServiceInfo(service)}
                    >See More <AiOutlineArrowRight className='ml-2 text-xl text-accent'></AiOutlineArrowRight> </label>

                </div>
            </div>
        </div >
    );
};

export default SingleService;