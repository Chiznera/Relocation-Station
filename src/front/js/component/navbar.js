import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
export const Navbar = () => {
  let token = sessionStorage.getItem("token");
  return (
    <nav>
      <Link to={"/"}>
        <img src={logo} className="logo w-25 p-3" />
      </Link>
      <div className="menu">
        <div className="button-div">
          {!token && (
            <Link to={"/signup"}>
              <button className="button-74">Signup</button>
            </Link>
          )}
          {!token && (
            <Link to={"/login"}>
              <button className="button-84">Log In</button>
            </Link>
          )}
          {token && (
            <Link to={"/favorites"}>
              <button className="button-84">Favorites</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
