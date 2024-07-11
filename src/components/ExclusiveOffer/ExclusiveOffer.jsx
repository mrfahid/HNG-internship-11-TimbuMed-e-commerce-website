import './ExclusiveOffer.css'
import { CiStopwatch } from "react-icons/ci";
import supplementBottle from '../../assets/images/supplement.png';

const ExclusiveOffer = () => {
  return (
    <>
     <section className="exclusive-offer">
      <div className='exclusive__content'>
            <h2>Exclusive 45% OFF</h2>
            <p>Unlock exclusive savings with our 45% off promo! Treat yourself to your favorite products at unbeatable prices. Hurry, the offer won't last long, so shop now and save big!</p>
            <p className='stop__watch'>
              <CiStopwatch className='stop__watch-icon'/>
              1d:11hr:23min:30sec
              </p>
            <div><a href="#" className="btn">Shop Now</a></div>
      </div>
      <div className='exclusive__img'>
        <img src={supplementBottle} alt='offers__img'/>
      </div>
        </section>
        </>
  );
};

export default ExclusiveOffer;