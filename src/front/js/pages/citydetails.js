import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { DetailComponent } from "../component/detailcomponent";

const CityDetails = () => {
  const { store, actions } = useContext(Context);
  const { catagory, id } = useParams();

  useEffect(() => {
    // actions.getPlanets();
  }, []);

  return (
    <div className="container text-light bg-dark">
      <div className="container text-light bg-dark d-flex">
        <img
          src="https://placekitten.com/200/300"
          className="img-thumbnail"
          alt="..."
        />
        <div className="card-header">
          <div className="card-title">Miami, FL</div>
          <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut
            sagittis leo, nec rhoncus nulla. Etiam quis ligula sit amet libero
            aliquam bibendum. Sed ut orci aliquam, blandit ante a, egestas eros.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Cras maximus tortor eu arcu molestie
            pellentesque. In cursus arcu odio, eu pellentesque augue semper ut.
            Nulla condimentum nisi sapien, quis scelerisque ante dapibus nec.
            Fusce sed sagittis neque. Aenean cursus commodo leo, viverra
            malesuada diam pharetra eu. In vehicula elit sed ex molestie
            volutpat.
          </div>
        </div>
      </div>
      <div className="d-flex">
        <DetailComponent title="Population (2020)" text={`461,080 people`} />
        <DetailComponent
          title="Elevation"
          text={`6.562 Feet Above Sea Level`}
        />
        <DetailComponent
          title="Public Transportation Methods"
          text={`Metrorail, Bus`}
        />
        <DetailComponent
          title="Typical Temperature Range"
          text={`62°F to 90°F`}
        />
        <DetailComponent
          title="Inclement Weather"
          text={`Thunder Storms, Hurricanes`}
        />
        <DetailComponent
          title="Cost of Living"
          text={`+23.1% Higher Than National Average`}
        />
      </div>
    </div>
  );
};

export { CityDetails };
