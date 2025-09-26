import React, { useState } from "react";
import { useNavigate } from "react-router";
import Loader from "../components/Loader";
import logo from "../assets/business-logo.png";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("email", email);

      const res = await fetch("https://apitest.softvencefsd.xyz/api/forgot-password", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ OTP sent to email");
        setTimeout(() => navigate("/forgot-verify", { state: { email } }), 1000);
      } else {
        setMessage("❌ " + (data.message || JSON.stringify(data.errors)));
      }

    } catch (err) {
      setMessage("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <img src={logo} alt="logo" className="h-10 mb-6" />
      <div className="w-full max-w-md bg-white rounded-lg shadow p-8">
        <button onClick={() => navigate(-1)} className="text-green-600 mb-4">← Back</button>
        <h2 className="text-xl font-bold mb-2">Forgot your password?</h2>
        <p className="text-gray-500 mb-6">Enter your email. We'll email you a reset code.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address" className="w-full px-3 py-2 border rounded-lg" required />
          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg">
            Reset Password
          </button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;