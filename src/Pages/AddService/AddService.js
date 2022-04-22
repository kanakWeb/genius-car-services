import React from 'react';
import {useForm} from "react-hook-form";


const AddService = () => {

    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data)
        const url=`http://localhost:5000/service`
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
        })
    };


    return (
        <div className='mx-auto my-5 border p-3 rounded shadow-lg border-warning  w-50'>
            <h2 className='text-center'>This is addService</h2>
            <form className='d-flex flex-column'
                onSubmit={
                    handleSubmit(onSubmit)
            }>
                <input className='my-2' placeholder='Your Name:' {...register("name", { required: true, maxLength: 20 })}/>
                <textarea className='my-2' placeholder='Description:' {...register("description")}/>
                <input className='my-2' placeholder='Price:$' type="number" {...register("price")}/>
                <input className='my-2' placeholder='Phot Url:' type="text" {...register("img")}/>
                <input className='my-2 bg-warning btn' type="submit" value='Add Service'/>
            </form>
        </div>
    );
};

export default AddService;
