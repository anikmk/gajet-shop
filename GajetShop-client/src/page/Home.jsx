
import Accordian from "./HomeComponnents/Accordian/Accordian";
import Hero from "./HomeComponnents/Hero/Hero";
import { CardHoverEffectDemo } from "./HomeComponnents/HomeCard/CardHoverEffectDemo";

const Home = () => {
    return (
        <div className="space-y-10">
            <Hero />   
            <div className="bg-slate-900">
            <CardHoverEffectDemo />
            </div>
            <Accordian />  
        </div>
    );
};

export default Home;