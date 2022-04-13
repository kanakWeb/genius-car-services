import React from "react";
import "./service.css";
const Service = ({ service }) => {
  const { name, img, description, price,id} = service;

  const navigateToHandleServicesDetails=(id)=>{
console.log(id);
  }

  return (
    <div className="service">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>Price:$ {price}</p>
      <p>
        <small>{description}</small>
      </p>
      <button onClick={()=>navigateToHandleServicesDetails(id)} className="btn btn-primary">Book:{name}</button>
    </div>
  );
};

export default Service;
