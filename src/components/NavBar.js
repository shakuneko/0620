import { NavLink } from 'react-router-dom';
import CartSummary from './CartSummary';
import UserInfo from './UserInfo';

export default function NavBar()    {
    return (
            
            <div className="header-menu">
                <div className="header-word">
                    <NavLink to="/inspirations" className="menu1" activeClassName="menu1--active">
                        Inspirations
                    </NavLink>
                    <NavLink to="/shop" className="menu1" activeClassName="menu1--active">
                        Shop
                    </NavLink>
                    <NavLink to="/designers" className="menu1" activeClassName="menu1--active">
                        Designers
                    </NavLink>
                    <NavLink to="/about-Us" className="menu1" activeClassName="menu1--active">
                        About Us
                    </NavLink>
                    <NavLink
                        to="/admin/feed-products"
                        className="menu1"
                        activeClassName="menu1--active"
                        >
                        JSON Feeder
                    </NavLink>
                </div>
                <div className=" header-icon ">
                    <img alt="" className="header-icon1" src="https://raw.githubusercontent.com/shakuneko/icon/master/yh-search.png"/>
                    <UserInfo/>
                    <CartSummary/>
                </div>
            </div> 
    
    );
}