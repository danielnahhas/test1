import React, { useContext } from "react";
import { CartContext } from "../App";

function CartCard(props) {
  const [cart, setCart, addtoCart, removeCart] = useContext(CartContext);
  const value = props.value;

  return (
    <div>
      <img src={value.img} alt="pic"></img>
      <p>{value.title}</p>
      <p>{value.price}</p>
      <p>{value.details}</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          removeCart(value);
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default CartCard;
