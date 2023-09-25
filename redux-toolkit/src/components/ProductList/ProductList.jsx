import React from "react";
import products from "../../api/product.json";
import "./ProductList.css";
import { useSelector } from "react-redux";
import { CartButton } from "..";
import cart from "../../redux/cart";

const productList = () => {
  // fetch states from redux using useSelector hook
  const { cartList } = useSelector((state) => state.cart);
  console.log(cartList);
  return (
    <section className="container">
      {products.map((product, index) => (
        <div className="product-container" key={index}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>

          <CartButton product={product} />
        </div>
      ))}
    </section>
  );
};

export default productList;
