import React from "react";

const ProductForm = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    console.log(name, price, quantity);
    //   const objectCreate take data from onSubmit Form
    const newProduct = {
      name,
      price,
      quantity,
    };
    console.log(newProduct);
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
    </div>
  );
};

export default ProductForm;
