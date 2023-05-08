import { NavLink, Outlet } from "react-router-dom";


export default function HelpLayout() {
  return (
    <div className="help">
            <h2>Website Help</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas debitis quibusdam deserunt repellat hic molestias ipsum commodi aut odit!</p>
            <nav className="row">
                <NavLink className="col l-2 m-6 c-6 l-o-3" to="faq">View the FAQ</NavLink>
                <NavLink className="col l-2 m-6 c-6 l-o-2" to="contact">Contact Us</NavLink>
            </nav>
            <Outlet />
        </div>
  )
}

