import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { DetailComponent } from "../component/detailcomponent";

const CityDetails = (props) => {
  const { store, actions } = useContext(Context);
  const { catagory, id } = useParams();

  return (
    <div className="container text-light bg-dark">
      <div className="card-header">
        <h1 className="card-title text-warning">
          {props.state ? props.state : "This is filler"}
        </h1>
        {/* <div className="card-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut
          sagittis leo, nec rhoncus nulla. Etiam quis ligula sit amet libero
          aliquam bibendum. Sed ut orci aliquam, blandit ante a, egestas eros.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Cras maximus tortor eu arcu molestie
          pellentesque. In cursus arcu odio, eu pellentesque augue semper ut.
          Nulla condimentum nisi sapien, quis scelerisque ante dapibus nec.
          Fusce sed sagittis neque. Aenean cursus commodo leo, viverra malesuada
          diam pharetra eu. In vehicula elit sed ex molestie volutpat.
        </div> */}
      </div>
      <div className="d-flex justify-content-evenly">
        <DetailComponent title={props.text1} />
        <DetailComponent title={props.text2} />
        <DetailComponent title={props.text3} />
      </div>
      {/* <div className="imgSize pt-2">
        <img
          src={props.img ? props.img : "https://via.placeholder.com/600/400"}
          className="stateImg"
          alt="..."
        />
      </div> */}
    </div>
  );
};

export { CityDetails };
