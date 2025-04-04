import { useState, useEffect } from "react";

const useFetchRestaurantInfo = () => {
  const [listRestro, setlistRestro] = useState([]);
  const [filterRestro, setFilterRestro] = useState([]);
  const [collectionsData, setCollectionsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    console.log("API fetched");
    const json = await data.json();

    setlistRestro(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestro(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setCollectionsData(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
  };

  return [listRestro, filterRestro, collectionsData, setFilterRestro];
};

export default useFetchRestaurantInfo;
