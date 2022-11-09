import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('photo-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are You sure you want to cancel this review?');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Deleted successfully');
                        const remaining = reviews.filter(rw => rw._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    // const handleUpdate = id => {
    //     fetch(`http://localhost:5000/reviews/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ status: 'Approved' })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount > 0) {
    //                 const remaining = reviews.filter(rw => rw._id !== id);
    //                 const approving = reviews.find(rw => rw._id === id);
    //                 approving.status = 'Approved';

    //                 const newReviews = [approving, ...remaining];
    //                 setReviews(newReviews);
    //             }
    //         })
    // }
    const navigate = useNavigate();
    const handleUpdate1 = (id) => {
        navigate(`/reviews/edit/${id}`)
    }

    return (
        <div>
            <h2 className="text-5xl text-center mb-5">You have {reviews.length} Reviews</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>User Name</th>
                            {/* <th>Favorite Color</th> */}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review1 => <ReviewRow
                                key={review1._id}
                                review1={review1}
                                handleDelete={handleDelete}
                                handleUpdate1={handleUpdate1}
                            ></ReviewRow>)
                        }
                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default Reviews;