import { CDN_URL } from "../utils/constants";
import { useState,useEffect } from "react";

const Card = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, avgRating, locality,areaName, cuisines, costForTwo,sla } = resData?.info;
  const newRating=(avgRating||"Not Rated")

    // State to manage the background color
    const [ratingColor, setRatingColor] = useState('');

    useEffect(() => {
      // Conditionally set the background color based on rating
      if (newRating < 4.1 || newRating === 'Not Rated') {
        setRatingColor('red');
      } else {
        setRatingColor('green');
      }
    }, [newRating]);
  return (
    <div className="w-[260px] m-2 border rounded-xl hover:shadow-md">
      <img alt="resturant-img" className="w-[260px] h-[150px] rounded-t-xl " src={CDN_URL+cloudinaryImageId} />
      <div className="flex justify-between mx-2 mt-2">
        <span className="w-30 line-clamp-1 font-bold font-serif">{name}</span>
        <span id="rate" style={{ background: ratingColor }}  className="px-2 rounded-xl">⭐{newRating}</span>
      </div>
      <span className="res-locality mx-2 line-clamp-1">{locality}, {areaName}</span>
      <p className="text-ellipsis overflow-hidden text-nowrap mx-2">
        {cuisines.join(", ")}
      </p>
      <div className="resturant-description mx-2 flex justify-between mb-3">
      <span className="text-gray-500 ">{costForTwo}</span>
        <span className="text-gray-500 ">{sla.slaString}</span>
      </div>
    </div>
  );
};

export default Card;