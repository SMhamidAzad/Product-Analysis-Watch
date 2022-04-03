import React from 'react';
import { Card, Col } from 'react-bootstrap';

const DisplayReview = ({ review}) => {
    const { name, picture, rating, comment } = review;
    
    return (
        
        <Col>
            <Card>
                <Card.Img style={{borderRadius: '50%', width: '50px'}} variant="top" src={picture} />
                <h3>{name}</h3>
                <h4>Rating: {rating}</h4>
                <Card.Body>
                    <Card.Text>
                        {comment}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default DisplayReview;