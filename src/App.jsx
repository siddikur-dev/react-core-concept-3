import "./App.css";
import ControlledFiled from "./Component/Form/ControlledFiled/ControlledFiled";
import Form from "./Component/Form/Form";
import FormAction from "./Component/FormAction/FormAction";
import ProductManage from "./Component/ProductManagement/ProductManage";
import UncontroledForm from "./Component/UncontrolledForm/UncontroledForm";

function App() {
  return (
    <>
      <h1>React Form Hook</h1>
      {/* <Form></Form> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledFiled></ControlledFiled> */}
      {/* <UncontroledForm></UncontroledForm> */}
      <ProductManage></ProductManage>
    </>
  );
}

export default App;
