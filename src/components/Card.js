const Card = (props) => {
  const { resData } = props;
  const { name, image, rating, locality, cuisine, cft, cfo } = resData?.info;
  const { deliveryTime } = resData?.order;
  const { url } = resData?.info?.image;
  const { aggregate_rating } = resData?.info?.rating;
  return (
    <div className="card">
      <img alt="resturant-img" className="hotel-img" src={url} />
      <div className="res-name-rate">
        <span className="resturant-name">{name}</span>
        <span className="rating">⭐{aggregate_rating}</span>
      </div>
      <span className="res-locality">{locality.name}</span>
      <p className="resturant-cuisines">
        {cuisine.map((x) => x.name).join(", ")}
      </p>
      <div className="resturant-description">
      <span className="cfo">{cfo.text}</span>
        <span>{deliveryTime}</span>
      </div>
    </div>
  );
};

export default Card;