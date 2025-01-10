
import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Users from "@/pages/Users";
import Login from "@/pages/Login";
import Task from "@/pages/Task";
const routes = createBrowserRouter([{
    path: "/",
    element: <App />,
    children:[
        {
            index:true,
            element:<Task></Task>
        },
        {
            path:"users",
            element:<Users></Users>
        }
    ]
},
{
    path:"/login",
    element:<Login></Login>
}
]);

export default routes