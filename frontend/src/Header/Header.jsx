import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { LoginContext } from "../App";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "0",
  right: "0",
  width: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexWrap: "wrap",
  minHeigth: "100vh",
};
function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [login, setLogin] = useContext(LoginContext);
  const [width, setWidth] = useState(1920);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);

  return (
    <>
      {width > 768 ? (
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
      ) : (
        <div>
          <Button onClick={handleOpen}>Click</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
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
            </Box>
          </Modal>
        </div>
      )}
    </>
  );
}

export default Header;
