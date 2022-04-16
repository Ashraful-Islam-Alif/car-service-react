import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams()
    return (
        <div className='text-center'>
            <h2>Welcome to service center:{serviceId}</h2>
            <Link to='/checkout'>
                <button className=' btn btn-primary '>Proceed Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;