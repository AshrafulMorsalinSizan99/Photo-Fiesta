import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    // useTitle('My Service');
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h2 className="text-5xl font-bold text-blue-700">Our Services</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-3'>

                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    >

                    </ServiceCard>)
                }

            </div>
            <div className='text-center mt-3'>
                <Link to={'/services'}>
                    <button className="btn btn-warning">View All</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;