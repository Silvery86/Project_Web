import { NavLink, Outlet } from "react-router-dom"; 
import Breadcrums from "../components/Breadcrums";
import './RootLayout.css'
import MyImage from '../assets/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const RootLayout = () => {
    return ( 
        <div className="root-layout">
        <header>
            <nav>
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
            </nav>
            <Breadcrums />
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
                <h1>Copyright</h1>
        </footer>
        </div>
     );
}
 
export default RootLayout;