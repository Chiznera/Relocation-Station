import React from "react";
import { Link } from "react-router-dom";

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
          <div class="logo">LOGO</div>
          <div class="menu text-warning">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};
