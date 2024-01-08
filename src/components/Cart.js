import { CART_CONSTRUCTION } from "../utils/constants";

export default function Cart(){
    return(
        <div className="Cart-page">
            <div className="message">
            <div class="construction-container">
    <img class="construction-image" src={CART_CONSTRUCTION} alt="Under Construction"/>
    <h1 class="construction-heading">Under Construction</h1>
    <p class="construction-message">
      We appreciate your curiosity, but we're sorry to inform you that the cart page is currently under construction. 
      We are diligently working on it and will have it ready for you soon!
    </p>
    <p class="construction-progress">
      Thank you for your patience and understanding.
    </p>
  </div>
            </div>
        </div>
    )
}