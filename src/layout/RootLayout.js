import { NavLink, Outlet } from "react-router-dom"; 


const RootLayout = () => {
    return ( 
        <div className="root-layout">
        <header>
            <nav>
            <div className="row">
                <h1 className="l-3 m-4 c-12">React Web</h1>
                <NavLink className="l-1 l-o-6 m-4 c-12" to="/">Home</NavLink>
                <NavLink className="l-1 m-4 c-12" to="about">About</NavLink>
                <NavLink className="l-1 m-4 c-12" to="help">Help</NavLink>
            </div>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
        </div>
     );
}
 
export default RootLayout;