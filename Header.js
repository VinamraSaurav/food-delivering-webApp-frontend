function Header(){
    return(
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
}

export default Header;