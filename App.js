import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Hero from "./Hero";
import Body from "./Body";
import Footer from "./Footer";
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

const App=()=>{
    return(
        <div id="app">
            <Header/>
            <Hero/>
            <Body/>
            <Footer/>
        </div>
    );
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
// {(cuisine.map((type)=>type.name)).join(", ")}