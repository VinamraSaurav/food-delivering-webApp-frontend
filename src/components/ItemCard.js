import { CDN_URL } from "../utils/constants";
const ItemCard = (props) => {
  const { item } = props;
  const { id, name, description, imageId, price, ratings, defaultPrice } =
    item?.card?.info;

  return (
    <div className="item-card">
      <div className="name-des-price">
        <div className="item-name">{name}</div>
        <div className="des">{description}</div>
        <div className="price">₹ {price / 100 || defaultPrice / 100}</div>
        <div><span className="add-item">ADD +</span></div>
      </div>
      <div className="img-rate">
        <img className="item-img" alt={name+" Img"} src={CDN_URL + imageId} />
        <div className="ratings">⭐{ratings?.aggregatedRating?.rating||"Newly-Added"}</div>
      </div>
    </div>
  );
};

export default ItemCard;
