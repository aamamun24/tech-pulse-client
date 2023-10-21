import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import BrandPage from "../pages/BrandPage/BrandPage";
import Cart from "../pages/Cart/Cart";
import ProductDetails from "../pages/BrandPage/ProductDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch(`/brands.json`)
            },
            {
                path: "/:id",
                element: <BrandPage></BrandPage>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: "/:id/:id",
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: "/add-product",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "/my-cart",
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;