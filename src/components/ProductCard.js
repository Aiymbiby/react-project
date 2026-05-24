import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;