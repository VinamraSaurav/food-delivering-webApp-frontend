import resdata from "./ResData";

const Card = (props) => {
  const { resData } = props;
  const { name, image, rating, locality, cuisine, cft, cfo } = resData?.info;
  const { deliveryTime } = resData?.order;
  const { url } = resData?.info?.image;
  const { aggregate_rating } = resData?.info?.rating;
  return (
    <div className="card">
      <img alt="resturant-img" className="hotel-img" src={url} />
      <h2 className="resturant-name">{name}</h2>
      <p className="res-locality">{locality.name}</p>
      <h3 className="resturant-cusines">
        {cuisine.map((x) => x.name).join(", ")}
      </h3>
      <div className="cf">
        <span className="cft">{cft.text}</span>
        <span className="cfo">{cfo.text}</span>
      </div>
      <div className="restruant-description">
        <span>ETA : {deliveryTime}</span>
        <span className="rating">⭐ : {aggregate_rating}</span>
      </div>
    </div>
  );
};

/**
 * Key are used when ever we use map function as 
 * if new element is added in between React does not have to
 * re-render the elements again, as it can identify elements uniquely
 * 
 * use id as key
 * 
 * Incase, no id provided by data, use index(array index) as id
 * 
 * syntax to use index as id
 *
 * map(element, element's index in arrray)
 * key = map function ka second element
 * 
 * Using an ID as key(Best Practice) >>> Using Index as key (worst case if no key present) >>> no key(raises a warning, should be avoided).
 */
function Body() {
  return (
    <div className="body">
      <h1 className="title">Explore Our Resturants...</h1>
      <div className="card-hold">
        {resdata.map((resturant) => (
          <Card key={resturant.info.resId} resData={resturant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
