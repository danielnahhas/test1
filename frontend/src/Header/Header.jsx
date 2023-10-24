import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { LoginContext } from "../App";
function Header() {
  const [login, setLogin] = useContext(LoginContext);
  return (
    <div className="head">
      <Link className="button-name" to={"/"}>
        Homepage
      </Link>
      <Link className="button-name" to={"/product"}>
        Product Page
      </Link>
      {login ? (
        <Link className="button-name" to={"/cart"}>
          Cart
        </Link>
      ) : (
        <></>
      )}
      <Link className="button-name" to={"/about"}>
        About
      </Link>
      <Link className="button-name" to={"/contact"}>
        Contact Us
      </Link>
      {!login ? (
        <Link className="button-name" to={"/login"}>
          Login
        </Link>
      ) : (
        <button
          className="button-name"
          onClick={(e) => {
            e.preventDefault();
            setLogin(false);
            localStorage.removeItem("Token");
          }}
        >
          Log out
        </button>
      )}
      {login ? (
        <></>
      ) : (
        <Link className="button-name" to={"/Register"}>
          Sign up
        </Link>
      )}
    </div>
  );
}

export default Header;
