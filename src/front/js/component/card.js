import React from "react";
//import IconButton from "@mui/material/IconButton";
//import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";

const Card = ({ img, title, text, link, link_text }) => {
  return (
    <div
      className="card mb-3 text-light bg-dark mx-2"
      style={{ width: "18rem" }}
    >
      <img
        src={img ? img : "https://via.placeholder.com/468"}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{title ? title : "Filter titles"}</h5>
        <div class="card-buttons">
          <p className="card-text">{text ? text : "This is filler"}</p>
          <a href={link ? link : "#"} className="btn btn-primary">
            {link_text ? link_text : "Find out more"}
          </a>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-facebook"></i>
        </div>
      </div>
    </div>
  );
};
export { Card };
