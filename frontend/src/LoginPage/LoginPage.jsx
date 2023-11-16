import React, { useContext, useState } from "react";
import axios from "axios";
import { LoginContext, UserContext, CartContext } from "../App";
import "./LoginPage.css";
function LoginPage() {
  const [users, setUsers] = useState("");
  const [pass, setPass] = useState("");
  const [, setLogin] = useContext(LoginContext);
  const [, setUser] = useContext(UserContext);
  const [, setCart] = useContext(CartContext);

  const handleuser = (e) => {
    setUsers(e.target.value);
  };
  const handlepass = (e) => {
    setPass(e.target.value);
  };
  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username: users,
        password: pass,
      });
      setLogin(true);
      setUser(response.data.user);
      setCart(response.data.user.cart);
      console.log(response.data.message);
      localStorage.setItem("Token", response.data.user.id);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <div className="login_container">
      <div className="card">
        <h4 className="title">Log In!</h4>
        <form>
          <p>
            <input
              className="input-field"
              onChange={handleuser}
              type="text"
              placeholder="username"
            />
          </p>
          <p>
            <input
              className="input-field"
              onChange={handlepass}
              type="password"
              placeholder="password"
            />
          </p>
          <button className="btn" onClick={submit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
