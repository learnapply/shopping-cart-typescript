import styled from "styled-components";
import { Product } from "../App";

interface ProductCardProps {
  name: string;
  product: Product;
  price: number;
  quantity: number;
  imgUrl: string;
  handleAddToCart: () => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    product: Product
  ) => void;
  handleRemoveFromCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  product,
  price,
  quantity,
  imgUrl,
  handleAddToCart,
  handleChange,
  handleRemoveFromCart,
}) => {
  return (
    <ProductCardWrapper>
      <img src={imgUrl} alt={name} />
      <ProductCardInfo>
        <div>
          <p>{name}</p>
          <p>
            <em>${price}/kg</em>
          </p>
        </div>
        {!quantity ? (
          <AddToCartButton onClick={handleAddToCart}>
            Add to cart
          </AddToCartButton>
        ) : (
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
      </ProductCardInfo>
    </ProductCardWrapper>
  );
};

export default ProductCard;

const ProductCardWrapper = styled.div`
  background-color: white;
  margin: 1rem;
  border: 1px solid gray;
  border-radius: 10px;
  overflow: hidden;
  margin: 8px;
  height: 350px;
  display: flex;
  flex-direction: column;
  > img {
    width: 250px;
    height: 250px;
    object-fit: cover;
  }
`;

const ProductCardInfo = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const AddToCartButton = styled.button`
  height: 32px;
  background-color: #ffffff;
  border: 1px solid #222222;
  border-radius: 8px;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  outline: none;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s,
    transform 0.1s;
  user-select: none;
  -webkit-user-select: none;
  width: auto;
  &:hover {
    background-color: #f7f7f7;
    border-color: #000000;
  }
`;

export const AdjustQuantity = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  > input {
    width: 25px;
    text-align: center;
    font-size: large;
  }
  > button {
    padding: 0.2rem 0.6rem;
    background-color: #ffffff;
    border: 1px solid #222222;
    border-radius: 8px;
    color: #222222;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    outline: none;
    text-align: center;
    text-decoration: none;
    touch-action: manipulation;
    transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s,
      transform 0.1s;
    user-select: none;
    -webkit-user-select: none;
    width: auto;
    &:active {
      background-color: #f7f7f7;
      border-color: #000000;
      transform: scale(0.96);
    }
  }
`;
