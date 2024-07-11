import './TopProducts.css'
import { CiHeart } from "react-icons/ci";
import discount from "../../assets/images/image 9 (1).svg"

const TopProducts = () => {
  return (
    <>
      <section className="top-products">
            <h2>Top Products of the Day</h2>
            <div className="products__list">
                <div className="product">
                  <div className="product__img">
                    <img src={discount}alt="Product 1"/>
                    <CiHeart className='heart__icon'/>
                    <div className='special__deal'> -30% </div>
                  </div>
                  <div className='product__content'>
                    <h3>Cough Medication</h3>
                    <p className="medication">Medication</p>
                    <p>NGN2,500.000 <span>NGN3,500.000</span></p>
                 </div>
                </div>
                <div className="product">
                  <div className="product__img">
                    <img src={discount}alt="Product 1"/>
                    <CiHeart className='heart__icon'/>
                    <div className='special__deal'> -30% </div>
                  </div>
                  <div className='product__content'>
                    <h3>Cough Medication</h3>
                    <p className="medication">Medication</p>
                    <p>NGN2,500.000 <span>NGN3,500.000</span></p>
                 </div>
                </div>
                <div className="product">
                  <div className="product__img">
                    <img src={discount}alt="Product 1"/>
                    <CiHeart className='heart__icon'/>
                    <div className='special__deal'> -30% </div>
                  </div>
                  <div className='product__content'>
                    <h3>Cough Medication</h3>
                    <p className="medication">Medication</p>
                    <p>NGN2,500.000 <span>NGN3,500.000</span></p>
                 </div>
                </div>
                <div className="product">
                  <div className="product__img">
                    <img src={discount}alt="Product 1"/>
                    <CiHeart className='heart__icon'/>
                    <div className='special__deal'> -30% </div>
                  </div>
                  <div className='product__content'>
                    <h3>Cough Medication</h3>
                    <p className="medication">Medication</p>
                    <p>NGN2,500.000 <span>NGN3,500.000</span></p>
                 </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default TopProducts;