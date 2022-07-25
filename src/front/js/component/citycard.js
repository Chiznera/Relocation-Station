import React from "react";

const Card = ({ img, title, link, text, func, item }) => {
  return (
    <div className="card bg-light text-dark m-3" style={{ width: "18rem" }}>
      <img
        src={img ? img : "https://placekitten.com/200/300"}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title ? title : "Placeholder Title"}</h5>
        <p className="card-text">{text}</p>
        <div className="d-flex navbar">
          <a href={link ? link : "#"} className="btn btn-primary">
            Learn More!
          </a>
          <a
            href="#"
            className="btn btn-primary"
            onClick={() => func(item, link)}
          >
            <i className="fa-regular fa-heart"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export { Card };
