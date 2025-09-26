import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SuccessPage from "../pages/SuccessPage";
import VerifyOtp from "../pages/VerifyOtp";
import ForgotVerifyOtp from "../pages/ForgotVerifyOtp";
import ResetPassword from "../pages/ResetPassword";
import ResetSuccess from "../pages/ResetSuccess";
import ForgotPassword from "../pages/ForgotPassword";


export const router = createBrowserRouter([
    {
        index: true,
        Component: Home
    },
    {
        path: '/login',
        Component: Login
    },
    {
        path: '/register',
        Component: Register
    }, 
    {path:"/success" ,
     Component: SuccessPage

   },
  {
    path:"/verify" ,
     Component: VerifyOtp

   },
   {
    path: "/forgot-password",
    Component: ForgotPassword
   },
   {
    path: "/forgot-verify",
    Component: ForgotVerifyOtp
   },
   {
    path: "/reset-password",
    Component: ResetPassword
   },
   {
    path: "/reset-success",
    Component: ResetSuccess
   }

]);
