function Hero() {
  return (
    <div className="hero">
      <div className="m-2 mt-[90px] text-center rounded-2xl bg-[url('https://images.unsplash.com/photo-1577016029703-cc22a7c0c28c?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-left">
        <div id="text" className="border rounded-2xl text-center h-64 self-center bg-black bg-opacity-15 ">
          <h1 className="p-16 text-white text-3xl font-bold font-serif rounded-b-xl">
            Welcome to <span className="bg-yellow-400 p-2 rounded-md text-white leading-[44px]">FOODIGY</span>
          </h1>
          <h3 className="hidden sm:block px-4 py-4 rounded-xl text-white text-xl font-bold font-serif bg-black bg-opacity-55 max-w-screen-lg mx-auto my-2">
            Savor the Flavor, Delivering Culinary Delights to Your Doorstep -
            Your Tasty Journey Awaits!
          </h3>
        </div>
        {/* <div className="login">
          <button>Login</button>
          <button>Sign Up</button>
        </div> */}
        
      </div>
    </div>
  );
}

export default Hero;
