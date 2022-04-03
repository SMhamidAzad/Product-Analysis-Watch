import React from 'react';

const Home = () => {
    return (
        <div className="container">
            <div className='row mt-4'>
            <div className="col-md-8 d-flex align-items-center">
                <div>
                <h1>Your next watch</h1>
                <h1>Your best watch</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint rerum, voluptatem dicta autem at laudantium, magnam harum sit accusantium vel sequi suscipit odio quo nisi vero excepturi quod dolorum.</p>
                <button className='bg-primary border-0 text-white px-4 py-3 rounded fw-bold '>Live Demo</button>
                </div>
            </div>
            <div className="col-md-4 mt-4">
                 
                 <img className='img-fluid' src="https://m.media-amazon.com/images/I/71Ki0yBKVJL._AC_SX615_SY462_.jpg" alt="" />
                
            </div>
        </div>
        </div>
    );
};

export default Home;