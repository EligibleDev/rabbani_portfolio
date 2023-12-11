import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout/MainLayout";

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
    },
]);

export default MainRouter;
