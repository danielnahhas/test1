import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <Link to={"/"}>Homepage</Link>
      <Link to={"/product"}>Product Page</Link>
      <Link to={"/cart"}>Cart</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact Us</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/Register"}>Sign up</Link>
    </div>
  );
}

export default Header;
