import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../utils/cartSlice";

const SelectedDishes = (props) => {
  const { dishData } = props;
  const dispatch = useDispatch();
  const { name, defaultPrice, price } = dishData.card.info;

  const { vegClassifier } = dishData.card.info.itemAttribute;

  const handleClick = () => {
    dispatch(removeItem(dishData.card.info.id));
  };
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
    <div className="selectedDish-card-containter">
      <div className="selectedDish-card-sub1">
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
      </div>

      <div className="selectedDish-card-sub2">
        <div>
          <p className="selectedDish-price">
            ₹{defaultPrice / 100 || price / 100}
          </p>
        </div>
      </div>
      <div className="selectedDish-card-sub3">
        <button onClick={handleClick}>X</button>
      </div>
    </div>
  );
};

export default SelectedDishes;
