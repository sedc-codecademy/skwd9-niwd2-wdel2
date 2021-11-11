import React from "react";
import "./ProductItem.css";

const ProductItem = (props) => {
  return (
    <div className="product-card">
      <img src={props.image} alt="" />
      <div className="product-header">
        <div className="product-title">{props.title}</div>
        <div className="product-category">{props.category}</div>
      </div>
      <div className="product-content">
        <div className="product-description">{props.description}</div>
        <div className="product-rating">
          <p className="rating-rate">{props.rate}</p>
          <p className="rating-count">{props.count}</p>
        </div>
      </div>
      <div className="product-actions">
          <button className="btn">Like</button>
          <button className="btn">Delete</button>
      </div>
    </div>
  );
};

export default ProductItem;
