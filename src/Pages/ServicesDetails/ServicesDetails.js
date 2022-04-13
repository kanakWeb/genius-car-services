import React from 'react';
import {  useParams } from "react-router-dom";
const ServicesDetails = () => {
    const{serviceId}=useParams()
    return (
        <div>
            <h2>details  Part</h2>
            <p className='text-center'>Service id : {serviceId}</p>
        </div>
    );
};

export default ServicesDetails;