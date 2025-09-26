import React,{useState} from "react";
import { useLocation, useNavigate } from "react-router";
import Loader from "../components/Loader";
import { IoEye} from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const email = state?.email;

  const [password,setPassword] = useState("");
  const [confirm,setConfirm] = useState("");
  const [loading,setLoading] = useState(false);
  const [message,setMessage] = useState("");
  const [showPass,setShowPass] = useState(false);
  const [showConfirm,setShowConfirm] = useState(false);

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(password!==confirm){
      setMessage("❌ Passwords do not match");
      return;
    }
    setLoading(true);
    try{
      const fd = new FormData();
      fd.append("email", email);
      fd.append("password", password);
      fd.append("password_confirmation", confirm);

      const res = await fetch("https://apitest.softvencefsd.xyz/api/reset-password",{method:"POST",body:fd});
      if(res.ok){
        setMessage("✅ Reset successful");
        setTimeout(()=> navigate("/reset-success"), 1000);
      }else{
        const data = await res.json();
        setMessage("❌ "+(data.message||"Reset failed"));
      }
    }catch(err){setMessage("Error");}
    finally{setLoading(false);}
  }

  if(loading) return <Loader/>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <img src="/business-logo.png" alt="logo" className="h-10 mb-6"/>
      <div className="w-full max-w-md bg-white rounded-lg shadow p-8">
        <h2 className="font-bold text-xl mb-4">Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input type={showPass? "text":"password"} value={password}
             onChange={e=>setPassword(e.target.value)} placeholder="New Password" required
             className="w-full px-3 py-2 border rounded-lg pr-10"/>
            <button type="button" onClick={()=>setShowPass(!showPass)}
             className="absolute right-3 top-2.5 text-gray-500">{showPass? <IoEye/>:<IoMdEyeOff/>}</button>
          </div>
          <div className="relative">
            <input type={showConfirm? "text":"password"} value={confirm}
             onChange={e=>setConfirm(e.target.value)} placeholder="Confirm Password" required
             className="w-full px-3 py-2 border rounded-lg pr-10"/>
            <button type="button" onClick={()=>setShowConfirm(!showConfirm)}
             className="absolute right-3 top-2.5 text-gray-500">{showConfirm? <IoEye/>:<IoMdEyeOff/>}</button>
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg">Update Password</button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </div>
  )
}
export default ResetPassword;