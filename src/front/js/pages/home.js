import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { States } from "../component/states";
import { Card } from "../component/card";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store.city);
  return (
    <>
      <States />
    </>
  );
};
