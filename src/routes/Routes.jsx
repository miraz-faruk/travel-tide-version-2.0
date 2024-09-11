import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import MagicPage from "../MagicPage/MagicPage";

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
                path: "/magic-page",
                element: <MagicPage></MagicPage>
            }
        ]
    },
]);

export default router;