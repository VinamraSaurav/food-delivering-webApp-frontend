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
                    <li className="cart"><img className="cart-logo" width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/shopping-cart.png" alt="shopping-cart"/></li>
                </ul>
            </div>
        </nav>
    </div>
);
const Hero=()=>(
    <div className='hero'>
        <div className="hero-text">
            <div id="text">
                <h1>Welcome to <span className="company-name">FOODIGY</span></h1>
                <h3>Savor the Flavor, Delivering Culinary Delights to Your Doorstep - Your Tasty Journey Awaits!</h3>
            </div>
            <div className="login">
                <button>Login</button>
                <button>Sign Up</button>
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
        <h3 className="resturant-cusines">Biriyani, North Indian</h3>
        <div className="restruant-description">
            <h5>ETA : 28 mins</h5>
            <h5 className="rating">⭐ : 4.5</h5>
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
            <Card/>
            <Card/>
            
        </div>
    </div>
);
const Footer=()=>(
    <div className='footer'>
            <h1 className="foot-name"><span className="company-name-foot">FOODIGY</span></h1>
            <div className="foot-menu">
                <img className="address-logo" src="https://media.giphy.com/media/b1jT7PYHb6haRPjafP/giphy.gif" alt="Address"/>
                <div className="address">
                    <ul><h3>Address</h3>
                    <li>Patia, Bhubaneswar</li>
                    <li>Odhisha-751024</li>
                    <li>India</li>
                    </ul>
                </div>
                <div className="career">
                    <ul><h3>Explore Career</h3>
                        <li>- Want to be part of us.</li>
                        <li>- Current Job Openings</li>
                        <li>- Student Internship</li>
                    </ul>
                </div>
            </div>
           
            <div className="social">
            <h3>We are Social...  Connect with us :D !! </h3>
                <ul>
                    <li className="youtube"><img src="https://clipart-library.com/images/dc4LABqni.png" /></li>
                    <li className="insta"><img src="https://static-00.iconduck.com/assets.00/instagram-icon-256x256-tc8iic57.png"/></li>
                    <li className="x"><img src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png"/></li>
                    {/* <li className="linkedin"><img src="https://p7.hiclipart.com/preview/496/112/893/linkedin-ico-icon-linkedin-png-hd.jpg"/></li> */}
                </ul>
            </div>
            <div className="copyright"> ©️ 2024 - Created by VINAMRA (Vin) | All Rights Reserved </div>
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