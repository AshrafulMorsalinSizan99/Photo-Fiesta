import React from 'react';

const allServiceCard = ({ allService }) => {
    const { img, name, price } = allService;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl h-50">
            <figure><img src={img} alt="Album" className='w-full h-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default allServiceCard;