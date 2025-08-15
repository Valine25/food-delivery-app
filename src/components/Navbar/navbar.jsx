import React, { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [menu, setMenu] = useState("home");

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
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button className="navbar-button">Sign In</button>
      </div>
    </div>
  );
}
