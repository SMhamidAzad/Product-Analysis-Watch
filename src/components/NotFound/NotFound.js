import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className='mt-5 pt-5'>
                <h1 className='text-center'>Oops! The page you're looking for was not found.</h1>
                <h1 style={{ fontSize: '80px', fontWeight: '900' }} className='text-danger text-center'>404</h1>
            </div>
            <div className='d-flex justify-content-center my-4'>
                <Link style={{ backgroundColor: 'rgb(255,26,26)', color: 'white' }} to="/" className='btn py-2 px-3 fw-bold rounded-3'>Back To Home</Link>
            </div>
        </div>
    );
};

export default NotFound;