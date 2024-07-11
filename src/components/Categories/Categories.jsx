import "./Categories.css";
import { FaArrowRightLong } from "react-icons/fa6";
import vitamin from '../../assets/images/image 9.svg'

const Categories = () => {
  return (
    <>
      <section className="categories">
        <h2>Categories</h2>
        <div className="category__grid">
        <div className="category__list one">
          <div className="category__content">
            <h4>Medicine</h4>
            <p>Find exclusive offer</p>
            <p className="explore">
              Explore
              <FaArrowRightLong className="arrow__icon" />
            </p>
          </div>
          <div className="category__img">
            <img src={vitamin} alt="Medicine" />
          </div>
        </div>
        <div className="category__list two">
          <div className="category__content">
            <h4>Medical Equipment</h4>
            <p>Find exclusive offer</p>
            <p className="explore">
              Explore
              <FaArrowRightLong className="arrow__icon" />
            </p>
          </div>
          <div className="category__img">
            <img src={vitamin} alt="Medical Equipment" />
          </div>
        </div>
        <div className="category__list three">
          <div className="category__content">
            <h4>Beauty & Wellness</h4>
            <p>Find exclusive offer</p>
            <p className="explore">
              Explore
              <FaArrowRightLong className="arrow__icon" />
            </p>
          </div>
          <div className="category__img">
            <img src={vitamin} alt="Beauty & Wellness" />
          </div>
        </div>
        <div className="category__list four">
          <div className="category__content">
            <h4>Cosmetic</h4>
            <p>Find exclusive offer</p>
            <p className="explore">
              Explore
              <FaArrowRightLong className="arrow__icon" />
            </p>
          </div>
          <div className="category__img">
            <img src={vitamin} alt="Cosmetic" />
          </div>
        </div>
        <div className="category__list five">
          <div className="category__content">
            <h4>Baby Care</h4>
            <p>Find exclusive offer</p>
            <p className="explore">
              Explore
              <FaArrowRightLong className="arrow__icon" />
            </p>
          </div>
          <div className="category__img">
            <img src={vitamin} alt="Baby Care" />
          </div>
        </div>
        <div className="category__list six">
          <div className="category__content">
            <h4>Medical Care</h4>
            <p>Find exclusive offer</p>
            <p className="explore">
              Explore
              <FaArrowRightLong className="arrow__icon" />
            </p>
          </div>
          <div className="category__img">
            <img src={vitamin} alt="Medical Care" />
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Categories;

