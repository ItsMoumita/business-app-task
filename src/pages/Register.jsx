
import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import Loader from "../components/Loader";
import { IoEye} from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setMessage("❌ Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("first_name", form.firstName);
      formData.append("last_name", form.lastName);
      formData.append("email", form.email);
      formData.append("password", form.password);
      formData.append("password_confirmation", form.confirmPassword);

      const res = await fetch("https://apitest.softvencefsd.xyz/api/register", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        navigate("/verify", { state: { email: form.email } }); // pass email
      } else {
        setMessage("❌ " + (data.message || Object.values(data.errors || {}).flat().join(", ")));
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Logo */}
      <img src="/business-logo.png" alt="Logo" className="h-10 mb-6" />

      <div className="w-full max-w-md bg-white rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-center text-gray-900">Create your Account</h2>
        <p className="text-center text-gray-500 mb-8">When sports Meets smart Tech.</p>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* First + Last */}
          <div className="flex gap-3">
            <input type="text" name="firstName" value={form.firstName} onChange={handleChange}
              placeholder="First Name" className="w-1/2 px-3 py-2 border rounded-lg" required />
            <input type="text" name="lastName" value={form.lastName} onChange={handleChange}
              placeholder="Last Name" className="w-1/2 px-3 py-2 border rounded-lg" required />
          </div>

          <input type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="Email address" className="w-full px-3 py-2 border rounded-lg" required />

          {/* Password */}
          <div className="relative">
            <input type={showPassword ? "text" : "password"} name="password" value={form.password} 
              onChange={handleChange} placeholder="Password"
              className="w-full px-3 py-2 border rounded-lg pr-10" required />
            <button type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-500">
              {showPassword ? <IoEye /> : <IoMdEyeOff />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword"
              value={form.confirmPassword} onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full px-3 py-2 border rounded-lg pr-10" required />
            <button type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-2.5 text-gray-500">
              {showConfirmPassword ? <IoEye /> : <IoMdEyeOff />}
            </button>
          </div>

          <label className="flex items-center space-x-2 text-sm">
            <input type="checkbox" required className="accent-green-600" />
            <span>I agree to <a href="#" className="text-green-600">Terms</a> & <a href="#" className="text-green-600">Privacy</a></span>
          </label>

          <button type="submit"
            className="w-full py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition">
            Create Account
          </button>
        </form>

        {message && <p className="mt-4 text-center text-sm text-red-600">{message}</p>}

        <p className="text-center mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 font-medium">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;