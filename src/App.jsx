import "./App.css";
import {
  Categories,
  ExclusiveOffer,
  Features,
  Footer,
  Header,
  Hero,
  Newsletter,
  Partners,
  TopProducts,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Categories />
      <TopProducts />
      <ExclusiveOffer />
      <Newsletter />
      <Partners />
      <Footer />
    </>
  );
}

export default App;
