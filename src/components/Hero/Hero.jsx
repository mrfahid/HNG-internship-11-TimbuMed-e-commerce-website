import './Hero.css';
import supplementBottle from '../../assets/images/supplement.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__text">
        <h1>Rare medicines only for your need</h1>
        <p>Explore our carefully curated selection of health and wellness products, specially designed to support your well-being and enhance your lifestyle.</p>
        <a href="#" className="btn">Shop Now</a>
        <div className="stats">
          <div><h2>200+</h2> International Brands</div>
          <div><h2>2,000+</h2> High-Quality Products</div>
          <div><h2>30,000+</h2> Happy Customers</div>
        </div>
      </div>
      <div className="hero__image">
        <img src={supplementBottle} alt="Supplement Bottle" />
      </div>
    </section>
  );
}

export default Hero;
