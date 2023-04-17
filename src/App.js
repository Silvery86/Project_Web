import { createBrowserRouter, Route, NavLink, createRoutesFromElements, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import './Grid.css'
import './App.css'
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
          <Route index element = {<Home/>} />
          <Route path="about" element = {<About/>} />
    </Route>
  )
)
function App() {
  return (
     <RouterProvider router = { router } />
  );
}

export default App
