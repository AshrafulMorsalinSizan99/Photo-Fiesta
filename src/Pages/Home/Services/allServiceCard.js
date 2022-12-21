import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/index.css";
import './allServices.css';

const allServiceCard = ({ allService }) => {
    const { _id, img, name, price, description } = allService;
    return (
        // <div className="card lg:card-side bg-base-100 shadow-xl w-full">
        //     <figure><img src={img} alt="Album" className='w-full ' /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">{name}</h2>
        //         <p>{description}</p>
        //         <p>Price: {price}</p>
        //         <div className="card-actions justify-end">
        //             <Link to={`/services/${_id}`}>
        //                 <button className="btn btn-primary">View Details</button>
        //             </Link>
        //         </div>
        //     </div>
        // </div>
        <div className="card allServices lg:card-side bg-base-100 shadow-xl w-full">
            <div>
                <PhotoProvider>

                <PhotoView src={img}>
                    <img src={img} alt="" />
                </PhotoView>

            </PhotoProvider>
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Price: {price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default allServiceCard;