import React, { useContext } from "react";
import "./FamilyTree.css";
import { assetContext } from "../../App";
const Abbu = () => {
  const newAsset = useContext(assetContext);
  return (
    <div className="tree">
      <h3>Father</h3>
      <section className="flex  ">
        <p className=" tree">samiya</p>
        <p className=" tree">sabiha: {newAsset}</p>
        <p className="tree">Naim</p>
      </section>
    </div>
  );
};

export default Abbu;
