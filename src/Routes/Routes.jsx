import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import CheckOut from "../pages/CheckOut/CheckOut";
import MyOrders from "../pages/MyOrders/MyOrders";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      
      //Main Layout 
      element: <Main> </Main>,

      //Sub Components 
      children: [

    {
        path: '/',
        element:  <Home></Home>      ,
    },
    {
        path: 'login',
        element:  <Login></Login>     ,
    },
    {
        path: 'signup',
        element:  <Signup></Signup>     ,
    },
    {
        path: 'checkout/:id',
        element:  <PrivateRoutes>

         <CheckOut></CheckOut> 

        </PrivateRoutes>    ,

        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
    },
    {
        path: 'myorders',
        element:  <PrivateRoutes>
          <MyOrders></MyOrders>,
        </PrivateRoutes>    ,

        
    },



      ]
    },
  ]);



  export default router;