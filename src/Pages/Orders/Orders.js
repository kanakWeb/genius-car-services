import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import axios from 'axios'
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {useNavigate} from 'react-router-dom';
import {signOut} from 'firebase/auth';
import axiosPrivate from '../../api/axiosPrivate/axiosPrivate';

const Orders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const getOrders = async () => {
            const email = user.email
            const url = `http://localhost:5000/order?email=${email}`

            try {
                const {data} = await axiosPrivate.get(url);
                setOrders(data)
            } catch (error) {
                console.log(error.message);
                if (error.response === 401 || error.response.status) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        };
        getOrders();

    }, [user])
    return (
        <div>
            <h2>Your Order = {
                orders.length
            }</h2>
        </div>
    );
};

export default Orders;
