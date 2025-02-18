import HeaderBar from "./HeaderBar";
import HeaderMain from "./HeaderMain";
import './index.css';

function Header(){

    return (
        <>


<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">
            <p class="main-title bhf-hidden" itemprop="headline"><a href="https://wpriverthemes.com/synck"
                    title="Synck  WordPress Theme" rel="home">Synck  WordPress Theme</a></p>
            <div data-elementor-type="wp-post" data-elementor-id="5944" class="elementor elementor-5944">
                <div class="elementor-element elementor-element-7b74b6b e-con-full e-flex e-con e-parent"
                    data-id="7b74b6b" data-element_type="container">
                    <div class="elementor-element elementor-element-659ae683 elementor-widget elementor-widget-synckhomev1header"
                        data-id="659ae683" data-element_type="widget" data-widget_type="synckhomev1header.default">
                        <div class="elementor-widget-container">
                            
                        <HeaderBar/>
                        <HeaderMain/>
                            </div></div></div></div></header>
       
        </>
    )
}

export default Header;