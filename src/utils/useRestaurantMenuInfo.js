import { useState, useEffect } from "react";
import { RESTROMENU_URL } from "./constants";
const useRestaurantMenuInfo = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [dishInfo, setDishInfo] = useState(null);
  const [filterDishInfo, setFilterDishInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RESTROMENU_URL + resId);
    console.log("restMenu API fetched");
    const json = await data.json();

    setResInfo(json?.data);

    setDishInfo(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
    setFilterDishInfo(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  };
  return [resInfo, dishInfo, filterDishInfo, setFilterDishInfo];
};

export default useRestaurantMenuInfo;
