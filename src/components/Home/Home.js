import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import DisplayReview from '../DisplayReview/DisplayReview';
import './Home.css'

const Home = () => {
    const [reviews] = useReviews()
    return (
        <div className="container">
            <div className='row my-4'>
                <div className="col-md-8 d-flex align-items-center mt-5">
                    <div>
                        <h1 style={{ color: '#E74216' }} className="heading">Your next watch</h1>
                        <h1 style={{ color: '#040924' }} className='heading mb-4'>Your best watch</h1>
                        <p>The Automatic Mechanical Watch Does Not Need To Be Loaded With The Battery. When Using It For The First Time, Please Push The Crown Back To Normal Working Condition. You Can Rotate The Crown By Rotating The Crown Clockwise 30 Times In The Normal Operating Position. The Initial Winding Is Completed, Because The Automatic Mechanical Watch Must Be Automatically Wound By The Swing Of The Arm, So It Must Be Worn For More Than Eight Hours Every Day To Ensure Accurate Time</p>
                        <button style={{ backgroundColor: 'rgb(255,26,26)' }} className='border-0 text-white mt-4 px-4 py-3 rounded-3 fw-bold '>Live Demo</button>
                    </div>
                </div>
                <div className="col-md-4 mt-5">
                    <img className='img-fluid' src="https://m.media-amazon.com/images/I/71Ki0yBKVJL._AC_SX615_SY462_.jpg" alt="" />
                </div>
                <div className='mt-5'>
                    <h1 style={{ color: '#040924' }} className='text-center my-5 fw-bolder'>Customer Reviews(3)</h1>
                    <div className='row row-cols-md-3 gap-5 d-flex justify-content-center'>
                        {
                            reviews.slice(0, 3).map(review => <DisplayReview key={review._id} review={review}></DisplayReview>)
                        }
                    </div>
                </div>
                <div className='d-flex justify-content-center my-4'>
                    <Link style={{ backgroundColor: 'rgb(255,26,26)', color: 'white' }} to="/reviews" className='btn py-2 px-3 fw-bold rounded-3'>See all reviews</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;