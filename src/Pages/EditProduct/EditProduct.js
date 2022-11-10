import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const EditProduct = () => {
    // const { user } = useContext(AuthContext);
    // const { _id, name, img, price, description } = useLoaderData();
    const router = useParams();
    // console.log(router)
    const { id } = router;
    const [review, setReview] = useState({});
    // const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${id}`)
            .then(res => res.json())
            .then(data => {
                setReview(data)
                // console.log(data)
            })
            .catch(err => console.error(err))
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = {
            // name: e.target.name1.value,
            // email: e.target.email.value,
            message: e.target.review.value
        }



        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(result)
        })
            .then(res => res.json())
            .then(data => {
                navigate('/reviews')
            })
            .catch(err => console.error(err))

    }




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3'>
                    {/* <input type="text" defaultValue={''} name="name1" placeholder="Your Name" className="input input-bordered  w-full " />
                    <input type="email" defaultValue={''} name="email" placeholder="email" className="input  input-bordered w-full " required /> */}
                    {/* <input type="email" name="email" placeholder="email" className="input  input-bordered w-full " defaultValue={user?.email} readOnly /> */}

                    <textarea defaultValue={''} className="textarea textarea-bordered" name="review" ></textarea>
                </div>
                <input type='submit' className='btn mb-3 mt-3' value="Add Review"></input>
            </form>
        </div>
    );
};

export default EditProduct;