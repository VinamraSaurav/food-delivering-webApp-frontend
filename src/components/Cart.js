import { CART_CONSTRUCTION } from "../utils/constants";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div className="Cart-page mb-6">
      <div className="message text-center mb-4">
      <img
            class="construction-image w-[300px] mx-auto m-2"
            src={CART_CONSTRUCTION}
            alt="Under Construction"
          />
        <div class="construction-container">
          
          <h1 class="construction-heading text-[#e44d26] font-bold text-lg">Under Construction</h1>
          <p class="construction-message mt-2">
            We appreciate your curiosity, but we're sorry to inform you that the
            cart page is currently under construction. We are diligently working
            on it and will have it ready for you soon!
          </p>
          <p class="construction-progress mb-5">
            Thank you for your patience and understanding.
          </p>
          <Link to="/" class="back-home-link  bg-[#e44d26] w-[150px] mx-auto mb-4 px-4 py-2 text-white rounded-md">
          Back to Home
        </Link>
        </div>
      </div>
    </div>
  );
}
