import { Product } from "../App";
import { ChangeEvent } from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";

interface ShopProps {
  products: Product[];
  handleAddToCart: (product: Product) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>, product: Product) => void;
  handleRemoveFromCart: (product: Product) => void;
}

const Shop: React.FC<ShopProps> = ({
  products,
  handleAddToCart,
  handleChange,
  handleRemoveFromCart,
}) => {
  return (
    <ShopWrapper>
      <Container>
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              imgUrl={product.src}
              handleAddToCart={() => handleAddToCart(product)}
              handleChange={handleChange}
              handleRemoveFromCart={() => handleRemoveFromCart(product)}
            />
          );
        })}
      </Container>
    </ShopWrapper>
  );
};

export default Shop;

const ShopWrapper = styled.div`
  padding: 2rem 6rem;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
