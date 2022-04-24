import React from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom';
import useServiceDetails from '../../hooks/useServiceDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const {serviceId} = useParams()
    const [service] = useServiceDetails(serviceId)

    const [user] = useAuthState(auth);

    const handlePlaceOrder=e=>{
        e.preventDefault()
      const  order={
        email:user.email,
        service:service.name,
        serviceId:serviceId,
        address:e.target.address.value,
        phone:e.target.phone.value
        }
        axios.post('http://localhost:5000/order',order)
        .then(res=>{
            const {data}=res;
            if(data.insertedId){
                toast('Done order')
                e.target.reset();
            }
        })
    }

    return (
        <div className='w-50 mx-auto'>
            <p className='fs-3 py-5 text-center my-5 text-warning fw-bold'>Please Order :
                <span className='text-danger'>
                    {
                    service.name
                }</span>
            </p>

            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user.displayName} name="name" id="" disabled/>
                <br/>
                <input className='w-100 mb-2' type="email" value={user.email} name="email" id="" disabled/>
                <br/>
                <input className='w-100 mb-2' type="text" name="name" id="" value={service.name} disabled/>
                <br/>
                <input className='w-100 mb-2' type="number" name="phone" id="" placeholder='Phone Number'/>
                <br/>
                <input className='w-100 mb-2' type="text" name="address" id="" placeholder='Address' autoComplete='off'/>
                <br/>
                <input className='w-100 mb-2' type="submit" name="name" id="" placeholder='Submit'/>
                <br/>
            </form>

        </div>
    );
};

export default Checkout;
