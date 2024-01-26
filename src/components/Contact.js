import { CONTACT_IMG } from "../utils/constants";

export default function Contact() {
  return (
    <div className="Contact-page">
      <div className="contact-me">
        <div class="contact-container border p-2 m-2 rounded-md sm:w-[500px] mx-auto text-center">
          <img class="contact-image w-28 rounded-md mx-auto" src={CONTACT_IMG} alt="Contact Us" />
          <h1 className="slogan font-serif font-bold text-lg m-2 p-2">We Are Social! Reach Out to Us</h1>

          <div class="form-container">
            <form>
              <div class="form-group flex flex-col">
                <label for="name">Your Name:</label>
                <input type="text" id="contact-name" name="name" className="border m-2 p-2" required />
                <label for="email">Your Email:</label>
                <input type="email" id="email" name="email" className="border m-2 p-2" required />
              </div>
              <div class="form-group flex flex-col">
                <label for="message">Your Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="border m-2 p-2"
                  required
                ></textarea>
              </div>
              <button type="submit" class="submit-btn w-[150px] p-2  m-2  rounded-md text-bold px-4 bg-yellow-400 text-white">
                Send Message
              </button>
            </form>
          </div>

          <p class="social-links">
            Do checkout footer, to connect with me on Social Media.
          </p>

          <p>
            I would love to hear from you! You can write me at{" "}
            <strong>vinamrasaurav1715@gmail.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
