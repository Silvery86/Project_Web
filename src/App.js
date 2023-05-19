import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import './Grid.css'
import './App.css'


//pages
import About from "./pages/About";
import Home from "./pages/Home";
import Faq from "./pages/help/Faq";
import Contact, { submitAction } from "./pages/help/Contact";
import CareerDetails, { careerDetailsLoader } from "./pages/careers/CareerDetails";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerError from "./pages/careers/CareerError";
import NotFound from "./pages/NotFound";

// layout
import RootLayout from "./layout/RootLayout";
import HelpLayout from "./layout/HelpLayout";
import CareersLayout from "./layout/CareersLayout";
import ProductsLayout from "./layout/ProductsLayout";
import Products, { productsLoader } from "./pages/products/Products";
import ProductDetails, { productDetailsLoader } from "./pages/products/ProductDetails";
import ProductError from "./pages/products/ProductError";
import UserLayout from "./layout/UserLayout";
import SignIn from "./pages/user/SignIn";





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
          <Route index element = {<Home/>} />
          <Route path="about" element = {<About/>} />
          <Route path="help" element = {<HelpLayout />}>
              <Route path="faq" element = {<Faq />} />
              <Route path="contact" element = {<Contact />} action={submitAction}/>
          </Route>
          <Route path="careers" element={<CareersLayout />} errorElement = {<CareerError />}>
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
          <Route path="products" element={<ProductsLayout />} errorElement={<ProductError/>}>
            <Route index 
            element={<Products />} 
            loader = {productsLoader}
            />
            <Route 
              path=":id"
              element={<ProductDetails/>}
              loader = { productDetailsLoader }
            />
          </Route>
          
          <Route path="signin-signup" element={<UserLayout />} >
            <Route index 
            element={<SignIn />} 
            />
          </Route>
          
          <Route path="*" element={<NotFound />} />
    </Route>
  )
)
function App() {
  return (
     <RouterProvider basename='/build' router = { router } />
  );
}

export default App
