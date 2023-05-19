import MyImage from '../../assets/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
import './Navigation.css'
export default function Navigation() {
  return (
    
        <div className="row">
                <NavLink className="l-3 m-2 c-12 logo-image" to="/" >
                    <img src={MyImage} alt='logo'/>
                </NavLink>
                <NavLink className="l-1 l-o-3  m-2 m-o-2 c-12" to="products">Categories</NavLink>
                <NavLink className="l-1 m-2 c-12" to="about">About</NavLink>
                <NavLink className="l-1 m-2 c-12" to="help">Help</NavLink>
                <NavLink className="l-1 m-2 c-12" to="careers">Careers</NavLink>
                <NavLink className="l-1 m-2 c-12" to="care">Sign In</NavLink>
                <NavLink className="l-1 m-2 c-12" to="car">
                    <FontAwesomeIcon 
                    icon={faCartShopping} 
                    bounce 
                    size="2x" 
                    style={{color: "#ffffff",}}
                    />
                </NavLink>
            </div>
    
  )
}
