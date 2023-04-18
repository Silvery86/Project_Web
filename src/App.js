import { createBrowserRouter, Route, NavLink, createRoutesFromElements, RouterProvider } from "react-router-dom";
import './Grid.css'
import './App.css'


//pages
import About from "./pages/About";
import Home from "./pages/Home";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import CareerDetails, { careerDetailsLoader } from "./pages/careers/CareerDetails";


// layout
import RootLayout from "./layout/RootLayout";
import HelpLayout from "./layout/HelpLayout";
import NotFound from "./pages/NotFound";
import CareersLayout from "./layout/CareersLayout";
import Careers, { careersLoader } from "./pages/careers/Careers";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
          <Route index element = {<Home/>} />
          <Route path="about" element = {<About/>} />
          <Route path="help" element = {<HelpLayout />}>
              <Route path="faq" element = {<Faq />} />
              <Route path="contact" element = {<Contact />} />
          </Route>
          <Route path="careers" element={<CareersLayout />}>
            <Route index
            element={<Careers />}
            loader = {careersLoader}
            />
            <Route 
              path=":id"
              element={<CareerDetails />}
              loader = { careerDetailsLoader }
            />
          </Route>

          <Route path="*" element={<NotFound />} />
    </Route>
  )
)
function App() {
  return (
     <RouterProvider router = { router } />
  );
}

export default App
