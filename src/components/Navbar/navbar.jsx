import React, { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./navbar.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/storeContext";
export default function Navbar({setShowLogin}) {
  const [menu, setMenu] = useState("home");
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <div className="navbar">
      <video autoPlay muted loop className="logo-video">
        <source src={assets.Logo} type="video/mp4"></source>
      </video> 
      <ul className="navbar-menu">
        <Link to="/" onClick={()=>setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" />
        <div className="navbar-search-icon">
         <Link to="/cart"> <img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button className="navbar-button" onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
}
