import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../utils/cartSlice";

const AddorRemoveItemsBtn = (props) => {
  const { dishData } = props;
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    if (count == 0) {
      handleAddClick();
    }
  };
  const handleAddClick = () => {
    setCount(count + 1);
    dispatch(addItem(dishData));
  };
  const handleRemoveClick = () => {
    setCount(count - 1);
    dispatch(removeItem(dishData.card.info.id));
  };
  return (
    <div>
      <div className="btn-class">
        <button onClick={handleClick} className="main-btn">
          {clicked && count != 0 ? (
            <div className="btn-container">
              <div>
                <button className="sub-btn" onClick={handleRemoveClick}>
                  -
                </button>
              </div>

              <div>{count}</div>
              <div>
                <button className="sub-btn" onClick={handleAddClick}>
                  +
                </button>
              </div>
            </div>
          ) : (
            count == 0 && "ADD"
          )}
        </button>
      </div>
    </div>
  );
};

export default AddorRemoveItemsBtn;
