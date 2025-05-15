import React, { useState } from "react";

const ProductForm = ({ handleProducts }) => {
  const [error, setError] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    console.log(name, price, quantity);
    // Price,Quantity,name
    if (name.length === 0) {
      setError("Please Provide Product Name");
      return;
    } else if (price.length <= 0 || price < 0) {
      setError("Please  Price added");
      return;
    } else if (quantity.length <= 0 || quantity < 0) {
      setError("Please Select quantity");
      return;
    } else {
      setError("");
    }
    //   const objectCreate take data from onSubmit Form
    const newProduct = {
      name,
      price,
      quantity,
    };
    handleProducts(newProduct);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="name" placeholder="Product Name" />
        <br />
        <input type="text" name="price" placeholder="Product Price" />
        <br />
        <input type="text" name="quantity" placeholder="Product quantity" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default ProductForm;
