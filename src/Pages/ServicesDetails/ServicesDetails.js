import React from 'react';
import {  Link, useParams } from "react-router-dom";
const ServicesDetails = () => {
    const{serviceId}=useParams()
    return (
        <div>
            <h2>details  Part</h2>
            <p className='text-center'>Service id : {serviceId}</p>
            <div className='text-center'>
            <Link to='/checkout' className>
            <button className='btn btn-primary'>Proceed Checkout</button>
            </Link>
        </div>
        </div>
    );
};

export default ServicesDetails;