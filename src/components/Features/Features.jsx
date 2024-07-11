import './Features.css'
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { CiShoppingBasket } from "react-icons/ci";

// import { CiStopwatch } from "react-icons/ci";
// import { FaCartArrowDown } from "react-icons/fa6";

// import { FaBagShopping } from "react-icons/fa6";

const Features = () => {
  return (
    <>
      <section className="features"> 
        <div className="feature">
          <FiShoppingCart />
          <h3>Original Products</h3>
          <p>We ensure money-back guarantee if the product is counterfeit.</p>
        </div>
        <div className="feature">
          <MdOutlineEmojiEmotions />
          <h3>Satisfaction Guarantee</h3>
          <p>We ensure money-back guarantee if the product is counterfeit.</p>
        </div>
        <div className="feature">
          <HiOutlineSquare3Stack3D />
          <h3>New Arrival Everyday</h3>
          <p>We ensure money-back guarantee if the product is counterfeit.</p>
        </div>
        <div className="feature">
          <CiShoppingBasket />
          <h3>Fast & Free Shipping</h3>
          <p>We ensure money-back guarantee if the product is counterfeit.</p>
        </div>
      </section>
    </>
  );
};

export default Features;
