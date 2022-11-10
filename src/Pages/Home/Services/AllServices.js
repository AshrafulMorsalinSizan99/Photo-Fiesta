import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const AllServices = () => {
    const [allServices, setAllServices] = useState([]);
    useEffect(() => {
        fetch('https://photo-fiesta-server.vercel.app/allServices')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h2 className="text-5xl font-bold text-blue-700">Our Services</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-3'>

                {
                    allServices.map(allService => <ServiceCard
                        key={allService._id}
                        service={allService}
                    >

                    </ServiceCard>)
                }

            </div>
            <div className='text-center mt-3'>
                {/* <Link to={'/services'}>
                    <button className="btn btn-warning">View All</button>
                </Link> */}
            </div>
        </div>
    );
};

export default AllServices;