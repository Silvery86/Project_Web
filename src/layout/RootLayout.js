import { Outlet } from "react-router-dom"; 
import Breadcrums from "../components/Breadcrums";
import './RootLayout.css'
import Navigation from "../pages/navigation/Navigation";
import Footer from "../pages/footer/Footer";



const RootLayout = () => {
    return ( 
        <div className="root-layout">
        <header>
        <nav>
             <Navigation />
        </nav>
           
            <Breadcrums />
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
              <Footer />
        </footer>
        </div>
     );
}
 
export default RootLayout;