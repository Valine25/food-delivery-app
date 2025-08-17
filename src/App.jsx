import Navbar from "./components/Navbar/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Cart from "./pages/Cart/cart";
import Order from "./pages/Place Order/order";
import Footer from "./components/Footer/footer";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup/loginPopup";
export default function App() {
const [showlogin,setShowLogin]=useState(false)

  return (
    <>
    {showlogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="App">
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
