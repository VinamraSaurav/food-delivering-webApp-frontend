import React from "react";
import ReactDOM from "react-dom/client";

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
const Header=()=>(
    <div className='header'>
        <nav className="nav">
            <img className="logo" src="https://penji.co/wp-content/uploads/2022/08/11.Foodigy-logo.jpg" alt="company-logo" />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Resturants</li>
                    <li>🛒</li>
                </ul>
            </div>
        </nav>
    </div>
);
const Hero=()=>(
    <div className='hero'>
        <div className="hero-bakcground"></div>
        <div className="hero-text">
            <div id="text">
                <h1>Welcome to FOODIGY</h1>
                <h3>Savor the Flavor, Delivering Culinary Delights to Your Doorstep - Your Tasty Journey Awaits!</h3>
            </div>
            <div className="login">
                <button>Login</button>
                <button>Sing Up</button>
            </div>
            <div className="search">
                <input type="text" placeholder="Search for your favourite Delicacies, Resturants and more..." id="search-bar"></input>
                <button>Search</button>
            </div>
        </div>     
    </div>
);

const Card=()=>(
    <div className="card">
        <img alt="resturant-img" className="hotel-img" src="https://b.zmtcdn.com/data/pictures/0/20619030/60e121e2ce9dc2bbf92ff8e2458c772d_o2_featured_v2.jpg"/>
        <h1 className="resturant-name">Biriyani Hub</h1>
        <h3 className="resturant-cusines">Biriyani, Chinese</h3>
        <div className="restruant-description">
            <h5>ETA : 28 mins</h5>
            <h5 className="rating">Rating : 4.5 / 5.0</h5>
        </div>
    </div>

);

const Body=()=>(
    <div className='body'>
        <h1 className="title">Explore Our Resturants...</h1>
        <div className="card-hold">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
);
const Footer=()=>(
    <div className='footer'>
        
    </div>
);
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