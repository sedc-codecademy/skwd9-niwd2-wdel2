import React from "react";
import "./Products.css";
import ProductItem from "../ProductItem/ProductItem";

const Products = (props) => {
  const products = props.products;

  const deleteProductById = (id) => {
    props.deleteProduct(id);
  };

  const likeProductById = (id) => {
    props.likeProduct(id);
  };

  return (
    <div className="products">
      {products.map((pr) => (
        <ProductItem
          key={pr.id}
          id={pr.id}
          title={pr.title}
          category={pr.category}
          description={pr.description}
          rate={pr.rating.rate}
          count={pr.rating.count}
          image={pr.image}
          onDeleteProduct={deleteProductById}
          onLikeProduct={likeProductById}
        />
      ))}
    </div>
  );
};

export default Products;
