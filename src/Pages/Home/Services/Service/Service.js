import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { id, name, img, price, description } = service
    const navigate = useNavigate()
    const handleToServiceDetails = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => handleToServiceDetails(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;