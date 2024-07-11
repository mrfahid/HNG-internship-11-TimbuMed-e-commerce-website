import "./Newsletter.css";

const Newsletter = () => {
  return (
    <>
      <section className="newsletter">
        <h2>Stay up to Updated</h2>
        <p>You're probably thinking, "Another newsletter?" </p>
        <p>But we promise, you're going to love ours!</p>
        <input type="email" placeholder="Your Email" />
        <button>Subscribe</button>
      </section>
    </>
  );
};

export default Newsletter;
