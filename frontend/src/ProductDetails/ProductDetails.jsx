import React, { useContext } from "react";
import { LoginContext, UserContext } from "../App";
import { Link } from "react-router-dom";
import axios from "axios";
function ProductDetails(props) {
  const data = props.data;
  const [login, setLogin] = useContext(LoginContext);
  const [user] = useContext(UserContext);
  const addtoCart = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/addtocart", {
        id: user.id,
        item: data,
      });
      console.log(response.data.message);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <div>
      <h1>Products Details</h1>
      <h2>Name: {data.title}</h2>
      <img src={props.data.img} alt="pic"></img>
      <p>{data.details}</p>
      <h3>Price: {data.price}$</h3>
      {login ? (
        <button onClick={addtoCart}>Add to Cart</button>
      ) : (
        <Link to={"/Login"}>Login</Link>
      )}
    </div>
  );
}

export default ProductDetails;
