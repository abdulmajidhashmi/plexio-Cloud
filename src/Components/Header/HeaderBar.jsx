import {Link} from 'react-router-dom';
const HeaderBar=()=>{

    return (
        <div className="header-bar">
        <div className="custom-container">
            <div className="header-bar-body d-flex align-items-center justify-content-between">
                        <div className="left">
        
                        <select id="country" className="country-select" name="country">
        <option value="en">EN</option>
        <option value="uk">UK</option>
        <option value="dz">DZ</option>
        </select>
                </div>
                        <div className="right">
                    <p>
                       Level up your business with <Link href="#"  data-word="PLEXIO CLOUD." id="dataWord">PLEXIO CLOUD.</Link>
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default HeaderBar;