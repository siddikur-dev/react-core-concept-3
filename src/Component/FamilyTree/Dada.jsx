import React from "react";
import Abbu from "./Abbu";
import Bobba from "./Bobba";
import "./FamilyTree.css";
import Fubu from "./Fubu";

const Dada = () => {
  return (
    <>
      <h1>Dada</h1>
      <div className="tree flex">
        <Abbu></Abbu>
        <Bobba></Bobba>
        <Fubu></Fubu>
      </div>
    </>
  );
};

export default Dada;
