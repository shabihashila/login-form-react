import React, { useState } from "react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  // State variables for login form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for handling API response (for error or success messages)
  const [errorMessage, setErrorMessage] = useState("");

  // Handle login API call
  const handleLogin = async () => {
    const loginData = { email, password };

    try {
      const response = await fetch("https://localhost:44306/api/Auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error("Login failed!");
      } 

      const data = await response.json();
      console.log("Login success:", data);

      // You can redirect or handle successful login here
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

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
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#">Forgot password?</a>
            <button onClick={handleLogin}>Login</button>
            {errorMessage && (
              <p className="error">
                {errorMessage}
              </p>
            )}
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
