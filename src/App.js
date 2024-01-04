import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer from "./components/Footer";
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
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

