import React, { useState } from 'react';
import './Service.css';
import SingleService from './SingleService';
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Button from '../ButtonFile/Button';
import InfoModal from './InfoModal';

const Service = () => {
    const [serviceInfo, setServiceInfo] = useState(null);

    const serviceData = [
        {
            _id: 1,
            serviceName: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluoride,
        },
        {
            _id: 2,
            serviceName: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity,
        },
        {
            _id: 3,
            serviceName: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whitening,
        }
    ];
    return (
        <div className='main-div text-white py-8'>
            <h2 className='mt-14 text-accent'>OUR SERVICES</h2>
            <h1 className='text-4xl'>Services We Provide</h1>


            <div className="grid grid-cols-3 gap-6 px-10 py-28">
                {
                    serviceData.map(service => <SingleService
                        key={service._id}
                        service={service}
                        setServiceInfo={setServiceInfo}
                    ></SingleService>)
                }
            </div>
            {
                serviceInfo && <InfoModal
                    serviceInfo={serviceInfo}
                ></InfoModal>
            }

        </div>
    );
};

export default Service;