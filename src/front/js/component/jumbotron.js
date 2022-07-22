import React from "react";
import { SearchBar } from "./SearchBar";
import travel from "./travel.png";

const Jumbotron = () => {
  return (
    <div
      class="p-5 text-center bg-image rounded-3"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
        height: "400px",
        width: "100%",
      }}
    >
      <div className="searchBar_Locator justify-content-center">
        <SearchBar />
      </div>
      <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}></div>
    </div>
  );
};
export { Jumbotron };
