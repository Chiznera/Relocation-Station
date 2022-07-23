import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

export const Navbar = () => {
  $(document).ready(function () {
    $(".menu-icon").on("click", function () {
      $("nav ul").toggleClass("showing");
    });
  });

  // Scrolling Effect

  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $("nav").addClass("black");
    } else {
      $("nav").removeClass("black");
    }
  });
  return (
    <div className="wrapper">
      <header>
        <nav>
          <div className="menu-icon">
            <i className="fa fa-bars fa-2x"></i>
          </div>
          <img src={logo} className="logo w-25 p-3" />
          <div className="menu">
            <div className="button-div">
              <button className="button-74">Signup</button>
              <button className="button-84">Log In</button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
