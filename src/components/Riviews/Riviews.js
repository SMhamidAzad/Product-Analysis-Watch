import useReviews from '../../hooks/useReviews';
import Riview from '../Rivew/Riview';

const Riviews = () => {
    // const [reviews,setReviews] = useState([]);
    // useEffect(()=>{
    //     fetch('reviews.json')
    //     .then(res => res.json())
    //     .then(data => setReviews(data));
    // },[]);
    const [reviews, setReviews] = useReviews();
    return (
        <div className='container'>
            {
                reviews.map(review => <Riview
                key={review._id}
                riview={review}
                ></Riview>)
            }
        </div>
    );
};

export default Riviews;