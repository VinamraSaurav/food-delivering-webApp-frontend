import { CDN_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const Card = (props) => {
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    avgRating,
    locality,
    areaName,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info;
  const newRating = avgRating.toFixed(1) || "Not Rated";

  // State to manage the background color
  const [ratingColor, setRatingColor] = useState("");

  useEffect(() => {
    // Conditionally set the background color based on rating
    if (newRating < 4.1 || newRating === "Not Rated") {
      setRatingColor("red");
    } else {
      setRatingColor("#178b3f");
    }
  }, [newRating]);
  return (
    <div className="sm:w-[260px] sm:m-2 border rounded-xl hover:shadow-xl flex m-1 w-[320px] sm:block">
      <img
        alt="resturant-img"
        className="sm:w-[260px] sm:h-[150px] sm:rounded-t-xl w-[100px] rounded-l-md"
        src={CDN_URL + cloudinaryImageId}
      />
      <div >
        <div className="sm:flex block justify-between mx-2 mt-2">
          <span className="line-clamp-1 font-bold font-serif">{name}</span>
          <span
            id="rate"
            // style={{ background: ratingColor }}
            className="px-2 rounded-xl hidden sm:block" 
          >
            ⭐{newRating}
          </span>
        </div>
        <span className="res-locality mx-2 line-clamp-1 text-gray-600 text-sm">
          {locality}, {areaName}
        </span>
        <p className="mx-2 text-md text-gray-600 text-sm line-clamp-1">
          {cuisines.join(", ")}
        </p>
        <div className="resturant-description mx-2 flex justify-between mb-3 w-[200px] sm:w-auto text-md font-[poppins]">
          <span className="text-gray-500 ">{costForTwo}</span>
          <span className="text-gray-500 hidden sm:block">{sla.slaString}</span>
          <span
            id="rate"
            // style={{ background: ratingColor }}
            className="px-2 rounded-xl block sm:hidden" 
          >
            ⭐{newRating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
