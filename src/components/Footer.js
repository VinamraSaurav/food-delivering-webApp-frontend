import { ADDRESS_GIF, GITHUB_LOGO_URL, INSTA_LOGO_URL, LINKED_IN_LOGO_URL, VIN_GIT, VIN_INSTA, VIN_LINK, VIN_X, X_LOGO_URL, YT_LOGO_URL } from "../utils/constants";

function Footer() {
  return (
    <div className="footer bg-black shadow-slate-600 shadow-lg">
      <h1 className="foot-name m-2 pt-4 text-center sm:text-left">
        <span className="company-name-foot bg-yellow-400 text-black font-serif p-2 rounded-md font-bold text-2xl m-2 sm:ml-32">FOODIGY</span>
      </h1>
      <div className="foot-menu flex justify-evenly items-center sm:flex-nowrap flex-wrap m-3">
        <img
          className="address-logo h-64 hidden md:block"
          src={ADDRESS_GIF}
          alt="Address"
        />
        <div className="address text-white text-lg m-3  ">
          <ul>
            <h3>Address</h3>
            <li>Patia, Bhubaneswar</li>
            <li>Odhisha-751024</li>
            <li>India</li>
          </ul>
        </div>
        <div className="career text-black bg-yellow-400 p-7 rounded-xl m-3 hidden sm:block">
          <ul>
            <h3 className="font-bold mb-1 font-serif text-lg ">Explore Career</h3>
            <li className="hover:bg-black hover:text-white hover:cursor-pointer">- Want to be part of us.</li>
            <li className="hover:bg-black hover:text-white hover:cursor-pointer">- Current Job Openings</li>
            <li className="hover:bg-black hover:text-white hover:cursor-pointer">- Student Internship</li>
          </ul>
        </div>
      </div>

      <div className="social text-white text-center m-2">
        <h3 className="font-bold font-serif text-2xl m-2 p-2">We are Social... Connect with us :D !! </h3>
        <ul className="flex justify-center mb-2">
        <a href={VIN_GIT} target="_blank"><li className="github">
            <img className="h-12 w-12 aspect-[3/2] m-2 p-2 rounded-md hover:bg-yellow-400 hover:cursor-pointer " src={GITHUB_LOGO_URL} />
          </li></a>
          <a href={VIN_LINK} target="_blank"><li className="linked-in">
            <img className="h-12 w-12 aspect-[3/2] m-2 p-2 rounded-md hover:bg-yellow-400 hover:cursor-pointer " src={LINKED_IN_LOGO_URL} />
          </li></a>
          <a href={VIN_INSTA} target="_blank"><li className="insta">
            <img className="h-12 w-12 aspect-[3/2] m-2 p-2 rounded-md hover:bg-yellow-400 hover:cursor-pointer " src={INSTA_LOGO_URL} />
          </li></a>
          <a href={VIN_X} target="_blank"><li className="x">
            <img className="h-12 w-12 aspect-[3/2] m-2 p-2 rounded-md hover:bg-yellow-400 hover:cursor-pointer " src={X_LOGO_URL} />
          </li></a>
          {/* <li className="linkedin"><img src="https://p7.hiclipart.com/preview/496/112/893/linkedin-ico-icon-linkedin-png-hd.jpg"/></li> */}
        </ul>
      </div>
      <div className="copyright bg-gray-950 text-white text-center text-sm">
        {" "}
        ©️ 2024 - Developed by VINAMRA (Vin){" "}
      </div>
    </div>
  );
}

export default Footer;
