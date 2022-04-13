import React from 'react';

const Footer = () => {
    const today=new Date();
    const year=today.getFullYear();
    return (
        <footer>
            <p className='mt-5 text-center  bg-dark text-white mb-0 py-3'><small>Copyright &copy; {year}</small></p>
        </footer>
    );
};

export default Footer;