import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const NavBar = () => {

  const {user,logout} = useContext(AuthContext)

  const handlelogout = ()=>{
    
    logout()
    .then( ()=> {} )
    .catch( error=> console.log(error)  )

  }

    
    const navLinks = <>
    
    <li>  <Link to='/'> Home </Link>     </li>
    <li>  <Link to='about'> About </Link>     </li>
    <li>  <Link to='/blog' > Blog </Link>     </li>


    {   
    
    user?.email ?  <>
    
    
    <li>  <Link to='/myorders' > My Orders</Link>     </li>

    <li>  <button onClick={handlelogout}> Log Out </button>    </li>
    </>
    : 

    <li>  <Link to='/login' > Log In </Link>     </li>

    }
    
    </>

      
    return (
        <div className="navbar bg-base-100 h-24 mb-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  gap-2">
              
        

         {navLinks}


            </ul>
          </div>

  <div className="">
  <Link to='/'>  <img className="w-1/12 lg:w-1/12" src="https://i.ibb.co/B4B3DKy/Transports-Gradient-auto-parts-logo-3.jpg" alt="" />    </Link>


  <h1 className="font-extrabold text-xl">Best-Stop</h1>


  </div>


        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 mx-5">
            

         {navLinks}


          </ul>
        </div>
        <div className="navbar-end">
        <button className="btn btn-outline btn-success">Appointment</button>
        </div>
      </div>
    );
};

export default NavBar;