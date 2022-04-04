import React from 'react';

const Riview = ({ riview }) => {
    const { name, picture, comment, rating } = riview;
    return (
        <div style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '10px', width: '47%'}} className="m-3 p-3">
            <div className='d-flex justify-content-between mb-3 '>
                <div className='d-flex'>
                    <img style={{ width: '60px', height: '60px', borderRadius: '50%' }} className='' src={picture} alt="" />
                    <h6 className='d-flex align-items-center ms-2'>{name}</h6>
                </div>
                <div className='d-flex align-items-center'>
                    <p className='text-warning fs-4'>{rating}</p>
                </div>
            </div>

            <p>{comment}</p>

        </div>
    );
};

export default Riview;