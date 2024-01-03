function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <div id="text">
          <h1>
            Welcome to <span className="company-name">FOODIGY</span>
          </h1>
          <h3>
            Savor the Flavor, Delivering Culinary Delights to Your Doorstep -
            Your Tasty Journey Awaits!
          </h3>
        </div>
        <div className="login">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search for your favourite Delicacies, Resturants and more..."
            id="search-bar"
          ></input>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
