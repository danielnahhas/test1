import React, { useContext } from "react";
import { LoginContext, UserContext, CartContext } from "../App";
import { Link } from "react-router-dom";
import axios from "axios";
function ProductDetails(props) {
  const data = props.data;
  const [login, setLogin] = useContext(LoginContext);
  const [user] = useContext(UserContext);
  const [, , addtoCart] = useContext(CartContext);

  return (
    <div>
      <h1>Products Details</h1>
      <h2>Name: {data.title}</h2>
      <img src={props.data.img} alt="pic"></img>
      <p>{data.details}</p>
      <h3>Price: {data.price}$</h3>
      {login ? (
        <button
          onClick={() => {
            addtoCart(data);
          }}
        >
          Add to Cart
        </button>
      ) : (
        <Link to={"/Login"}>Login</Link>
      )}
    </div>
  );
}

export default ProductDetails;
