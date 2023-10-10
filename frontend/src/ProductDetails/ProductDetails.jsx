import React from "react";

function ProductDetails(props) {
  const data = props.data;
  return (
    <div>
      <h1>Products Details</h1>
      <h2>Name: {data.title}</h2>
      <img src={props.data.img} alt="pic"></img>
      <p>{data.details}</p>
      <h3>Price: {data.price}$</h3>
    </div>
  );
}

export default ProductDetails;
