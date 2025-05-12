// AuthForm.js
import React, { useState } from "react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            SignUp
          </button>
        </div>

        {/* Form Toggle */}
        {isLogin ? (
          <div className="form">
            <h4 className="create-colour">Login Form</h4>
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="password"></input>
            <a href="#">Forgot password?</a>
            <button>Login</button>
            <p>
              Not a Member?
              <a href="#" onClick={() => setIsLogin(false)}>
                Signup Now
              </a>
            </p>
          </div>
        ) : (
          <div className="form">
            <h4>Signup Form</h4>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Username" />
            <input type="tel" placeholder="Phone" />
            <input type="date" placeholder="Date of Birth" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
          </div>
        )}
      </div>
    </div>
  );
}
