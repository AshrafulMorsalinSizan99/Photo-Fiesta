import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddServices = () => {
    const { user } = useContext(AuthContext);
    useTitle('Add Service');
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const service_id = form.service_id.value;
        const img = form.img.value;
        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;

        const service = {
            service_id,
            img,
            name,
            price,
            description
        }
        fetch('https://photo-fiesta-server.vercel.app/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Service placed successfully');
                    form.reset();
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <form onSubmit={handleAddService}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-3'>
                    <input type="text" name="service_id" placeholder="service_id" className="input input-bordered input-secondary w-full " required />
                    <input type="text" placeholder="img" name="img" className="input input-bordered input-secondary w-full " required />
                    <input type="text" placeholder="price" name="price" className="input input-bordered input-secondary w-full " required />
                    <input type="text" placeholder="name" name="name" className="input input-bordered input-secondary w-full " required />
                    <input type="text" placeholder="description" name="description" className="input input-bordered input-secondary w-full " required />
                </div>
                <button className='btn mb-2'>Add Service</button>
            </form>

        </div>
    );
};

export default AddServices;