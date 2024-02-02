import { CDN_URL } from "../utils/constants";
const ItemCard = (props) => {
  const { item } = props;
  const { id, name, description, imageId, price, ratings, defaultPrice } =
    item?.card?.info;

  return (
    <div className="item-card flex border-y-2 p-2 hover:shadow-lg justify-between max-w-[370px] mx-auto sm:max-w-[700px] md:max-w-[1024px]">
      <div className="name-des-price w-9/12 sm:w-10/12 mx-auto ">
        <div className="item-name font-bold font-serif m-2 mb-0">{name}</div>
        <div className="des text-gray-500 m-2 mt-0 text-sm line-clamp-2 sm:block ">{description}</div>
        <div className="price font-bold m-2">₹ {price / 100 || defaultPrice / 100}</div>
        <div><span className="add-item bg-yellow-400 p-1 px-2 rounded-xl m-2 hover:cursor-pointer border">ADD +</span></div>
      </div>
      <div className="img-rate px-2 w-3/12 sm:w-2/12 flex flex-col items-center">
        <img className="item-img m-2  w-auto mx-auto rounded-md" alt={name+" Img"} src={CDN_URL + imageId} />
        <div className="ratings font-bold text-center m-2 line-clamp-2 overflow-hiddern">⭐{ratings?.aggregatedRating?.rating||"Newly-Added"}</div>
      </div>
    </div>
  );
};

export default ItemCard;
