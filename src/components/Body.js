import resdata from "../utils/ResData";
import Card from "./Card";
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
