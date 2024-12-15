import Accordian from "./HomeComponnents/Accordian/Accordian";
import Hero from "./HomeComponnents/Hero/Hero";



const Home = () => {
    return (
        <div className="space-y-10">
            <Hero />   
            <Accordian />  
        </div>
    );
};

export default Home;