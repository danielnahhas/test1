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
  // const addtoCart = (item) => {
  //   axios
  //     .post("http://localhost:5000/api/addtocart", {
  //       id: user.id,
  //       item: item,
  //     })
  //     .then((response) => {
  //       setCart(response.data.user.cart);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // const removeCart = (item) => {
  //   axios
  //     .post("http://localhost:5000/api/removeFromCart", {
  //       id: user.id,
  //       item: item,
  //     })
  //     .then((response) => {
  //       setCart(response.data.cart);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // useEffect(() => {
  //   const token = localStorage.getItem("Token");
  //   if (token) {
  //     setLogin(true);
  //     axios
  //       .post("http://localhost:5000/api/getUser", { id: token })
  //       .then((response) => {
  //         setUser(response.data.user);
  //         setCart(response.data.user.cart);
  //       })
  //       .catch((error) => {
  //         console.log(error.response.data.message);
  //       });
  //   }
  // }, []);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/data")
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  const addtoCart = (item) => {
    axios
      .post("http://localhost:5000/api/addtocart", { id: user.id, item: item })
      .then((response) => {
        console.log("Add to cart response:", response.data);
        // Handle the response, update state, or perform any other actions.
        setCart(response.data.user.cart);
      })
      .catch((error) => {
        console.error("Add to cart error:", error.response.data);
        // Handle errors, display error messages, etc.
      });
  };
  const removeCart = (item) => {
    axios
      .post("http://localhost:5000/api/removeFromCart", {
        id: user.id,
        item: item,
      })
      .then((response) => {
        console.log("Remove from cart response:", response.data);
        // Handle the response, update state, or perform any other actions.
        setCart(response.data.cart);
      })
      .catch((error) => {
        console.error("Remove from cart error:", error);
        // Handle errors, display error messages, etc.
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/data")
      .then((response) => {
        // setData(response.data);
        // console.log(data);
        // console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
          console.error("Error:", error);
          // Handle errors, display error messages, etc.
        });
    }
  }, []);
  return (
    <div className="App">
      <LoginContext.Provider value={[login, setLogin]}>
        <UserContext.Provider value={[user, setUser]}>
          <CartContext.Provider value={[cart, setCart, addtoCart, removeCart]}>
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
