import RestCard, {withOpenLabel} from "./RestCard";
import resList from "../utils/demodata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import { userContext } from "../utils/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestaurntCardOpen = withOpenLabel(RestCard);
  const {loggedInUser, setUserName} = useContext(userContext)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6691565&lng=77.45375779999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setRestaurantList(restaurants);
      setFilteredList(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterTopRated = () => {
    const filtered = filteredList.filter((restaurant) => restaurant.info.avgRating > 4);
    setRestaurantList(filtered);
  };

  const handleSearch = () => {
    const filtered = filteredList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurantList(filtered);
  };

  if (!onlineStatus) {
    return <h1>Check your connection</h1>;
  }

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="m-4">
      <div className="search-container">
        <input
          className="border-2 border-black-500 rounded-md p-2 shadow-sm"
          type="text"
          placeholder="Search.."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-button bg-slate-700 text-white p-2 mx-2 rounded-sm"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div id="filterbtn-container">
        <button
          className="filter-btn bg-slate-700 text-white p-2 rounded-sm my-2"
          onClick={filterTopRated}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div>
        <label>Username</label>
        <input 
        className="border-2 border-black p-2 mx-2 my-4"
        // value={loggedInUser}
        onChange={(e)=>setUserName(e.target.value)}        
        >
        
        </input>
      </div>
      <div className="restcard-container grid grid-cols-5 gap-7">
        {restaurantList.map((restaurant) => (
          <Link 
          to={`/restaurants/${restaurant.info.id}`} 
          key={restaurant.info.id}>


            {restaurant.info.isOpen?
            (
                <RestaurntCardOpen resInfo={restaurant}/>
            ):(
            <RestCard resInfo={restaurant} />

            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;



// filteredList is the original, unmodified dataset that remains intact after fetching the data from the API. It serves as the "source of truth" that we use for applying filters, searches, or resets.

// restaurantList is the dynamic dataset that changes depending on user interactions (like filtering or searching). It is the working list that is displayed on the UI.