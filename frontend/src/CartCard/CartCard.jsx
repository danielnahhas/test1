import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from "../App";
function CartCard(props) {
  const [user] = useContext(UserContext);
  const removeCart = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/removeFromCart",
        { id: user.id, item: props.value }
      );
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <div>
      <img src={props.value.img} alt="pic"></img>
      <p>{props.value.title}</p>
      <p>{props.value.price}</p>
      <p>{props.value.details}</p>
      <button onClick={removeCart}>Remove</button>
    </div>
  );
}

export default CartCard;
