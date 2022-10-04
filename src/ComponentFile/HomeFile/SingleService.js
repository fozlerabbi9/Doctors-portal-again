import React from 'react';
import Button from '../ButtonFile/Button';

const SingleService = ({ service, setServiceInfo }) => {
    const { serviceName, description, img } = service;
    return (
        <div class="service-card ">
            <div class="face front-face">
                <img src={img} alt="" />
                <div className="text">
                    <h2 className='text-accent font-semibold '>{serviceName}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div class="face back-face">
                <div class="black-bar mt-4"></div>
                <div class="authorize text-uppercase ps-3 pt-3">Authorized signature-not valid unless signed</div>
                <div className="absolute bottom-0 left-0">

                    <label
                        htmlFor="info-Modal"
                        className="btn modal-button"
                        onClick={() => setServiceInfo(service)}
                    >See More</label>

                </div>
            </div>
        </div >
    );
};

export default SingleService;