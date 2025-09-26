import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import Loader from "../components/Loader";

const ForgotVerifyOtp = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const email = state?.email;

  const [otp, setOtp] = useState(Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (val, idx) => {
    if (!/^\d?$/.test(val)) return;
    const newOtp = [...otp];
    newOtp[idx] = val;
    setOtp(newOtp);
    if (val && idx < 5) document.getElementById(`otp-${idx+1}`).focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length !== 6) return setMessage("⚠ Enter 6 digits");

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("otp", code);

      const res = await fetch("https://apitest.softvencefsd.xyz/api/forgot-verify-otp", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setMessage("✅ Verified!");
        setTimeout(()=> navigate("/reset-password", { state: { email } }), 1000);
      } else {
        setMessage("❌ Invalid OTP");
      } 
    } catch {
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader/>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <img src="./public/business-logo.png" alt="logo" className="h-10 mb-6" />
      <div className="w-full max-w-md bg-white rounded-lg shadow p-8 text-center">
        <button onClick={()=>navigate(-1)} className="text-green-600 mb-2">← Back</button>
        <h2 className="text-xl font-bold mb-2">Please check your email!</h2>
        <p className="text-gray-500 mb-6">We've emailed an OTP to <strong>{email}</strong></p>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between mb-6">
            {otp.map((digit, i)=>(
              <input key={i} id={`otp-${i}`} maxLength="1" value={digit}
               onChange={(e)=>handleChange(e.target.value,i)}
               className="w-12 h-12 border rounded text-center font-bold" />
            ))}
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg">
            Verify
          </button>
        </form>
        {message && <p className="mt-4 text-sm">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotVerifyOtp;