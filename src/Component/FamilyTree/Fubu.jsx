import React, { useContext } from "react";
import "./FamilyTree.css";
import { moneyContext } from "../../App";
const Fubu = () => {
  const [money, setMoney] = useContext(moneyContext);
  return (
    <div className="tree">
      <h3>Fubu</h3>
      <section className=" flex">
        <p className=" tree">Japsha</p>
        <button onClick={() => setMoney(money + 500)} className=" tree">
          500 bdt
        </button>
      </section>
    </div>
  );
};

export default Fubu;
