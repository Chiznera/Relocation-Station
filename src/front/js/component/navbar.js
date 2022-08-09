import React from "react";
import { Link } from "react-router-dom";
import Dark from "./darkMode";
import logo from "./logo.png";

export const Navbar = () => {
  return (
    <nav>
      <Link to={"/"}>
        <img src={logo} class="logo w-25 p-3" />
      </Link>
      <div class="menu">
        <div class="button-div">
          <Link to={"/signup"}>
            <button class="button-74">Signup</button>
          </Link>
          <Link to={"/login"}>
            <button class="button-84">Log In</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
