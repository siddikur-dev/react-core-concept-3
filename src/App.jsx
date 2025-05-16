import { createContext, useState } from "react";
import "./App.css";
import Dada from "./Component/FamilyTree/Dada";
import ControlledFiled from "./Component/Form/ControlledFiled/ControlledFiled";
import Form from "./Component/Form/Form";
import FormAction from "./Component/FormAction/FormAction";
import ProductManage from "./Component/ProductManagement/ProductManage";
import UncontroledForm from "./Component/UncontrolledForm/UncontroledForm";
export const moneyContext = createContext("");
export const assetContext = createContext("");

const asset = "gold";
const newAsset = "diamond";
function App() {
  const [money, setMoney] = useState(0);
  return (
    <>
      <h1>React Form Hook</h1>
      <h2>{money}</h2>
      {/* <Form></Form> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledFiled></ControlledFiled> */}
      {/* <UncontroledForm></UncontroledForm> */}
      {/* <ProductManage></ProductManage> */}
      <moneyContext.Provider value={[money, setMoney]}>
        <assetContext.Provider value={newAsset}>
          <Dada asset={asset}></Dada>
        </assetContext.Provider>
      </moneyContext.Provider>
    </>
  );
}

export default App;
