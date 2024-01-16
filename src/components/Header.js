// import { CART_IMG_URL} from "../utils/constants";
import { useState } from "react";
import { CART_URL, LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

function Header() {
  const[logValue,setLogValue]=useState("Login")
  // const[onlineValue, setOnlineValue]=useState("");
  const online=useOnlineStatus();

  // (online===true)?setOnlineValue("✅"):setOnlineValue("🔴");
  

  return (
    <div className="header">
      <nav className="nav">
        <img className="logo" src={LOGO_URL} alt="company-logo" />
        <div className="nav-items">

            <ul>
              <li>Online:{(online===true)?"✔️":"❌"}</li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/cart">🛒</Link></li>
            </ul>
            {/* <Link to="/cart"><img
              className="cart-logo"
              width="25"
              height="25"
              src={CART_URL}
              alt="shopping-cart"
            /></Link> */}
            <div className="login">
              <Link to="/login">
          <button
          className="login-btn">{logValue}</button></Link>
          {/* <button>Sign Up</button> */}
        </div>

        </div>
      </nav>
    </div>
  );
}

export default Header;
