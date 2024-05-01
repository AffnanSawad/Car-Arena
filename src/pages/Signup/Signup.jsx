import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Signup = () => {

    const {createUser} = useContext(AuthContext)

   const handlesignup = event => {
   
    event.preventDefault();

    const form = event.target ;

    const email = form.email.value;

    const name = form.name.value ;

    const password = form.password.value ;

    console.log(name,email,password);


    createUser(email,password)

    .then( result => {
     
        const user = result.user

        console.log(user)

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
      
      
      
      <form onSubmit={handlesignup} className="card-body">
    
      <h1 className="text-3xl font-extrabold text-center ">Sign Up!</h1>

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name="name" placeholder="your name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>


        <p className=" text-center">Already Have an account? Please  <Link to='/login' className="text-green-600 font-bold ">Log IN</Link>  first!  </p>
      </form>

    
        
    </div>
  </div>
</div>
    );
};

export default Signup;