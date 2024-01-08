import { CONTACT_IMG } from "../utils/constants";

export default function Contact(){
    return(
        <div className="Contact-page">
            <div className="contact-me">
            <div class="contact-container">
    <img class="contact-image" src={CONTACT_IMG} alt="Contact Us"/>
    <h1 class="slogan">We Are Social! Reach Out to Us</h1>

    <div class="form-container">
      <form>
        <div class="form-group">
            <label for="name">Your Name:</label>
            <input type="text" id="contact-name" name="name" required/>
          <label for="email">Your Email:</label>
          <input type="email" id="email" name="email" required/>
        </div>
        <div class="form-group">
          <label for="message">Your Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" class="submit-btn">Send Message</button>
      </form>
    </div>

    <p class="social-links">
      Do checkout footer, to connect with me on Github, LinkedIN, Instagram, X.
    </p>

    <p>I would love to hear from you! You can write me at <strong>vinamrasaurav1715@gmail.com</strong></p>
  </div>
            </div>
        </div>
    )
}