import Shimmer from "../Shimmer";
import RestroMenuHeader from "./RestroMenuHeader";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenuInfo from "../../utils/useRestaurantMenuInfo";
import CategoryList from "./CategoryList";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [expandIndex, setExpandIndex] = useState(0);
  const [resInfo, dishInfo, filterDishInfo, setFilterDishInfo] =
    useRestaurantMenuInfo(resId);

  if (resInfo === null) return <Shimmer />;
  const categories = dishInfo.filter(
    (c) =>
      c.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="restro-menu-container">
      <RestroMenuHeader resData={resInfo} />
      <div className="menu-design"> --- Menu ---</div>

      {categories.map((c, index) => (
        /***Controlled component and lifting the state up */
        <CategoryList
          key="index"
          data={c}
          showDishCard={index === expandIndex ? true : false}
          setExpandIndex={() => setExpandIndex(index)}
        />
      ))}

      {/***/}
    </div>
  );
};

export default RestaurantMenu;
