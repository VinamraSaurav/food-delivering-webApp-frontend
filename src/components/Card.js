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
    <div className="card">
      <img alt="resturant-img" className="hotel-img" src={CDN_URL+cloudinaryImageId} />
      <div className="res-name-rate">
        <span className="resturant-name">{name}</span>
        <span id="rate" style={{ background: ratingColor }}  className="rating">⭐{newRating}</span>
      </div>
      <span className="res-locality">{locality}, {areaName}</span>
      <p className="resturant-cuisines">
        {cuisines.join(", ")}
      </p>
      <div className="resturant-description">
      <span className="cfo">{costForTwo}</span>
        <span>{sla.slaString}</span>
      </div>
    </div>
  );
};

export default Card;