import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import Loader from "../components/Loader";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("email", form.email);
      formData.append("password", form.password);

      const res = await fetch("https://apitest.softvencefsd.xyz/api/login", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("login response:", data);

      if (res.ok) {
        setMessage("✅ Login successful!");
        // Save token if API provides it
        if (data.token) {
          localStorage.setItem("authToken", data.token);
        }
        // Redirect to dashboard/home
        setTimeout(() => navigate("/"), 1500);
      } else {
        setMessage("❌ " + (data.message || "Invalid credentials"));
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Logo */}
      <img src="./public/business-logo.png" alt="logo" className="h-10 mb-6" />

      <div className="w-full max-w-md bg-white rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Welcome to ScapeSync
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Please share your login details so you can access the website.
        </p>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email address"
            required
            className="w-full px-3 py-2 border rounded-lg"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full px-3 py-2 border rounded-lg pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-500"
            >
              {showPassword ? <IoEye /> : <IoMdEyeOff />}
            </button>
          </div>

          {/* Options */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-green-600" /> Remember me
            </label>
            <Link to="/forgot-password" className="text-green-600">
              Forgot password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        {/* Message */}
        {message && <p className="mt-4 text-center text-sm">{message}</p>}

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Button */}
        <button
          onClick={() => alert("Google Login not implemented yet")}
          className="w-full py-3 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Log in with Google
        </button>

        {/* Footer */}
        <p className="text-center mt-6 text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-green-600 font-medium">
            Get started
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;