import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header.jsx";
import HomePage from "./HomePage/HomePage";
import ProductPage from "./ProductPage/ProductPage";
import CartPage from "./CartPage/CartPage.jsx";
import AboutUs from "./AboutUs/AboutUs";
import ContactPage from "./ContactPage/ContactPage";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails/ProductDetails";
export const LoginContext = React.createContext();
export const UserContext = React.createContext();
export const CartContext = React.createContext();
function App() {
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(false);
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      setLogin(true);
      axios
        .post("http://localhost:5000/api/getUser", { id: token })
        .then((response) => {
          setUser(response.data.user);
          setCart(response.data.user.cart);
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
    }
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <LoginContext.Provider value={[login, setLogin]}>
        <UserContext.Provider value={[user, setUser]}>
          <CartContext.Provider value={[cart]}>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product" element={<ProductPage data={data} />} />
                {data.map((e, i) => {
                  return (
                    <Route
                      key={i}
                      path={e.url}
                      element={<ProductDetails data={e} />}
                    />
                  );
                })}
                <Route path="/cart" element={<CartPage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/Register" element={<RegisterPage />} />
              </Routes>
            </BrowserRouter>
          </CartContext.Provider>
        </UserContext.Provider>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
