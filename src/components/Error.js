import { Link } from "react-router-dom";
import {ERR_IMG} from "../utils/constants"
import { useRouteError } from "react-router-dom";
export default function Error() {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="Error-page">
      <div class="error-container">
        <img
          class="error-image"
          src={ERR_IMG}
          alt="Error Image"
        />
        <h2 className="err-msg">
        {err.status} : {err.statusText}
      </h2>
        <h1 class="error-heading">Oops! Something went wrong.</h1>
        <p class="error-message">
          We're sorry, but it seems there was an error processing your request.
        </p>
        <Link to="/" class="back-home-link">
          Back to Home
        </Link>
        
      </div>
      
    </div>
  );
}
