import React from 'react';
import './DisplayReview.css'

const DisplayReview = ({ review }) => {
    const { name, picture, rating, comment } = review;

    return (

        <div style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} className='col px-3 py-3 w-25 mobile-width'>
            <div>
                <div className='d-flex justify-content-center mb-2'>
                    <img className='' src={picture} alt="" />
                </div>
                <p style={{ lineHeight: '1.1' }}>{comment}</p>
                <p className='fs-5 my-0'>{name}</p>

                <h6>Rating: <span className='text-warning fs-4'>{rating}</span></h6>
            </div>
        </div>

    );
};

export default DisplayReview;