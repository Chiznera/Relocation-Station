import React from "react";

const DetailComponent = ({ title, text }) => {
  return (
    <div className="card bg-light text-dark m-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title ? title : "Placeholder Title"}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export { DetailComponent };
