import "./footer.css";
import { assets } from "../../assets/frontend_assets/assets";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        
        <div className="footer-content-left">
            <p>
          Welcome to The Tummy Store. In this store you find all the things that
          fulfills your cravings.
        </p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tummy_store.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 &copy; The_Tummy_Store.com - All Right Reserved
      </p>
    </div>
  );
}
