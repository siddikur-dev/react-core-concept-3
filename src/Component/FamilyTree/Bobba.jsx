import React, { useContext } from "react";
import "./FamilyTree.css";
import { moneyContext } from "../../App";

const Bobba = () => {
  const [money, setMoney] = useContext(moneyContext);

  return (
    <div className="tree">
      <h3>Bobba</h3>
      <section className="flex">
        <p className=" tree">nahid</p>
        <button onClick={() => setMoney(money + 1000)} className="tree">
          add 1k bdt
        </button>
      </section>
    </div>
  );
};

export default Bobba;
