import { Link } from "react-router-dom";
import {ERR_IMG} from "../utils/constants"
import { useRouteError } from "react-router-dom";
export default function Error() {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="Error-page flex justify-center text-center items-center h-[500px] my-auto mt-[90px] ">
      <div class="error-container">
        <img
          class="error-image w-[320px] mx-auto m-2 "
          src={ERR_IMG}
          alt="Error Image"
        />
        <h2 className="err-msg font-bold m-2">
        {err.status} : {err.statusText}
      </h2>
        <h1 class="error-heading text-[#e44d26] font-semibold text-xl">Oops! Something went wrong.</h1>
        <p class="error-message m-2 p-2">
          We're sorry, but it seems there was an error processing your request.
        </p>
        <Link to="/" class="back-home-link bg-[#e44d26] w-[150px] mx-auto m-2 px-4 py-2 text-white rounded-md">
          Back to Home
        </Link>
        
      </div>
      
    </div>
  );
}
