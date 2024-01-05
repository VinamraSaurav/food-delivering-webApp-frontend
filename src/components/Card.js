import { CDN_URL } from "../utils/constants";

const Card = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, avgRating, locality,areaName, cuisines, costForTwo,sla } = resData?.info;
  return (
    <div className="card">
      <img alt="resturant-img" className="hotel-img" src={CDN_URL+cloudinaryImageId} />
      <div className="res-name-rate">
        <span className="resturant-name">{name}</span>
        <span className="rating">⭐{avgRating}</span>
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