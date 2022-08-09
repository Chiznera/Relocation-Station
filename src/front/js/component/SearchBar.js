import React from "react";

const SearchBar = () => (
  <form action="/state/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden">Search blog posts</span>
    </label>
    <input type="text" id="header-search" placeholder="Search" name="s" />
    <button type="submit">Search</button>
  </form>
);

export { SearchBar };
