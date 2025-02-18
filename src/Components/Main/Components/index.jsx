import About from "./About";
import CaseStudio from "./CaseStudio";
import Client from "./Client";
import Contact from "./Contact";
import Features from "./Features";
import Hero from "./Hero";
import HowWeDo from "./HowWeDo";
import News from "./News";
import Project from "./Project";
import ServiceArea from "./ServiceArea";
import Testimonial from "./Testimonial";

const Home = () => {


    return (

        <>
            <main class="main-page homepage">



                <div data-elementor-type="wp-page" data-elementor-id="9" class="elementor elementor-9">
                    <Hero/>
                    <Client/>
                    <HowWeDo/>
                    <ServiceArea/>
                    <CaseStudio/>
                    <About/>
                    <Testimonial/>
                    <Project/>
                    <News/>
                    <Features/>
                    <Contact/>
                    
                    
                </div>
            </main>

        </>
    )
}

export default Home;