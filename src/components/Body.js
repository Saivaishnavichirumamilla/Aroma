import RestroCard from "./RestroCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import Collections from "./Collections";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchRestaurantInfo from "../utils/useFetchRestaurantInfo";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listRestro, filterRestro, collectionsData, setFilterRestro] =
    useFetchRestaurantInfo();

  {
    /* const RestaurantWithLabel = withLabel(RestroCard);*/
  }
  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) {
    return <h2>Please check your internet connection!</h2>;
  }

  if (listRestro.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body ">
      {/**Search bar */}
      <div className="search-bar ">
        <input
          className="search-input "
          type="search"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>

        {/**Search Button */}
        <button
          className="search-btn "
          onClick={() => {
            const filteredData = listRestro.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterRestro(filteredData);
          }}
        >
          Search
        </button>
      </div>

      {/**Cuisines collections bar */}
      <div className="collections-container ">
        {collectionsData.map((dish) => (
          <Collections key={dish.id} resData={dish} />
        ))}
      </div>
      <div className="restrocards-headline ">
        <p>Restuarants with online food delivery in Banglore</p>
      </div>
      <div className="filter">
        <button
          id="filter-btn"
          className="filter-btn"
          onClick={() => {
            const filterList = listRestro.filter(
              (res) => res.info.avgRating > 4.3
            );

            setFilterRestro(filterList);
          }}
        >
          Ratings 4.3+
        </button>
      </div>
      {/**Restro container which consists restro-cards */}
      <div className="restro-container ">
        {/**adding restroCard component using map function and the data is taken from array resList */}
        {filterRestro.map((restuarant) => (
          <Link
            className="no-underline text-black"
            key={restuarant.info.id}
            to={"/restaurants/" + restuarant.info.id}
          >
            <RestroCard resData={restuarant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
