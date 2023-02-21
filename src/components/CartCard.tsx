import React from "react";
import styled from "styled-components";
import { AdjustQuantity } from "./ProductCard";

interface CartCardProps {
  name: string;
  desc: string;
  product: any;
  price: number;
  quantity: number;
  imgUrl: string;
  handleAddToCart: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, product: any) => void;
  handleRemoveFromCart: () => void;
}

const CartCard = ({
  name,
  desc,
  product,
  price,
  quantity,
  imgUrl,
  handleAddToCart,
  handleChange,
  handleRemoveFromCart,
}: CartCardProps) => {
  return (
    <CartCardWrapper>
      <img src={imgUrl} alt={name} />
      <CartCardInfo>
        <ProductInfo>
          <h3>{name}</h3>
          <p>
            <em>${price}/kg</em>
          </p>
          <p>{desc}</p>
        </ProductInfo>
        {!quantity ? null : (
          <AdjustQuantity>
            <button onClick={handleRemoveFromCart}>-</button>
            <input
              type="text"
              name="quantity"
              id="quantity"
              value={quantity}
              onChange={(e) => handleChange(e, product)}
            />
            <button onClick={handleAddToCart}>+</button>
          </AdjustQuantity>
        )}
      </CartCardInfo>
    </CartCardWrapper>
  );
};

export default CartCard;

const CartCardWrapper = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid gray;
  border-radius: 10px;
  width: 60vw;
  padding-right: 1rem;
  height: 175px;
  > img {
    margin: 16px;
    float: left;
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: 1px solid gray;
    border-radius: 10px;
  }
`;

const CartCardInfo = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: flex-start;
  gap: 8px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
