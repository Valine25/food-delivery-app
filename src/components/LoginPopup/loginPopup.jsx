import { useState } from "react";
import "./loginPopup.css";
import { assets } from "../../assets/frontend_assets/assets";
export default function LoginPopup({ setShowLogin }) {
  const [curState, setCurrentState] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{curState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} />
        </div>
        <div className="login-popup-input">
          {curState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Your password" required />
        </div>
        <button>{curState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing,I agree to the terms of use & privacy policy.</p>
        </div>
        {curState === "Login" ? (
          <p>
            Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}
