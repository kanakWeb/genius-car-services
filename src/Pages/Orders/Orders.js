import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import axiosPrivate from "../../api/axiosPrivate/axiosPrivate";

const Orders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getOrders = async () => {
      const email = user?.email;
      const url = `https://ancient-inlet-61363.herokuapp.com/order?email=${email}`;

      try {
        const { data } = await axiosPrivate.get(url);
        setOrders(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status===403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [user]);
  return (
    <div className="w-50 mx-auto">
      <h2>Your Order = {orders.length}</h2>
      {orders.map((order) => (
        <div className=" my-5" key={order._id}>
          {" "}
          <p>
            {order.email}: {order.service}
          </p>
        </div>
      ))}{" "}
    </div>
  );
};

export default Orders;
