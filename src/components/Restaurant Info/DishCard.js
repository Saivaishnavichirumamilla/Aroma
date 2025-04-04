import { MENU_DISH } from "../../utils/constants";
import AddorRemoveItemsBtn from "./AddorRemoveItemsBtn";

const DishCard = (props) => {
  const { dishData } = props;
  const { name, defaultPrice, description, imageId, price } =
    dishData.card.info;
  const { rating, ratingCountV2 } = dishData.card.info.ratings.aggregatedRating;
  const { vegClassifier } = dishData.card.info.itemAttribute;
  let visible = true;
  if (rating == null) {
    visible = false;
  } else visible = true;
  let veg,
    nonveg = false;
  if (vegClassifier == "VEG") {
    veg = true;
    nonveg = false;
  } else {
    veg = false;
    nonveg = true;
  }

  return (
    <div className="dish-card-containter">
      <div className="dish-card-sub1">
        <div>
          {(veg && (
            <div className="veg-symbol">
              <div className="circle"></div>
            </div>
          )) ||
            (nonveg && (
              <div className="nonveg-symbol">
                <div className="triangle"></div>
              </div>
            ))}
        </div>
        <h2>{name}</h2>
        <p className="dish-price">Rs.{defaultPrice / 100 || price / 100}</p>
        {visible && (
          <p className="dish-rating">
            <span className="fa fa-star checked"></span>
            {rating}
            <span className="dish-rating-count">({ratingCountV2})</span>
          </p>
        )}

        <p class="dish-desc">{description}</p>
      </div>
      <div className="dish-card-sub2">
        <img src={MENU_DISH + imageId}></img>
        <div>
          <AddorRemoveItemsBtn dishData={dishData} />
        </div>
      </div>
    </div>
  );
};

export default DishCard;
