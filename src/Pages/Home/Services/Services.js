import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Service from "./Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://ancient-inlet-61363.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className=" my-4 " id="service">
      <h2 className="services-title py-3">Our Services</h2>
      <div className="container services-container">
        {services.map((service) => (
          <Service key={service._id} service={service}>
            {" "}
          </Service>
        ))}{" "}
      </div>
    </div>
  );
};

export default Services;
