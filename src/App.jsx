import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Pages/Hero";
import Cart from "./Pages/Cart";
import Shop from "./Pages/Shop";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Checkout from "./Pages/Checkout";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Checkout" element={<Checkout />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
