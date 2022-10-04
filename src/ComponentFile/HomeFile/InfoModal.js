import React from 'react';
import { AiFillCheckCircle } from "react-icons/ai";

const InfoModal = ({ serviceInfo }) => {
    const { serviceName, description, img } = serviceInfo;
    return (
        <div>

            <input type="checkbox" id="info-Modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-gray-600 px-10 ">
                    <h3 className="font-bold  text-accent text-2xl">{serviceName}</h3>
                    <img src={img} alt="" />
                    <p className="py-4 text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla assumenda fuga magnam nostrum dolorem similique! Libero assumenda consequatur minima modi sapiente eum velit incidunt maiores ducimus sequi unde, optio odit, voluptatem mollitia molestiae veritatis quod magnam obcaecati beatae aut ut vel cum commodi? Ipsum provident asperiores nulla. Obcaecati, sapiente iure.</p>
                    <div className="modal-action">
                        <label htmlFor="info-Modal" className="btn">
                            <AiFillCheckCircle></AiFillCheckCircle>
                        </label>
                    </div>
                </div>
            </div>

        </div>
        // <div>
        //     <input type="checkbox" id="info-Modal" className="modal-toggle" />
        //     <div className="modal modal-bottom sm:modal-middle">
        //         <div className="modal-box bg-slate-400">
        //             <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
        //             <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        //             <div className="modal-action">
        //                 <label htmlFor="info-Modal" className="btn">Yay!</label>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default InfoModal;