// import { CART_IMG_URL} from "../utils/constants";
import { CART_URL, LOGO_URL } from "../utils/constants";

function Header() {
  return (
    <div className="header">
      <nav className="nav">
        <img className="logo" src={LOGO_URL} alt="company-logo" />
        <div className="nav-items">

            <ul>
              <li>Home</li>
              <li>Menu</li>
              <li>Resturants</li>
            </ul>
            <img
              className="cart-logo"
              width="25"
              height="25"
              src={CART_URL}
              alt="shopping-cart"
            />

        </div>
      </nav>
    </div>
  );
}

export default Header;
