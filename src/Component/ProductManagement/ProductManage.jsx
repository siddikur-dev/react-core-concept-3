import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductManage = () => {
  const [products, setProduct] = useState([]);
  const handleProducts = (newProduct) => {
    const newProducts = [...products, newProduct];
    setProduct(newProducts);
  };
  return (
    <div>
      <ProductForm handleProducts={handleProducts}></ProductForm>
      <ProductTable products={products}></ProductTable>
    </div>
  );
};

export default ProductManage;
