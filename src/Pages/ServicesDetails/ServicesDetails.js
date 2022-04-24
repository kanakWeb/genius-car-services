import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import useServiceDetails from '../../hooks/useServiceDetails';
const ServicesDetails = () => {
    const {serviceId} = useParams()
   const[service]=useServiceDetails(serviceId)
    return (
        <div>

            <h2 className='text-center'>You are about to book: {
                service.name
            }</h2>
            <div className='text-center'>
                <Link to={
                        `/checkout/${serviceId}`
                    }
                    className>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServicesDetails;
