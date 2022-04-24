import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {
    const [user]=useAuthState(auth)
const [orders,setOrders]=useState([])
 useEffect(()=>{
     const getOrders=async()=>{
        const email=user.email
         const url=`http://localhost:5000/orders?email=${email}`
        const {data}= await axios.get(url)
        setOrders(data)
     }
     getOrders()
    
 },[user])
    return (
        <div>
            <h2>Your Order = {orders.length}</h2>
        </div>
    );
};

export default Orders;