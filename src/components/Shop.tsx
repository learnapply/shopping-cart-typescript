import { Product } from "../App";
import { ChangeEvent } from "react";
import ProductCard from "./ProductCard";

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
    <div className="product-card-container">
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
    </div>
  );
};

export default Shop;
