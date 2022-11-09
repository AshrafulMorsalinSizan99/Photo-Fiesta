import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
const ServiceCard = ({ service }) => {
    const { _id, img, name, price, description } = service;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl h-50">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img src={img} alt="Album" /></figure>
                </PhotoView>
            </PhotoProvider>
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

export default ServiceCard;