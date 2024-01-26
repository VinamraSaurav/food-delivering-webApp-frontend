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
    // setResInfo(json_menu?.data?.cards[0]?.card?.card?.info);
    // Check if 'info' exists in cards[0]
if (json_menu?.data?.cards[0]?.card?.card?.info) {
  setResInfo(json_menu.data.cards[0].card.card.info);
}
// If 'info' doesn't exist in cards[0], check cards[2]
else if (json_menu?.data?.cards[2]?.card?.card?.info) {
  setResInfo(json_menu.data.cards[2].card.card.info);
}
    // console.log(json_menu?.data?.cards[0]?.card?.card?.info);
    // setResMenuDetails(
    //   json_menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    // );
    if (json_menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards) {
      setResMenuDetails(json_menu.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
  }
  // If 'cards' doesn't exist in cards[2], check cards[5]
  else if (json_menu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards) {
      setResMenuDetails(json_menu.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards);
  }
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
    <div className="res-Menu m-2 mx-5 p-2 ">
      <div className="res-details flex justify-around my-3 border-b-2 max-w-[370px] mx-auto sm:max-w-[700px] md:max-w-[1560px] ">
      <div className="res-info-details mx-4 mb-2">
          <div className="res-cft-time">
            <img className="res-pic " src={CDN_URL + cloudinaryImageId}></img>
            <div className="res-rating text-center font-bold font-sans p-1">⭐{avgRating}</div>
          </div>
        </div>
        <div className="res-pic-name-rate max-w-[270px] md:max-w-[500px]">
          <div className="res-menu-name-rate">
            <div className="res-name font-serif font-bold text-lg">{name}</div>
            <div className="res-loc text-sm text-gray-500">
              {locality}, {areaName}
            </div>
            <div className="res-cuisines text-sm">{cuisines?.join(", ")}</div>
            <div className="res-cft text-sm">{costForTwoMessage}</div>
            <div className="res-time text-sm mb-4">{sla?.deliveryTime} mins</div>
          </div>
        </div>
      </div>
      

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
