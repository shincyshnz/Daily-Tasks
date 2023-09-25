import React, { useState } from "react";
import products from "../../api/product.json";
import BeforeCart from "./CardButtons/BeforeCart";
import AfterCart from "./CardButtons/AfterCart";
import "./ProductList.css";
import { useSelector } from "react-redux";

const productList = () => {
  // fetch states from redux using useSelector hook
  const { cartCount, cartList } = useSelector((state) => state.cart);

  return (
    <section className="container">
      {products.map((product, index) => (
        <div className="product-container" key={index}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>

          {cartCount > 0 ? <AfterCart /> : <BeforeCart />}
        </div>
      ))}
    </section>
  );
};

export default productList;
