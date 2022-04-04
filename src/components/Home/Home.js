import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import DisplayReview from '../DisplayReview/DisplayReview';

const Home = () => {
    const [reviews,setReviews] = useReviews()
    return (
        <div className="container">
            <div className='row my-4'>
            <div className="col-md-8 d-flex align-items-center">
                <div>
                <h1>Your next watch</h1>
                <h1>Your best watch</h1>
                <p>The Automatic Mechanical Watch Does Not Need To Be Loaded With The Battery. When Using It For The First Time, Please Push The Crown Back To Normal Working Condition. You Can Rotate The Crown By Rotating The Crown Clockwise 30 Times In The Normal Operating Position. The Initial Winding Is Completed, Because The Automatic Mechanical Watch Must Be Automatically Wound By The Swing Of The Arm, So It Must Be Worn For More Than Eight Hours Every Day To Ensure Accurate Time</p>
                <button className='bg-primary border-0 text-white px-4 py-3 rounded fw-bold '>Live Demo</button>
                </div>
            </div>
            <div className="col-md-4 mt-4">
                 
                 <img className='img-fluid' src="https://m.media-amazon.com/images/I/71Ki0yBKVJL._AC_SX615_SY462_.jpg" alt="" />
                
            </div>
            <div>
                <h1 className='text-center mt-5'>Customer Reviews(3)</h1>
                <div className='row row-cols-md-3'>
                    {
                        reviews.slice(0,3).map(review => <DisplayReview key={review._id} review={review}></DisplayReview>)
                    }
                </div>
                <Link to="/reviews" className=''>See all reviews</Link>
            </div>
        </div>
        </div>
    );
};

export default Home;