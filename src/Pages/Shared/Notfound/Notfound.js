import React from 'react';
import error from '../../../images/error.jpg'
const Notfound = () => {
    return (
        <div className='row justify-content-center'>
            <h2 className=' text-center my-5 text-danger fs-1'> Not found 404</h2>
            <img className='' src={error} alt="" />
        </div>
    );
};

export default Notfound;