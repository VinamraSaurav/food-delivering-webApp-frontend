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
    <div className="fixed top-0 left-0 right-0">
      <nav className="bg-black text-white flex justify-between shadow-md shadow-slate-500">
        <img className="h-14 m-2 items-center rounded-full ring-1 ring-white" src={LOGO_URL} alt="company-logo" />
        <div className="nav-items">

            <ul className="flex flex-wrap items-center p-2 m-2 mx-auto text-white sm:flex-nowrap ">
              <li className="p-1 m-1 mx-4">{(online===true)?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
</svg>
:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
</svg>
}</li>
              <li className="p-1 m-1 mx-4 hover:bg-yellow-400 hover:text-black rounded-xl px-3"><Link to="/">Home</Link></li>
              <li className="p-1 m-1 mx-4 hover:bg-yellow-400 hover:text-black rounded-xl px-3"><Link to="/about">About</Link></li>
              <li className="p-1 m-1 mx-4 hover:bg-yellow-400 hover:text-black rounded-xl px-3"><Link to="/contact">Contact Us</Link></li>
              <li className="p-1 m-1 ms-4 hover:bg-yellow-400 hover:text-black rounded-xl px-3"><Link to="/cart"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</Link></li>
            </ul>
            {/* <Link to="/cart"><img
              className="cart-logo"
              width="25"
              height="25"
              src={CART_URL}
              alt="shopping-cart"
            /></Link> */}
            {/* <div className="login">
              <Link to="/login">
          <button
          className="login-btn">{logValue}</button></Link>
          <button>Sign Up</button>
        </div> */}

        </div>
      </nav>
    </div>
  );
}

export default Header;
