// import React from 'react';
// import './testimonial.css';

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";


// // import required modules
// import { Pagination } from "swiper";


// const Testimonial = () => {

//     return (
//         <div className='bg-neutral'>
//             <div className="text-left text-white p-10">
//                 <h2>Testimonial </h2>
//                 <p>what your patients say</p>
//             </div>

//             <div className="mx-28 pb-10">
//                 <Swiper
//                     spaceBetween={30}
//                     pagination={{
//                         clickable: true,
//                     }}
//                     modules={[Pagination]}
//                     className="mySwiper"
//                 >
//                     <SwiperSlide className='p-20 bg-green-400 rounded-lg'>Slide 1</SwiperSlide>
//                     <SwiperSlide className='p-20 bg-green-400 rounded-lg'>Slide 2</SwiperSlide>
//                     <SwiperSlide className='p-20 bg-green-400 rounded-lg'>Slide 3</SwiperSlide>
//                     <SwiperSlide className='p-20 bg-green-400 rounded-lg'>Slide 4</SwiperSlide>
//                     <SwiperSlide className='p-20 bg-green-400 rounded-lg'>Slide 5</SwiperSlide>
//                     <SwiperSlide className='p-20 bg-green-400 rounded-lg'>Slide 6</SwiperSlide>
//                     <SwiperSlide className='p-20 bg-green-400 rounded-lg'>Slide 7</SwiperSlide>
//                     <SwiperSlide className='p-20 bg-green-400 rounded-lg'>Slide 8</SwiperSlide>
//                     <SwiperSlide className='p-20 bg-green-400 rounded-lg'>Slide 9</SwiperSlide>
//                 </Swiper>
//             </div>



//         </div>
//     );
// };

// export default Testimonial;





import React from 'react';
import './testimonial.css';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
import Testimonialcard from './Testimonialcard';

const Testimonial = () => {

    const testiCard = [
        {
            _id: 1,
            name: "John Doe",
            logo: "https://pngset.com/images/icon-quotation-marks-quotes-icon-with-and-vector-format-gray-world-of-warcraft-transparent-png-1911508.png",
            // logo: "https://i.imgur.com/lU2pDQv.png",
            // img: "https://i.imgur.com/4DEiXLa.jpg",
            img: "https://i.ibb.co/nnGNn42/babySit.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        },
        {
            _id: 2,
            name: "John Doe",
            logo: "https://pngset.com/images/icon-quotation-marks-quotes-icon-with-and-vector-format-gray-world-of-warcraft-transparent-png-1911508.png",
            // logo: "https://i.imgur.com/lU2pDQv.png",
            // img: "https://i.imgur.com/nbO4gwx.jpg",
            img: "https://i.ibb.co/nnGNn42/babySit.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        },
        {
            _id: 3,
            name: "John Doe",
            logo: "https://pngset.com/images/icon-quotation-marks-quotes-icon-with-and-vector-format-gray-world-of-warcraft-transparent-png-1911508.png",
            // logo: "https://i.imgur.com/lU2pDQv.png",
            // img: "https://i.imgur.com/xbWPOrc.jpg",
            img: "https://i.ibb.co/nnGNn42/babySit.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        },
        {
            _id: 4,
            name: "John Doe",
            logo: "https://pngset.com/images/icon-quotation-marks-quotes-icon-with-and-vector-format-gray-world-of-warcraft-transparent-png-1911508.png",
            // logo: "https://i.imgur.com/lU2pDQv.png",
            // img: "https://i.imgur.com/4DEiXLa.jpg",
            img: "https://i.ibb.co/nnGNn42/babySit.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        },
        {
            _id: 5,
            name: "John Doe",
            logo: "https://pngset.com/images/icon-quotation-marks-quotes-icon-with-and-vector-format-gray-world-of-warcraft-transparent-png-1911508.png",
            // logo: "https://i.imgur.com/lU2pDQv.png",
            // img: "https://i.imgur.com/4DEiXLa.jpg",
            img: "https://i.ibb.co/nnGNn42/babySit.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        },
        {
            _id: 6,
            name: "John Doe",
            logo: "https://pngset.com/images/icon-quotation-marks-quotes-icon-with-and-vector-format-gray-world-of-warcraft-transparent-png-1911508.png",
            // logo: "https://i.imgur.com/lU2pDQv.png",
            // img: "https://i.imgur.com/4DEiXLa.jpg",
            img: "https://i.ibb.co/nnGNn42/babySit.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        },
        {
            _id: 7,
            name: "John Doe",
            logo: "https://pngset.com/images/icon-quotation-marks-quotes-icon-with-and-vector-format-gray-world-of-warcraft-transparent-png-1911508.png",
            // logo: "https://i.imgur.com/lU2pDQv.png",
            // img: "https://i.imgur.com/4DEiXLa.jpg",
            img: "https://i.ibb.co/nnGNn42/babySit.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        },
        {
            _id: 8,
            name: "John Doe",
            logo: "https://pngset.com/images/icon-quotation-marks-quotes-icon-with-and-vector-format-gray-world-of-warcraft-transparent-png-1911508.png",
            // logo: "https://i.imgur.com/lU2pDQv.png",
            // img: "https://i.imgur.com/4DEiXLa.jpg",
            img: "https://i.ibb.co/nnGNn42/babySit.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        },
        {
            _id: 9,
            name: "John Doe",
            logo: "https://pngset.com/images/icon-quotation-marks-quotes-icon-with-and-vector-format-gray-world-of-warcraft-transparent-png-1911508.png",
            // logo: "https://i.imgur.com/lU2pDQv.png",
            // img: "https://i.imgur.com/4DEiXLa.jpg",
            img: "https://i.ibb.co/nnGNn42/babySit.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        },
        {
            _id: 10,
            name: "John Doe",
            logo: "https://pngset.com/images/icon-quotation-marks-quotes-icon-with-and-vector-format-gray-world-of-warcraft-transparent-png-1911508.png",
            // logo: "https://i.imgur.com/lU2pDQv.png",
            // img: "https://i.imgur.com/4DEiXLa.jpg",
            img: "https://i.ibb.co/nnGNn42/babySit.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        }
    ]

    return (
        <div className='bg-neutral '>
            <div className="text-left text-white p-10">
                <h2 className='text-accent text-2xl'>Testimonial </h2>
                <p className=' text-3xl '>what your patients say</p>
            </div>

            <div className="w-5/6 mx-auto pb-10">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper my-10"
                >
                    {
                        testiCard.map(value => <SwiperSlide key={value._id} className=' p-5 pb-10 rounded-lg'>
                            <Testimonialcard
                                value={value}
                            ></Testimonialcard>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>



        </div>
    );
};

export default Testimonial;