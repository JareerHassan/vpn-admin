import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from "react-icons/fa";

export function LoginForm() {
  const [error, setError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const staticEmail = "admin@gmail.com";
    const staticPassword = "admin@gmail.com";

    if (email === staticEmail && password === staticPassword) {
      const token = "food123";
      localStorage.setItem("food123", token);
      navigate("/admin/dashboard");
    } else {
      setError("Invalid credentials, please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
     background: "var(--custom-gradient)",
      }}
    >
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome  👋
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Please enter your credentials to login
        </p>

        {error && (
          <div className="text-red-500 text-sm text-center mb-4 font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="email"
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none transition duration-200"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="Password"
              className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none transition duration-200"
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white fs-5 mt-4 font-semibold py-2.5 rounded-xl shadow-md transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
