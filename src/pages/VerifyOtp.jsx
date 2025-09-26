
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Loader from "../components/Loader";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};

  const [otp, setOtp] = useState(Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleOtpChange = (val, i) => {
    if (!/^\d?$/.test(val)) return;
    const newOtp = [...otp];
    newOtp[i] = val;
    setOtp(newOtp);
    if (val && i < 5) document.getElementById(`otp-${i + 1}`).focus();
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length !== 6) {
      setMessage("⚠ Please enter 6 digits");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("otp", code);

      const res = await fetch("https://apitest.softvencefsd.xyz/api/verify_otp", {
        method: "POST", body: formData,
      });

      if (res.ok) {
        setMessage("✅ Verified!");
        navigate("/success"); 
      } else {
        setMessage("❌ Invalid OTP, try again.");
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
      <img src="/business-logo.png" alt="logo" className="h-10 mb-6" />

      <div className="w-full max-w-md bg-white rounded-lg shadow p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>
        <p className="text-gray-500 mb-4">Please enter the code sent to <strong>{email}</strong></p>
        <form onSubmit={handleVerifyOtp}>
          <div className="flex justify-between mb-6">
            {otp.map((digit, i) => (
              <input key={i} id={`otp-${i}`} type="text" maxLength={1} value={digit}
                onChange={(e) => handleOtpChange(e.target.value, i)}
                className="w-12 h-12 border rounded-md text-center font-bold text-lg focus:ring-2 focus:ring-green-500" />
            ))}
          </div>
          <button type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">Verify</button>
        </form>
        {message && <p className="mt-4 text-sm">{message}</p>}
      </div>
    </div>
  );
};

export default VerifyOtp;