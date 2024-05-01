import About from "../About/About";
import Banner from "../Banner/Banner";
import Reviews from "../Rviews/Reviews";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div className=" mb-4">
          <Banner></Banner>
          <About></About>
          <Services></Services>
          <Reviews></Reviews>
        </div>
    );
};

export default Home;