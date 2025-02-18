import { Link } from "react-router-dom";
import logo from '../../img/logo.png';

function HeaderMain(){

    return (
        <>
       <header className="header-area">
                <div className="custom-container">
                    <div className="custom-row align-items-center justify-content-between">
                        <div className="header-left d-flex align-items-center">
                            <Link to="/" className="logo">
                                <img src={logo} alt="" />
                            </Link>

                            <div className="header-left-right">

                                <Link to="#" className="theme-btn">Contact Us</Link>

                                <span className="menu-bar">
                                    <i className="las la-bars"></i>
                                </span>
                            </div>
                            <nav className="navbar-wrapper">
                                <span className="close-menu-bar">
                                    <i className="las la-times"></i>
                                </span>
                                <ul>
                                    <li className="dropdown-menu-item home-menu" data-menu-index="0">

                                        <Link to="#">Home</Link>

                                        <span className="dropdown-menu-item-icon">
                                            <i className="las la-angle-down"></i>
                                        </span>
                                        <ul className="dropdown-menu">
                                            <div className="menu-header-home-menu-links-container"><ul id="menu-header-home-menu-links" className="menu"><li id="menu-item-4803" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-4803"><Link to="#" aria-current="page">IT Services</Link></li>
                                                <li id="menu-item-4804" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4804"><Link to="#">Business Consulting</Link></li>
                                            </ul></div>            </ul>

                                    </li>

                                    <li className="mega-menu-item company-menu" data-menu-index="0">
                                        <Link to="#">Company</Link>

                                        <span className="dropdown-menu-item-icon">
                                            <i className="las la-angle-down"></i>
                                        </span>
                                        <div className="mega-menu mega-menu-company">
                                            <div className="mega-menu-inner">
                                                <div className="custom-container d-flex">
                                                    <div className="left">
                                                        <div className="mega-menu-link-wrap d-flex justify-content-between">
                                                            <div className="mega-menu-link">
                                                                <h4>Get Started</h4>
                                                                <ul>
                                                                    <div className="menu-header-get-started-menu-links-container"><ul id="menu-header-get-started-menu-links" className="menu"><li id="menu-item-4762" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4762"><Link to="#">Setup 101</Link></li>
                                                                        <li id="menu-item-4763" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4763"><Link to="#">Adding users</Link></li>
                                                                        <li id="menu-item-4764" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4764"><Link to="#">Video tutorials</Link></li>
                                                                        <li id="menu-item-4765" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4765"><Link to="#">Libraries and SDKs</Link></li>
                                                                        <li id="menu-item-4766" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4766"><Link to="#">Plugins</Link></li>
                                                                        <li id="menu-item-4767" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4767"><Link to="#">Templates</Link></li>
                                                                    </ul></div>                                    </ul>
                                                            </div>

                                                            <div className="mega-menu-links d-flex">
                                                                <div className="mega-menu-link">
                                                                    <h4>Company</h4>
                                                                    <ul>
                                                                        <div className="menu-header-company-menu-links-container"><ul id="menu-header-company-menu-links" className="menu"><li id="menu-item-4768" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4768"><Link to="#">About Us</Link></li>
                                                                            <li id="menu-item-4772" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4772"><Link to="#">Partners</Link></li>
                                                                            <li id="menu-item-4770" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4770"><Link to="#">Careers</Link></li>
                                                                            <li id="menu-item-4771" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4771"><Link to="#">Events</Link></li>
                                                                            <li id="menu-item-4773" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4773"><Link to="#">Team</Link></li>
                                                                            <li id="menu-item-4769" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4769"><Link to="#">Blog</Link></li>
                                                                        </ul></div>                                        </ul>
                                                                </div>
                                                                <div className="mega-menu-link">
                                                                    <h4>Product</h4>
                                                                    <ul>
                                                                        <div className="menu-header-product-menu-links-container"><ul id="menu-header-product-menu-links" className="menu"><li id="menu-item-4777" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4777"><Link to="#">Overview</Link></li>
                                                                            <li id="menu-item-4778" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4778"><Link to="#">Our Pricing</Link></li>
                                                                            <li id="menu-item-4779" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4779"><Link to="#">Features</Link></li>
                                                                            <li id="menu-item-4776" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4776"><Link to="#">Case Studies</Link></li>
                                                                            <li id="menu-item-4774" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4774"><Link to="#">New Releases</Link></li>
                                                                            <li id="menu-item-4775" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4775"><Link to="#">Solutions</Link></li>
                                                                        </ul></div>                                        </ul>
                                                                </div>
                                                                <div className="mega-menu-link">
                                                                    <h4>Legal</h4>
                                                                    <ul>
                                                                        <div className="menu-header-legal-menu-links-container"><ul id="menu-header-legal-menu-links" className="menu"><li id="menu-item-4780" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4780"><Link to="#">Licenses</Link></li>
                                                                            <li id="menu-item-4781" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4781"><Link to="#">Settings</Link></li>
                                                                            <li id="menu-item-4782" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4782"><Link to="#">Cookies</Link></li>
                                                                            <li id="menu-item-4783" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4783"><Link to="#">Document</Link></li>
                                                                            <li id="menu-item-4784" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4784"><Link to="#">Terms</Link></li>
                                                                            <li id="menu-item-4785" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4785"><Link to="#">Privacy</Link></li>
                                                                        </ul></div>                                        </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div
                                                            className="mega-meu-footer d-flex align-items-center justify-content-between w-full">
                                                            <ul className="mega-menu-social d-flex align-items-center">
                                                                <li><Link to="#"><i className="iconoir-dribbble"></i></Link></li>

                                                                <li><Link to="#"><i className="iconoir-twitter"></i></Link></li>

                                                                <li><Link to="#"><i className="iconoir-instagram"></i></Link></li>

                                                                <li><Link to="#"><i className="iconoir-linkedin"></i></Link></li>
                                                            </ul>

                                                            <p>Looking for new career? <Link to="#">We&#039;re hiring</Link></p>
                                                        </div>
                                                    </div>

                                                    <div className="right">
                                                        <div className="mega-menu-ads">
                                                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/09/iphone-13-1.jpg" alt="" />

                                                            <h3>Solution in your hand</h3>
                                                            <p>Develop IT solutions based on the<br /> analysis phase.</p>
                                                            <Link to="#">View more</Link>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </li>


                                    <li className="mega-menu-item portfolio-menu" data-menu-index="0">
                                        <Link to="#">Portfolio</Link>

                                        <span className="dropdown-menu-item-icon">
                                            <i className="las la-angle-down"></i>
                                        </span>
                                        <div className="mega-menu mega-menu-portfolio">
                                            <div className="mega-menu-inner">
                                                <div className="custom-container d-flex">
                                                    <div className="left">
                                                        <div
                                                            className="mega-menu-link-wrap d-flex align-items-start justify-content-between">

                                                            <Link to="#">
                                                                <div className="mega-menu-portfolio-card">
                                                                    <div className="img-box">
                                                                        <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/09/portfolio-mega-menu-1.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <h4>E-commerce</h4>
                                                                        <p>we undertook a project to <br />migrate their existing.</p>
                                                                    </div>
                                                                </div>
                                                            </Link>

                                                            <Link to="#">
                                                                <div className="mega-menu-portfolio-card">
                                                                    <div className="img-box">
                                                                        <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/09/portfolio-mega-menu-2.jpg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <h4>App Development</h4>
                                                                        <p>The mobile application has <br />significantly improved.                                            </p>
                                                                    </div>
                                                                </div>
                                                            </Link>

                                                            <Link to="#">
                                                                <div className="mega-menu-portfolio-card">
                                                                    <div className="img-box">
                                                                        <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/09/portfolio-mega-menu-3.jpeg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <h4>SAAS Integration</h4>
                                                                        <p>We partnered with DEF to <br />upgrade their outdated IT.                                            </p>
                                                                    </div>
                                                                </div>
                                                            </Link>

                                                            <Link to="#">
                                                                <div className="mega-menu-portfolio-card">
                                                                    <div className="img-box">
                                                                        <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/09/portfolio-mega-menu-4.jpeg"
                                                                            alt="" />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <h4>Virtual Reality</h4>
                                                                        <p>Enter into the virtual reality <br />
                                                                            world for real experience.                                            </p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>

                                                        <div
                                                            className="mega-meu-footer d-flex align-items-center justify-content-between w-full">
                                                            <ul className="mega-menu-social d-flex align-items-center">
                                                                <li><Link to="#"><i className="iconoir-dribbble"></i></Link></li>

                                                                <li><Link to="#"><i className="iconoir-twitter"></i></Link></li>

                                                                <li><Link to="#"><i className="iconoir-instagram"></i></Link></li>

                                                                <li><Link to="#"><i className="iconoir-linkedin"></i></Link></li>
                                                            </ul>
                                                            <p>
                                                                <Link to="#">View Portfolio <i
                                                                    className="iconoir-arrow-up-right"></i></Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="right">
                                                        <div className="mega-menu-ads">
                                                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/09/macbook.jpg" alt="" />

                                                            <h3>Mobile app for a new era</h3>
                                                            <p>Download slack in your mobile for <br />
                                                                your daily usage.</p>
                                                            <Link to="#">View more</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>


                                    <li className="mega-menu-item service-menu" data-menu-index="0">
                                        <Link to="#">Services</Link>

                                        <span className="dropdown-menu-item-icon">
                                            <i className="las la-angle-down"></i>
                                        </span>
                                        <div className="mega-menu mega-menu-service">
                                            <div className="mega-menu-inner">
                                                <div className="custom-container d-flex">
                                                    <div className="left">
                                                        <div
                                                            className="mega-menu-link-wrap d-flex align-items-start justify-content-between">
                                                            <div className="mega-menu-service-cards align-items-start">

                                                                <Link to="#" >
                                                                    <div className="mega-menu-service-card">
                                                                        <div className="icon">
                                                                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/09/hwd-icon-1.svg"
                                                                                alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h3>Brainstroming</h3>
                                                                            <p>Ideas</p>
                                                                        </div>
                                                                    </div>
                                                                </Link>


                                                                <Link to="#" >
                                                                    <div className="mega-menu-service-card">
                                                                        <span className="icon">
                                                                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/09/hwd-icon-2.svg"
                                                                                alt="" />
                                                                        </span>
                                                                        <div className="content">
                                                                            <h3>Product</h3>
                                                                            <p>Design</p>
                                                                        </div>
                                                                    </div>
                                                                </Link>

                                                                <Link to="#" >
                                                                    <div className="mega-menu-service-card">
                                                                        <span className="icon">
                                                                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/09/hwd-icon-3.svg"
                                                                                alt="" />
                                                                        </span>
                                                                        <div className="content">
                                                                            <h3>SEO</h3>
                                                                            <p>Optimization</p>
                                                                        </div>
                                                                    </div>
                                                                </Link>

                                                                <Link to="#" >
                                                                    <div className="mega-menu-service-card">
                                                                        <span className="icon">
                                                                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/09/hwd-icon-4.svg"
                                                                                alt="" />
                                                                        </span>
                                                                        <div className="content">
                                                                            <h3>Front-End</h3>
                                                                            <p>Development</p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>

                                                            <div className="mega-menu-links d-flex">
                                                                <div className="mega-menu-link">
                                                                    <h4>Services</h4>
                                                                    <ul>
                                                                        <div className="menu-header-services-menu-links-container"><ul id="menu-header-services-menu-links" className="menu"><li id="menu-item-4792" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4792"><Link to="#">Development</Link></li>
                                                                            <li id="menu-item-4793" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4793"><Link to="#">Web Design</Link></li>
                                                                            <li id="menu-item-4794" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4794"><Link to="#">IT Support</Link></li>
                                                                            <li id="menu-item-4795" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4795"><Link to="#">E-Commerce</Link></li>
                                                                            <li id="menu-item-4796" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4796"><Link to="#">Cloud Things</Link></li>
                                                                            <li id="menu-item-4797" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4797"><Link to="#">CRM Solutions</Link></li>
                                                                        </ul></div>                                        </ul>
                                                                </div>
                                                                <div className="mega-menu-link">
                                                                    <h4>Our Fields</h4>
                                                                    <ul>
                                                                        <div className="menu-header-our-fields-menu-links-container"><ul id="menu-header-our-fields-menu-links" className="menu"><li id="menu-item-4786" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4786"><Link to="#">Healthcare</Link></li>
                                                                            <li id="menu-item-4787" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4787"><Link to="#">Banks</Link></li>
                                                                            <li id="menu-item-4788" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4788"><Link to="#">Logistics</Link></li>
                                                                            <li id="menu-item-4789" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4789"><Link to="#">Supermarkets</Link></li>
                                                                            <li id="menu-item-4790" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4790"><Link to="#">Industries</Link></li>
                                                                            <li id="menu-item-4791" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4791"><Link to="#">Hotels</Link></li>
                                                                        </ul></div>                                        </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div
                                                            className="mega-meu-footer d-flex align-items-center justify-content-between w-full">
                                                            <ul className="mega-menu-social d-flex align-items-center">
                                                                <li><Link to="#"><i className="iconoir-dribbble"></i></Link></li>

                                                                <li><Link to="#"><i className="iconoir-twitter"></i></Link></li>

                                                                <li><Link to="#"><i className="iconoir-instagram"></i></Link></li>

                                                                <li><Link to="#"><i className="iconoir-linkedin"></i></Link></li>
                                                            </ul>

                                                            <p>Looking for new career? <Link to="#">We&#039;re hiring</Link></p>
                                                        </div>
                                                    </div>
                                                    <div className="right">
                                                        <div className="mega-menu-ads">
                                                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/09/ipad.jpg" alt="" />

                                                            <h3>Our product hits</h3>
                                                            <p>Our new best IT product of the <br />year 2023.</p>
                                                            <Link to="#">View more</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <Link to="#">FAQ</Link>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                        <div className="header-right">
                            <div className="header-contact-info d-flex align-items-center">

                                <div className="phone-number">
                                    <Link to="#">
                                        Call Us             <i className="iconoir-arrow-up-right"></i>
                                    </Link>
                                    +91 77589 84183    </div>


                                <Link to="#" className="theme-btn">Contact Us</Link>

                            </div></div></div></div></header>
        </>
    )
}

export default HeaderMain;