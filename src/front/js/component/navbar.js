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
    <div class="wrapper">
      <header>
        <nav>
          <div class="menu-icon">
            <i class="fa fa-bars fa-2x"></i>
          </div>
          <img src={logo} class="logo w-25 p-3" />
          <div class="menu">
            <div class="button-div">
              <button class="button-74">Signup</button>
              <button class="button-84">Log In</button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
