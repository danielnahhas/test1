import React, { useContext, useState } from "react";
import axios from "axios";
import { LoginContext, UserContext } from "../App";
function LoginPage() {
  const [users, setUsers] = useState("");
  const [pass, setPass] = useState("");
  const [login, setLogin] = useContext(LoginContext);
  const [user, setUser] = useContext(UserContext);

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
      console.log(response.data.message);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <p>
        <input onChange={handleuser} type="text" placeholder="username" />
      </p>
      <p>
        <input onChange={handlepass} type="password" placeholder="password" />
      </p>
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default LoginPage;
