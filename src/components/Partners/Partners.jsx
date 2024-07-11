import './Partners.css'
import nike from "../../assets/images/th.jpeg"
import adidas from "../../assets/images/th (1).jpeg"
import zara from "../../assets/images/th (2).jpeg"
import northFace from "../../assets/images/th (3).jpeg"

const Partners = () => {
  return (
    <>
      <section className="partners">
            <h2>Partners</h2>
            <div className="partner__logos" >
                <img src={nike} alt="Nike" />
                <img src={adidas} alt="Adidas" />
                <img  className="zara" src={zara} alt="zara" />
                <img className="northFace" src={northFace} alt="The North Face" />
            </div>
        </section>
    </>
  );
};

export default Partners;