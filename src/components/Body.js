import Card from "./Card";
import Hero from "./Hero";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API_URL } from "../utils/constants";
import resmockdata from "../utils/ResMockData"
import useOnlineStatus from "../utils/useOnlineStatus";
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
  const [btnFilter, setBtnFilter] = useState("Top Restaurants");
  const [btnSearch, setBtnSearch] = useState("Search");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
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
}
if(ListOfRestaurant===undefined){
  setListOfRestaurant(resmockdata);
  setFilterRestaurant(resmockdata);
}
const online=useOnlineStatus();
if(online===false){
  return(<h1><center>Look's like you are not connected to the internet, Kindly check your internet connection.</center></h1>)
}
// console.log(ListOfRestaurant);

  return (
    <div >
      <Hero/>
      <h1 className="text-3xl font-semibold font-serif text-center my-3 py-3 ">Explore Our Restaurants...</h1>
      <div className="flex justify-center flex-wrap sm:flex-nowrap">
        <input
          type="text"
          className="w-96 h-9 px-3 shadow-inner shadow-slate-300 rounded-2xl border m-2"
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
          className="bg-yellow-400 px-4 mx-3 rounded-3xl text-white hover:bg-black hover:text-yellow-400 font-semibold m-2"
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
          className="bg-yellow-400 px-4 rounded-3xl text-white hover:bg-black hover:text-yellow-400 font-semibold m-2 "
          onClick={() => {
            const topres = ListOfRestaurant.filter(
              (res) => res.info.avgRating >= 4.5
            );
            if (btnFilter != "Top Restaurants") {
              setFilterRestaurant(ListOfRestaurant);
              setBtnFilter("Top Restaurants");
            } else {
              setFilterRestaurant(topres);
              setBtnFilter("Show All Restaurants");
            }
          }}
        >
          {btnFilter}
        </button>
      </div>
      <div className="m-4 flex flex-wrap justify-evenly">
        {FilterRestaurant=== undefined||FilterRestaurant.length === 0 ? (
          ListOfRestaurant === undefined && searchRestaurant.length === 0 ? (
            <Shimmer />
          ) : (
            <h1 className="font-bold text-2xl m-4 p-4 text-center">
              No matches found for "{searchRestaurant}"
            </h1>
          )
        ) : (
          FilterRestaurant?.map((resturant) => (
            <Link onClick={()=>{window.scrollTo(0, 0);}}
              key={resturant?.info?.id}
              to={"/restaurant/" + resturant?.info?.id}
            >
              <Card resData={resturant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Body;
