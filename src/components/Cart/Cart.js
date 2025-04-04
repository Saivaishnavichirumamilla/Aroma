import { useSelector, useDispatch } from "react-redux";
import SelectedDishes from "./SelectedDishes";
import { clearCart } from "../../utils/cartSlice";
import React from "react";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);

  let totalPrice = 0;
  cart.map((d) => {
    totalPrice =
      totalPrice + (d.card.info.price / 100 || d.card.info.defaultPrice / 100);
  });
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleSubmitbtn = (e) => {
    e.preventDefault(); // Prevents page reload
    window.alert("✅ Order Placed Successfully!");
  };
  return (
    <div className="cart-container">
      <div>
        <div className="cart-msg">
          {cart.length == 0 && (
            <div>Your cart is Empty😊 add items to place the order</div>
          )}
        </div>
      </div>
      <div>
        {cart.length != 0 && (
          <button className="clearCart-btn" onClick={handleClearCart}>
            × Clear Cart
          </button>
        )}
      </div>
      <div className="cart-dishes">
        {cart.map((d) => (
          <SelectedDishes dishData={d} />
        ))}
      </div>
      <div>
        {cart.length != 0 && (
          <div className="cartPrice">
            <div className="cartPrice-name">Total Price</div>
            <div className="cartPrice-value">₹{totalPrice}</div>
          </div>
        )}
      </div>
      <div className="cartSubmit-btn">
        {cart.length != 0 && (
          <button onClick={handleSubmitbtn}>Place Order</button>
        )}
      </div>
    </div>
  );
};

export default Cart;
