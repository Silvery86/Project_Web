import { NavLink, Outlet } from "react-router-dom"; 


const RootLayout = () => {
    return ( 
        <div className="root-layout">
        <header>
            <nav>
            <div className="row">
                <h1 className="l-6 m-6 c-12">React Web</h1>
                <NavLink className="l-3 m-6 c-6" to="/">Home</NavLink>
                <NavLink className="l-3 m-6 c-6" to="about">About</NavLink>
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