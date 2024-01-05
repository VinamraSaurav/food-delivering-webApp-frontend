import Card from "./Card";
import { useState, useEffect } from "react";
import resmockdata from "../utils/ResMockData";
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
  const [ListOfRestraunt , setListOfRestraunt] = useState(resmockdata);

  useEffect(() => {
    fetchData();
  }, []);

  
  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D20.3532772%26lng%3D85.8265977%26page_type%3DDESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestraunt(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return (
    <div className="body">
      <h1 className="title">Explore Our Restaurants...</h1>
      <div className="card-hold">
        {ListOfRestraunt?.map((resturant) => (
          <Card key={resturant?.info?.id} resData={resturant} />
        )) }
      </div>
    </div>
  );
}

export default Body;
