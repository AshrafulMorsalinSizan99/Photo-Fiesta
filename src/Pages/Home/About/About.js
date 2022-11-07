import React from 'react';
import photographer from '../../../Assets/photographer.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mb-2 mt-2">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-1/2'>
                    <img src={photographer} className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">We are qualified<br />
                        for expert photography
                    </h1>
                    <p className="py-6"></p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;