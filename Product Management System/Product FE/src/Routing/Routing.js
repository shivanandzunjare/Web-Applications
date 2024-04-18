import { createBrowserRouter }  from "react-router-dom";
import App from "../App";
import AddProduct from "../components/AddProduct";
import Home from "../components/Home";
import EditProduct from "../components/EditProduct";

//routing for URL
const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children :[
            {
                path:"home",
                element:<Home/>
            },
            {
                path:"/add",
                element:<AddProduct/>
            },
            {
                path:"/update/:id",
                element:<EditProduct/>
            },
        ]
    }
])

export default router