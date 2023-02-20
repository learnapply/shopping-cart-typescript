import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { products as productsArray } from "./data/products";

interface Product {
  id: number;
  price: number;
  desc: string;
  src: string;
  quantity?: number;
}

const App: React.FC = () => {
  const [cart, setCart] = useState<Product[]>(productsArray);

  function handleAddToCart(product: Product): void {
    let itemIndex = cart.findIndex((item) => item.id === product.id);
    let newCart = [...cart];
    if (newCart[itemIndex].quantity) {
      newCart[itemIndex].quantity += 1;
    } else {
      newCart[itemIndex].quantity = 1;
    }
    setCart(newCart);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>,
    product: Product
  ): void {
    let itemIndex = cart.findIndex((item) => item.id === product.id);
    let newCart = [...cart];
    newCart[itemIndex].quantity = e.target.value;
    setCart(newCart);
    console.log(cart);
  }

  function handleRemoveFromCart(product: Product): void {
    let itemIndex = cart.findIndex((item) => item.id === product.id);
    if (cart[itemIndex].quantity === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    }
    let newCart = [...cart];
    newCart[itemIndex].quantity -= 1;
    setCart(newCart);
  }

  return (
    <BrowserRouter>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop
              products={cart}
              handleAddToCart={handleAddToCart}
              handleChange={handleChange}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              handleAddToCart={handleAddToCart}
              handleChange={handleChange}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
