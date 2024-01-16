import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import MenuSectionCard from "./MenuSectionCard";
import { SWIGGY_MENU_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer"

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState({});
  const [resMenuDetails, setResMenuDetails] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menu = await fetch(SWIGGY_MENU_API_URL + resId);
    const json_menu = await menu.json();
    // console.log(json_menu);
    setResInfo(json_menu?.data?.cards[0]?.card?.card?.info);
    // console.log(json_menu?.data?.cards[0]?.card?.card?.info);
    setResMenuDetails(
      json_menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
    // console.log(
    //   json_menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    // );
  };

  const {
    name,
    cloudinaryImageId,
    locality,
    areaName,
    costForTwoMessage,
    cuisines,
    avgRating,
    sla,
  } = resInfo;

  return (
    <div className="res-Menu">
      <div className="res-details">
      <div className="res-info-details">
          <div className="res-cft-time">
            <img className="res-pic" src={CDN_URL + cloudinaryImageId}></img>
            <div className="res-rating">⭐{avgRating}</div>
          </div>
        </div>
        <div className="res-pic-name-rate">
          <div className="res-menu-name-rate">
            <div className="res-name">{name}</div>
            <div className="res-loc">
              {locality}, {areaName}
            </div>
            <div className="res-cuisines">{cuisines?.join(", ")}</div>
            <div className="res-cft">{costForTwoMessage}</div>
            <div className="res-time">{sla?.deliveryTime} mins</div>
          </div>
        </div>
      </div>
      <hr />

      <div className="section-card">
        {(resMenuDetails===undefined ||resMenuDetails.length===0)?<Shimmer/>:(resMenuDetails.slice(1).map((e, i) => (
          <MenuSectionCard key={i} resSec={e} />
        )))}
        <hr />
      </div>
    </div>
  );
};

export default RestaurantMenu;
