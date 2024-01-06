import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
/**
 * Header
 *  -logo
 *  -nav-items
 *
 * Hero
 *  -hero-img
 *  -text
 *  -sign up and login button
 *  -search
 *  -search-button
 *
 * body
 *  -resturant-cards
 *      -resturant-img
 *      -resturant-name
 *      -resturant-cusines
 *      -resturant-time
 *      -resturant-rating
 * footer
 *  -Address
 *  -copyright
 *
 */

const App = () => {
  return (
    <div id="app">
      <Header />
      <Hero />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/login",
        element:<Login/>
      }

    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

