import { createBrowserRouter, RouterProvider } from "react-router";
import { TasksPage } from "../pages/TasksPage";
import { LayoutHome } from "../layout/layoutHome";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<LayoutHome>
            <TasksPage/>
            </LayoutHome>
    }
])

export const MyRoutes =()=> <RouterProvider router={routes}/>