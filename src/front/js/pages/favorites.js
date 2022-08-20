import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import {
  ListGroup,
  InputGroup,
  Form,
  FormControl,
  Navbar,
  Brand,
  Container,
  Row,
  Col,
  Pagination,
} from "react-bootstrap";

export const Favorites = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const nav = useNavigate();
  // Add userID

  useEffect(() => {
    if (store.token) {
      actions.getFavorites();
      actions.getMoreStates();
    } else {
      nav("/login");
    }
  }, []);

  Favorites.propTypes = {
    match: PropTypes.object,
    loggedIn: PropTypes.bool,
    setLoggedIn: PropTypes.func,
  };

  return (
    <div className="m-5">
      <Navbar expand="lg" variant="dark" bg="dark">
        <Navbar.Brand href="#" className="mr-auto">
          Favorites
        </Navbar.Brand>
      </Navbar>
      {/* <ListGroup variant="flush"> */}
      {store.favorites.map((item, index) => {
        const state = store.basic.find(
          (elem) => elem.state === item.state_name
        );
        console.log(item, state);
        return (
          <Link to={`/state/${state.code}`}>
            <p key={index}>{item.state_name}</p>
          </Link>
        );
      })}
      {/* </ListGroup> */}
    </div>
  );
};
