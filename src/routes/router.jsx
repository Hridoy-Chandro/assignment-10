import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../pages/Login";
import MyCart from "../pages/MyCart";
import Register from "../components/Register";
import Outlet from "../components/Outlet";
import Apps from "../components/Apps";
import AddProducts from "../pages/AddProducts";
import Google from "../components/Google";
import Mi from "../components/Mi";
import UpdateProduct from "../components/UpdateProduct";
import Details from "../components/Details";
import ErrorPage from "../components/ErrorPage";
import Itunes from "../components/Itunes";
import Samsung from "../components/Samsung";
import Sony from "../components/Sony";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/updateProduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`http://localhost:5001/product/${params.id}`)
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`http://localhost:5001/product/${params.id}`)
      },

      {
        path: '/myCart/:id',
        element: <MyCart></MyCart>,
        loader: ({ params }) => fetch(`http://localhost:5001/product/${params.id}`)
      },

      {
        path: '/googleProduct',
        element: <Google></Google>,
        loader: () => fetch('http://localhost:5001/product')
      },

      {
        path: '/miProduct',
        element: <Mi></Mi>,
        loader: () => fetch('http://localhost:5001/product')
      },
      {
        path: '/itunesProduct',
        element: <Itunes></Itunes>,
        loader: () => fetch('http://localhost:5001/product')
      },
      {
        path: '/samsungProduct',
        element: <Samsung></Samsung>,
        loader: () => fetch('http://localhost:5001/product')
      },
      {
        path: '/sonyProduct',
        element: <Sony></Sony>,
        loader: () => fetch('http://localhost:5001/product')
      },



      {
        path: '/addProduct',
        element: <AddProducts></AddProducts>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/ourOutlet',
        element: <Outlet></Outlet>
      },
      {
        path: '/apps',
        element: <Apps></Apps>
      },

    ]
  }
]);
export default router;