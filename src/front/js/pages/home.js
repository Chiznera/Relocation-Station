import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { States } from "../component/states";
import { Card } from "../component/card";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <States></States>
      <div className="my-5">
        <h1 className="offset-2">Popular Cities</h1>

        <div className="container text-light bg-dark">
          <div className="row">
            <div className="hiddenScroll d-flex flex-row">
              City Cards Go Here
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <h1 className="offset-2">Popular Cities</h1>

        <div className="container text-light bg-dark">
          <div className="row">
            <div className="hiddenScroll d-flex flex-row">
              City Cards Go Here
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <h1 className="offset-2">Popular Cities</h1>

        <div className="container text-light bg-dark">
          <div className="row">
            <div className="hiddenScroll d-flex flex-row">
              City Cards Go Here
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <h1 className="offset-2">Popular Cities</h1>

        <div className="container text-light bg-dark">
          <div className="row">
            <div className="hiddenScroll d-flex flex-row">
              City Cards Go Here
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <h1 className="offset-2">Popular Cities</h1>

        <div className="container text-light bg-dark">
          <div className="row">
            <div className="hiddenScroll d-flex flex-row">
              City Cards Go Here
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <h1 className="offset-2">Popular Cities</h1>

        <div className="container text-light bg-dark">
          <div className="row">
            <div className="hiddenScroll d-flex flex-row">
              City Cards Go Here
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <h1 className="offset-2">Popular Cities</h1>

        <div className="container text-light bg-dark">
          <div className="row">
            <div className="hiddenScroll d-flex flex-row">
              City Cards Go Here
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <h1 className="offset-2">Popular Cities</h1>

        <div className="container text-light bg-dark">
          <div className="row">
            <div className="hiddenScroll d-flex flex-row">
              City Cards Go Here
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <h1 className="offset-2">Popular Cities</h1>

        <div className="container text-light bg-dark">
          <div className="row">
            <div className="hiddenScroll d-flex flex-row">
              City Cards Go Here
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <h1 className="offset-2">Popular Cities</h1>

        <div className="container text-light bg-dark">
          <div className="row">
            <div className="hiddenScroll d-flex flex-row">
              City Cards Go Here
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <h1 className="offset-2">Popular Cities</h1>

        <div className="container text-light bg-dark">
          <div className="row">
            <div className="hiddenScroll d-flex flex-row">
              City Cards Go Here
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
