import Card from "./Card";
import { useState, useEffect } from "react";
import resmockdata from "../utils/ResMockData";
import Shimmer from "./Shimmer";
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
  const [ListOfRestaurant, setListOfRestaurant] = useState(resmockdata);
  const [FilterRestaurant, setFilterRestaurant] = useState(ListOfRestaurant);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [btnFilter, setBtnFilter] = useState("Top Rated Restaurant");
  const [btnSearch, setBtnSearch] = useState("Search");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D20.3532772%26lng%3D85.8265977%26page_type%3DDESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body">
      <h1 className="title">Explore Our Restaurants...</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for your favourite Delicacies, Resturants and more..."
          id="search-bar"
          value={searchRestaurant}
          onChange={(e) => setSearchRestaurant(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              const serachResult = ListOfRestaurant.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchRestaurant.toLowerCase());
              });
              setFilterRestaurant(serachResult);
              if (searchRestaurant.length === 0) {
                setBtnSearch("Search");
              } else {
                setBtnSearch("Clear Search");
              }
            }
          }}
        ></input>
        <button
          onClick={() => {
            const serachResult = ListOfRestaurant.filter((res) =>
              res.info.name
                .toLowerCase()
                .includes(searchRestaurant.toLowerCase())
            );
            if (btnSearch === "Search" && searchRestaurant.length != 0) {
              setBtnSearch("Clear Search");
              setFilterRestaurant(serachResult);
            } else {
              setBtnSearch("Search");
              setFilterRestaurant(ListOfRestaurant);
              setSearchRestaurant("");
            }
          }}
        >
          {btnSearch}
        </button>
        <button
          className="top-restaurnt"
          onClick={() => {
            const topres = ListOfRestaurant.filter(
              (res) => res.info.avgRating >= 4.5
            );
            if (btnFilter != "Top Rated Restaurant") {
              setFilterRestaurant(ListOfRestaurant);
              setBtnFilter("Top Rated Restaurant");
            } else {
              setFilterRestaurant(topres);
              setBtnFilter("Show All Restaurant");
            }
          }}
        >
          {btnFilter}
        </button>
      </div>
      <div className="card-hold">
        {FilterRestaurant.length === 0 ? (
          (ListOfRestaurant.length === 0&& searchRestaurant.length===0) ? (
            <Shimmer />
          ) : (
            <h1 className="error-msg">
              No matches found for "{searchRestaurant}"
            </h1>
          )
        ) : (
          FilterRestaurant?.map((resturant) => (
            <Card key={resturant?.info?.id} resData={resturant} />
          ))
        )}
      </div>
    </div>
  );
}

export default Body;
