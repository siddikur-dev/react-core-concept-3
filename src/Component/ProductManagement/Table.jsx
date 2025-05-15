import React from "react";

const Table = ({ product, i }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>No:</th>
          <th>Name:</th>
          <th>Price:</th>
          <th>Quantity:</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{i}</td>
          <td>{product.price}</td>
          <td>{product.quantity}</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
