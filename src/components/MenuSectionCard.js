// import React, { useRef } from "react";
import ItemCard from "./ItemCard";
import { ChevronDown, ChevronUp } from "react-feather";

const MenuSectionCard = (props) => {
  const { resSec, showItem, setShowIndex } = props;
  const { title, itemCards } = resSec?.card?.card;
 // Create a ref for the div to scroll to

  const handleClick = () => {
    setShowIndex();
    // Scroll to the div when clicked
    // itemRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="menu-sec border-x-2 border-2 border-gray-100 max-w-[370px] mx-auto sm:max-w-[700px] md:max-w-[1024px] m-2" 
    >
      <div className="font-bold font-serif text-2xl m-3 flex justify-between px-2 mx-auto hover:cursor-pointer"
      onClick={handleClick}>
        <div className="flex gap-2">
          {title}
          <span className="hidden md:flex">({itemCards.length})</span>
        </div>
        <div className="flex items-center">{showItem ? <ChevronUp /> : <ChevronDown />}</div>
      </div>

      <div> {/* Assign the ref to the div */}
        {showItem && itemCards?.map((i) => <ItemCard key={i?.card?.info?.id} item={i} />)}
      </div>
    </div>
  );
};

export default MenuSectionCard;
