import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, Redirect } from "react-router-dom";
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
import { CustomList } from "../component/CustomList";
import "../../styles/bookmarks.scss";

export const Bookmarks = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  // Add userID

  // useEffect(() => {
  // 	actions.getBookmarkData();
  // }, []);

  return (
    <div className="m-5">
      <Navbar expand="lg" variant="dark" bg="dark">
        <Navbar.Brand href="#" className="mr-auto">
          Bookmarks
        </Navbar.Brand>
      </Navbar>
      <ListGroup variant="flush">
        {console.log(store.bookmarkData)}
        {store.bookmarkData.length > 0 &&
          store.bookmarkData.map((city, index) => {
            return (
              <ListGroup.Item key={index} className="bg-color">
                <Link to={"/city/" + city.name}>
                  <Row className="cityList-row">
                    <Col className="pictureCol">
                      {/* <Form.Check
												inline
												name="group1"
												type={city.type}
												id={`inline-${city.type}-1`}
											/> */}
                      <img src={city.imageUrl} />
                    </Col>

                    <Col>
                      <h6>Name:</h6>
                      <p>{city.displayName}</p>
                    </Col>
                  </Row>
                </Link>
              </ListGroup.Item>
            );
          })}
      </ListGroup>
      {props.loggedIn ? "" : <Redirect to="/login" />}
    </div>
  );
};

Bookmarks.propTypes = {
  match: PropTypes.object,
  loggedIn: PropTypes.bool,
  setLoggedIn: PropTypes.func,
};
