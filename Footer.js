function Footer() {
  return (
    <div className="footer">
      <h1 className="foot-name">
        <span className="company-name-foot">FOODIGY</span>
      </h1>
      <div className="foot-menu">
        <img
          className="address-logo"
          src="https://media.giphy.com/media/b1jT7PYHb6haRPjafP/giphy.gif"
          alt="Address"
        />
        <div className="address">
          <ul>
            <h3>Address</h3>
            <li>Patia, Bhubaneswar</li>
            <li>Odhisha-751024</li>
            <li>India</li>
          </ul>
        </div>
        <div className="career">
          <ul>
            <h3>Explore Career</h3>
            <li>- Want to be part of us.</li>
            <li>- Current Job Openings</li>
            <li>- Student Internship</li>
          </ul>
        </div>
      </div>

      <div className="social">
        <h3>We are Social... Connect with us :D !! </h3>
        <ul>
          <li className="youtube">
            <img src="https://clipart-library.com/images/dc4LABqni.png" />
          </li>
          <li className="insta">
            <img src="https://static-00.iconduck.com/assets.00/instagram-icon-256x256-tc8iic57.png" />
          </li>
          <li className="x">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png" />
          </li>
          {/* <li className="linkedin"><img src="https://p7.hiclipart.com/preview/496/112/893/linkedin-ico-icon-linkedin-png-hd.jpg"/></li> */}
        </ul>
      </div>
      <div className="copyright">
        {" "}
        ©️ 2024 - Created by VINAMRA (Vin) | All Rights Reserved{" "}
      </div>
    </div>
  );
}

export default Footer;
