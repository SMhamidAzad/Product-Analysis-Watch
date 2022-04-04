import React from 'react';

const Riview = ({riview}) => {
    const {name,picture,comment,rating}=riview;
    return (
        <div>
            <img style={{width: '60px',height: '60px', borderRadius: '50%'}} className='' src={picture} alt="" />
            <p>{comment}</p>
            <h6>{name}</h6>
            <p>Rating: {rating}</p>
        </div>
    );
};

export default Riview;