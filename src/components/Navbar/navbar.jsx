import React, { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./navbar.css";
export default function Navbar() {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <video autoPlay muted loop className="logo-video">
        <source src={assets.Logo} type="video/mp4"></source>
      </video>
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
        <li onClick={()=>setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</li>
        <li onClick={()=>setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</li>
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
