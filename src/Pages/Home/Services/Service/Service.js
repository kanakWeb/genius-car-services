import React from "react";
import "./service.css";
import {useNavigate} from 'react-router-dom'
const Service = ({service}) => {
    const {
        name,
        img,
        description,
        price,
        _id
    } = service;

    const navigate = useNavigate()
    const navigateToHandleServicesDetails = (id) => {
        navigate(`/service/${id}`);
    };

    return (
        <div>
            <div className="service">
                <img src={img}
                    alt=""/>
                <h2>{name}</h2>
                <p>Price:$ {price}</p>
                <p>
                    <small>{description}</small>
                </p>
                <button onClick={
                        () => navigateToHandleServicesDetails(_id)
                    }
                    className="btn btn-primary">
                    Book:{name} </button>
            </div>
        </div>
    );
};

export default Service;
