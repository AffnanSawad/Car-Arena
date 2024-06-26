import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const Login = () => {

    const {signin} = useContext(AuthContext);

    //redirect

    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);


   const handleLogin = event => {
   
    event.preventDefault()

    const form = event.target ;

    const email = form.email.value;


    const password = form.password.value ;

    console.log(email,password);


    signin(email,password)

    .then( result => {
     
        const loggedInUser = result.user

        console.log(loggedInUser)


        const user = {email};

        //redirect

        //navigate(location?.state ? location?.state : '/');
    
        //access toket of JWT

        axios.post('http://localhost:5000/jwt',user ,
        {withCredentials:true}
      )

        .then(res => {
          console.log(res.data)
          if(res.data.success){
            navigate(location?.state ? location?.state : '/');
          }
        }  )



    }  )

    .then(error => console.log(error))


   }



    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="mr-16 w-1/2">
     
    <img src="https://i.ibb.co/GTjKHxm/6343825.jpg" alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      
      
      
      <form onSubmit={handleLogin} className="card-body">
    
      <h1 className="text-3xl font-extrabold text-center ">Login !</h1>



        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>


        <p className=" text-center">New In Best-Stop? Please  <Link to='/signup' className="text-orange-600 font-bold ">Sign Up</Link>  first!  </p>
      </form>

    
        
    </div>
  </div>
</div>
    );
};

export default Login;