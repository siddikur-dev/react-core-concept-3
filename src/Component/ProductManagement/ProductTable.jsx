import React from "react";
import Table from "./Table";

const ProductTable = ({ products }) => {
  return (
    <div>
      {products.map((product, i) => (
        <Table product={product} i={i} key={i + 2}></Table>
      ))}
    </div>
  );
};

export default ProductTable;
