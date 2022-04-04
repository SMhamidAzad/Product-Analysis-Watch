import useReviews from '../../hooks/useReviews';
import Riview from '../Rivew/Riview';

const Riviews = () => {
   
    const [reviews, setReviews] = useReviews();
    return (
        <div className='container'>
            <h2 style={{ color: '#040924'}} className='text-center my-3 fw-bolder'>Custommer Says</h2>
           <div className='row row-cols-2'>
           {
                reviews.map(review => <Riview
                key={review._id}
                riview={review}
                ></Riview>)
            }
           </div>
        </div>
    );
};

export default Riviews;