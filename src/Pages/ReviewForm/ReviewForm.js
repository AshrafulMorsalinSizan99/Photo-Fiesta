import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReviewForm = () => {
    const { user } = useContext(AuthContext);
    const { _id, name, img, price, description } = useLoaderData();

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name1 = form.name.value;
        const email = user?.email;
        const review = form.review.value;

        const placeReview = {
            service: _id,
            serviceName: name,
            price: price,
            reviewer: name1,
            email,
            review
        }
        fetch('https://photo-fiesta-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(placeReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Review placed successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <form onSubmit={handlePlaceReview}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3'>
                    <input type="text" name="name1" placeholder="Your Name" className="input input-bordered  w-full " />
                    <input type="email" name="email" placeholder="email" className="input  input-bordered w-full " required />
                    <input type="email" name="email" placeholder="email" className="input  input-bordered w-full " defaultValue={user?.email} readOnly />

                    <textarea className="textarea textarea-bordered" name="review" placeholder="Bio"></textarea>
                </div>
                <input type='submit' className='btn' value="Add Review"></input>
            </form>
        </div>
    );
};

export default ReviewForm;