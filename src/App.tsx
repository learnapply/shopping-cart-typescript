import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Shop from "./components/Shop"
import Cart from "./components/Cart"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App