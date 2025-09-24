import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";


export const router = createBrowserRouter([
    {
        index: true,
        Component: Home
    },
    {
        path: '/login',
        Component: Login
    }

]);
