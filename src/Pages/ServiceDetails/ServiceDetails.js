import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReviewForm from '../ReviewForm/ReviewForm';
import Reviews from '../Reviews/Reviews';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const { _id, name, img, price, description } = useLoaderData();
    return (
        <div className='service-details mb-3'>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <h2 className='text-5xl text-blue-700 mb-2'>Service Section</h2>
                <figure><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>
            <div>
                <h2 className='text-5xl text-blue-700'>Review Section</h2>
                {
                    user?.uid ?
                        <>
                            <Reviews></Reviews>
                            <ReviewForm></ReviewForm>
                        </>
                        :
                        <h2 className='text-3xl mt-4'>Please <Link to='/login'>Login</Link> to add a review</h2>
                }
            </div>
        </div>
    );
};

export default ServiceDetails;