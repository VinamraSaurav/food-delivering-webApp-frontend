import { CDN_URL } from "../utils/constants";
const ItemCard = (props) => {
  const { item } = props;
  const { id, name, description, imageId, price, ratings, defaultPrice } =
    item?.card?.info;

  return (
    <div className="item-card flex border p-2 m-2 rounded-md hover:shadow-lg justify-between max-w-[370px] mx-auto sm:max-w-[700px] md:max-w-[1024px]">
      <div className="name-des-price max-w-[370px] mx-auto sm:max-w-[700px] md:max-w-[1560px]">
        <div className="item-name font-bold font-serif m-2 mb-0">{name}</div>
        <div className="des text-gray-500 m-2 mt-0 text-sm line-clamp-2 sm:block w-40 sm:w-[530px] md:w-[780px]">{description}</div>
        <div className="price font-bold m-2">₹ {price / 100 || defaultPrice / 100}</div>
        <div><span className="add-item bg-yellow-400 p-1 px-2 rounded-xl m-2 hover:cursor-pointer border">ADD +</span></div>
      </div>
      <div className="img-rate p-2">
        <img className="item-img m-2  w-28 rounded-md" alt={name+" Img"} src={CDN_URL + imageId} />
        <div className="ratings font-bold text-center m-2 ">⭐{ratings?.aggregatedRating?.rating||"Newly-Added"}</div>
      </div>
    </div>
  );
};

export default ItemCard;
