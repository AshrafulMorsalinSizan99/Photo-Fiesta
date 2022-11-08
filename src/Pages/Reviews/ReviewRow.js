import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review1, handleDelete }) => {
    const { _id, serviceName, price, email, review, service } = review1;

    const [reviewService, setReviewService] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))
    }, [service])



    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className='mask mask-squircle w-24 h-24'>
                            {
                                reviewService?.img &&
                                <img src={reviewService.img} alt="" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">Price: {price}</div>
                    </div>
                </div>
            </td>
            <td>
                {email}
                <br />
                <span>{review}</span>
            </td>
            <td>Purple</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default ReviewRow;