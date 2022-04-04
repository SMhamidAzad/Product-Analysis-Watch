import React from 'react';

const DisplayReview = ({ review}) => {
    const { name, picture, rating, comment } = review;
    
    return (
        
            <div className='col'>
                <div>
                <img src={picture} alt="" />
                <h3>{name}</h3>
                <p>{comment}</p>
                <h5 className=' text-warning'>Rating: {rating}</h5>
                </div>
            </div>

    );
};

export default DisplayReview;