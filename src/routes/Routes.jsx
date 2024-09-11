import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import MagicPage from "../MagicPage/MagicPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import PrivateRoutes from "./PrivateRoutes";
import AddTouristSpot from "../pages/AddTouristSpot/AddTouristSpot";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/add-tourist-spot",
                element: <PrivateRoutes>
                    <AddTouristSpot></AddTouristSpot>
                </PrivateRoutes>
            },
            {
                path: "/magic-page",
                element: <MagicPage></MagicPage>
            },
            {
                path: "/about",
                element: <About></About>
            }
        ]
    },
]);

export default router;