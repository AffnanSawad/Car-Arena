import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

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



      ]
    },
  ]);



  export default router;