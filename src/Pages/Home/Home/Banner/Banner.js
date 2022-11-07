import React from 'react';
import banner from '../../../../Assets/banner3.jpeg';

const Banner = () => {
    return (
        <div className=" carousel rounded-box">
            <div className="carousel-item relative w-full">
                <img src={banner} className="w-full" alt="Tailwind CSS Carousel component" />
                <div className='absolute flex justify-end transform -translate-y-1/2  right-20 top-1/2'>
                    <h1 className='text-7xl'>Photo<br /> Exhibition<br />
                        For You
                    </h1>

                </div>
                <div className='absolute flex justify-end transform -translate-y-1/2  left-20 right-20 top-3/4'>
                    <button className="btn btn-warning mr-5">Visit Us</button>
                    <button className="btn btn-outline btn-warning">Join</button>

                </div>
            </div>

        </div>
    );
};

export default Banner;