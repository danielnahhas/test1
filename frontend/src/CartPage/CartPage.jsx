import React, { useContext, useEffect, useState } from "react";
import { LoginContext, CartContext } from "../App";
import { Link } from "react-router-dom";
import CartCard from "../CartCard/CartCard";
function CartPage() {
  const [login] = useContext(LoginContext);
  const [cart] = useContext(CartContext);
  const [userCart, setUserCart] = useState([]);
  useEffect(() => {
    setUserCart(cart);
  }, [cart]);
  return (
    <div>
      {login ? (
        userCart.map((d, i) => {
          return <CartCard value={d} key={i} />;
        })
      ) : (
        <p>
          <Link to={"/Login"}>Login</Link>
          to view cart
        </p>
      )}
    </div>
  );
}

export default CartPage;
