import React from "react";
import { Link } from "react-router-dom";
import "./CardProduct.css";
function CardProduct(props) {
  return (
    <div className="cards">
      <p>
        <img src={props.data.img} alt="pic"></img>
      </p>
      <p>{props.data.id}</p>
      <p>
        <span>Description: {props.data.title}</span>
      </p>
      <p>
        <span>Description: {props.data.details}</span>
      </p>
      <span>Price: {props.data.price}$</span>
      <p>
        <Link to={props.data.url}>Details</Link>
      </p>
    </div>
  );
}

export default CardProduct;
