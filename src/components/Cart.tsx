import styled from "styled-components";
import { Product } from "../App";
import CartCard from "./CartCard";

type CartProps = {
  cart: Product[];
  handleAddToCart: (product: Product) => void;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    product: Product
  ) => void;
  handleRemoveFromCart: (product: Product) => void;
};

const Cart: React.FC<CartProps> = ({
  cart,
  handleAddToCart,
  handleChange,
  handleRemoveFromCart,
}) => {
  const checkout = cart.filter((product) => product.quantity);
  const total = checkout.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <CartWrapper>
      <CardsContainer>
        {checkout.map((product) => {
          return (
            <CartCard
              key={product.id}
              product={product}
              name={product.name}
              desc={product.desc}
              price={product.price}
              quantity={product.quantity}
              imgUrl={product.src}
              handleAddToCart={() => handleAddToCart(product)}
              handleChange={handleChange}
              handleRemoveFromCart={() => handleRemoveFromCart(product)}
            />
          );
        })}
      </CardsContainer>
      {checkout.length === 0 && (
        <PleaseAddItems>
          <h1>Please add items to your cart.</h1>
        </PleaseAddItems>
      )}
      {checkout.length > 0 && (
        <CheckoutBox>
          <h3>Your total:</h3>
          <h1> ${total}</h1>
          <div>
            <label htmlFor="agreeToTerms">
              <input type="checkbox" name="agreeToTerms" id="agreeToTerms" /> {}
              Agree to terms of garlic and garlic of conduct
            </label>
            <button>CHECKOUT</button>
          </div>
        </CheckoutBox>
      )}
    </CartWrapper>
  );
};

export default Cart;

const CartWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem 0rem;
  gap: 1rem;
`;

const CheckoutBox = styled.div`
  background-color: #fff;
  padding: 1rem;
  height: 250px;
  width: 15vw;
  margin-top: 4rem;
  border: 2px solid rgb(108, 73, 118);
  border-radius: 10px;
  position: sticky;
  top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > h1 {
    font-size: 3rem;
  }
  > div {
    display: flex;
    flex-direction: column;
  }
  > button {
    margin-top: 0.5rem;
    padding: 1rem 0rem;
    justify-self: stretch;
    background-color: #ffffff;
    border: 1px solid rgb(108, 73, 118);
    border-radius: 4px;
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
      transform: scale(0.96);
      border-color: rgb(108, 73, 118);
      color: rgb(108, 73, 118);
      fill: rgb(108, 73, 118);
    }
  }
`;

const PleaseAddItems = styled.div`
  position: absolute;
  padding: 4rem;
`;