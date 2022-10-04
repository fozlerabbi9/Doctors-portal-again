import React from 'react';
import Button from '../ButtonFile/Button';
import './Home.css';
import Info from './Info';
import Service from './Service';

const Home = () => {
    return (

        <div>
            <header className='header-style'>
                <div className="hero min-h-screen">
                    {/* <div className="hero min-h-screen bg-primary"> */}
                    <div className="hero-content sm:flex-col-reverse flex-col  md:flex-col lg:flex-row-reverse ">

                        {/* <img className=' md:w-2/3 lg:w-1/2' src="https://i.ibb.co/bQvShG5/chair.png" alt="" /> */}
                        <div class="md:w-2/3 lg:w-1/2 flex justify-center items-center">

                            <div class="p-1">
                                <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                                    <div href="#" class="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom" title="">
                                        <img src="https://i.ibb.co/bQvShG5/chair.png" alt="" />
                                    </div>
                                    <div class="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-700">
                                        <div href="#" class="hover:text-primary-600 text-lg transition duration-500 font-medium">Doctors Portal</div>
                                        <h6 class="text-slate-400">Welcome! (name)</h6>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='text-white text-left lg:text-left md:w-2/3 lg:w-3/5 lg:pr-5'>
                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            {/* <button className="btn btn-primary">Get Started</button> */}
                            <Button>Get Started</Button>
                        </div>
                    </div>
                </div>
            </header>

            <Info></Info>
            <Service></Service>

        </div>
    );

};

export default Home;