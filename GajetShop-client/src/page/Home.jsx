import Hero from "./HomeComponnents/Hero/Hero";
import Some from "./HomeComponnents/Hero/Some";
import Navbar from "./HomeComponnents/navbar/Navbar";

const Home = () => {
    return (
        <div>
            
          <Navbar />
          <Hero />
          <Some></Some>
            
        </div>
    );
};

export default Home;