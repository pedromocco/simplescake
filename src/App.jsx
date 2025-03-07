import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Products/Product"
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
