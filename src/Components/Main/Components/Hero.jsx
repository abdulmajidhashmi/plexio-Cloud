import heromain from "../../../images/sq3lrRSNE2Nq.png";
import herosub1 from "../../../images/jpfTJfgjhyg2.svg";
import person1 from "../../../images/person1.png";
import herosub3 from "../../../images/ZdSIb0sd8J8w.png";
import herosub4 from "../../../images/BkdFbXlVrYyM.png";
import herosub5 from "../../../images/4U2k6JcpNpUt.png";
import herosub6 from "../../../images/HE4ECgingUtQ.svg"; 
const Hero = () => {


    return (

        <div class="elementor-element elementor-element-3602b62 e-con-full e-flex e-con e-parent"
            data-id="3602b62" data-element_type="container">
            <div class="elementor-element elementor-element-048de52 elementor-widget elementor-widget-synckhomev1hero"
                data-id="048de52" data-element_type="widget" data-widget_type="synckhomev1hero.default">
                <div class="elementor-widget-container">




                    <section class="hero-empowerment-area">
                        <div class="custom-container">
                            <div class="custom-row align-items-center">
                                <div class="hero-empowerment-left-content">
                                    <h6 class="section-subtitle">EMPOWERMENT</h6>
                                    <h1 class="section-title fade-in">Seamless IT for your business, boosting
                                        your growth.</h1>
                                    <p>We provide the expertise and support to propel your business forward in
                                        the digital landscape.</p>
                                    <div class="btns-group d-flex">

                                        <a href="#" class="theme-btn">Learn More</a>

                                        <a href="https://wpriverthemes.com/synck/contact/"
                                            class="theme-btn2">Let's Talk <i class="iconoir-arrow-up-right"></i>
                                        </a>

                                    </div>
                                </div>

                                <div class="hero-empowerment-right-content">
                                    <div class="top-content">
                                        <img decoding="async" class="desktop fade-in"
                                            src={heromain} />

                                        <div class="experience-box simple-shadow bounce-in">
                                            <div class="experience-body d-flex align-items-center">
                                                <img decoding="async" src={herosub1} />

                                                <div class="experience-content d-flex align-items-center">
                                                    <h1>+8</h1>
                                                    <p>
                                                        Years <span>Experience</span> </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="bottom-content d-flex">
                                        <div class="our-expert-team-box simple-shadow bounce-in delay-2">
                                            <a href="https://wpriverthemes.com/synck/team/">
                                                <div
                                                    class="our-expert-team-box-inner d-flex align-items-center">
                                                    <div class="imgs imgs1 d-flex align-items-center">
                                                        <img decoding="async" src={person1} />
                                                        <img decoding="async" src={herosub3}/>
                                                        <img decoding="async" src={herosub4}/>
                                                        <img decoding="async" src={herosub5}/>
                                                    </div>
                                                    <p>
                                                        Meet <span>Our Experts</span> </p>
                                                </div>
                                            </a>
                                        </div>

                                        <div class="google-reviews-box simple-shadow bounce-in delay-3">
                                            <div class="left">
                                                <span>Verified by</span>
                                                <img decoding="async" src={herosub6}/>
                                            </div>
                                            <div class="right">
                                                <div class="stars d-flex align-items-center">
                                                    <i class="las la-star"></i>
                                                    <i class="las la-star"></i>
                                                    <i class="las la-star"></i>
                                                    <i class="las la-star"></i>
                                                    <i class="las la-star"></i>
                                                </div>
                                                <p>
                                                    3245 <span>Reviews</span> </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    )
}


export default Hero;