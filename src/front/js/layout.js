import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Jumbotron } from "./component/jumbotron";
import { SearchBar } from "./component/SearchBar";

import { CityDetails } from "./pages/citydetails";
import { States } from "./component/states";
import { Card } from "./component/card";
import { Singles } from "./pages/Singles";
import { CityCard } from "./component/cityCard";
import { UserPage } from "./pages/UserPage";
import { Favorites } from "./pages/favorites";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Jumbotron />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Singles />} path="/state/:state" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Favorites />} path="/favorites" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
