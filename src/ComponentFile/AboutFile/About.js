import React from 'react';

const About = () => {
    return (
        <div>
            <h2>this is about us page</h2>
            <div className="h-1/2 w-1/3 bg-gray-100">
                <div className="max-w-md px-8 pt-5 mx-auto space-y-2">

                    <details className="p-4 rounded-lg open:bg-white open:shadow-xl">
                        <summary className="font-semibold">How does it work ?</summary>
                        <div className="mt-3">
                            <p className="text-sm leading-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Aspernatur fugit libero sunt quasi error, sequi tempore quo impedit porro saepe nesciunt. Ratione
                                provident, assumenda modi delectus accusantium officiis vero eum!</p>
                        </div>
                    </details>

                    <details className="p-4 rounded-lg open:bg-white open:shadow-xl">
                        <summary className="font-semibold">How to use tailwind css 3 in react</summary>
                        <div className="mt-3">
                            <p className="text-sm leading-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Aspernatur fugit libero sunt quasi error, sequi tempore quo impedit porro saepe nesciunt. Ratione
                                provident, assumenda modi delectus accusantium officiis vero eum!</p>
                        </div>
                    </details>
                    <details className="p-4 rounded-lg open:bg-white open:shadow-xl">
                        <summary className="font-semibold">How to install Tailwind CSS 3 ?</summary>
                        <div className="mt-3">
                            <p className="text-sm leading-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Aspernatur fugit libero sunt quasi error, sequi tempore quo impedit porro saepe nesciunt. Ratione
                                provident, assumenda modi delectus accusantium officiis vero eum!</p>
                        </div>
                    </details>
                    <details className="p-4 rounded-lg open:bg-white open:shadow-xl">
                        <summary className="font-semibold">How to send feedback ?</summary>
                        <div className="mt-3">
                            <p className="text-sm leading-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Aspernatur fugit libero sunt quasi error, sequi tempore quo impedit porro saepe nesciunt. Ratione
                                provident, assumenda modi delectus accusantium officiis vero eum!</p>
                        </div>
                    </details>
                </div>
            </div>

            <div className="relative w-full lg:max-w-sm">
                <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                    <option>ReactJS Dropdown</option>
                    <option>Laravel 9 with React</option>
                    <option>React with Tailwind CSS</option>
                    <option>React With Headless UI</option>
                </select>
            </div>

            


        </div>
    );
};

export default About;