import React, { useMemo } from "react";
import AfterCart from "./AfterCart";
import BeforeCart from "./BeforeCart";
import { useSelector } from "react-redux";

const CartButton = ({ product }) => {
  const { cartList } = useSelector((state) => state.cart);

  // In future if the array become so large every time cartList is changed, re rendered which is expense so we use  useMemo

  // const cartCount = cartList?.find((item) => item?.id === product.id)?.count;

  const cartCount = useMemo(()=>{
    return cartList?.find((item) => item?.id === product.id)?.count;
  },[cartList])

  return (
    <>{cartCount > 0 ? <AfterCart productID = {product?.id} cartCount={cartCount}/> : <BeforeCart product={product} />}</>
  );
};

export default CartButton;
