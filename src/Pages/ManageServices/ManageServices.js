import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {

    const [services, setServices] = useServices()

    const handleDelete = (id) => {
        const proceed = window.confirm('are you sure?');
        if (proceed) {
            const url = `https://whispering-brushlands-88392.herokuapp.com/service/${id}`
            fetch(url, {method: 'DELETE'}).then(res => res.json()).then(data => {
                const remaining = services.filter(service => service._id !== id)
                setServices(remaining)
            })
        }
    }
    return (
        <div>
            <h2 className='text-center'>Manage services: {
                services.length
            }</h2>

            <br/> {
            services.map(service => <div className='w-50 mx-auto'
                key={
                    service._id
            }>
                <h5>service:{
                    service.name
                }</h5>
                <button onClick={
                    () => handleDelete(service._id)
                }>X</button>
            </div>)
        } </div>
    );
};

export default ManageServices;
