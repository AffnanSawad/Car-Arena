import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const CheckOut = () => {

    const service = useLoaderData();

    const {title , _id ,price} = service;

    const {user} = useContext(AuthContext)


    const handleorder = event => {
   
        event.preventDefault()
    
        const form = event.target ;
    
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
    


        const order = {
            customerName : name , email , date,
            service: _id,
            
         

            price:price
        }

        console.log(order)

    }


    return (
        <div>
           
            <h1 className="text-xl font-extrabold text-center">SERVICE NAME :  {title}  </h1>


      <form onSubmit={handleorder}>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


    <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name="name" defaultValue={user?.displayName} placeholder="name" className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" placeholder="date" className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Charge</span>
          </label>
          <input type="text" name="charge" defaultValue={'$'+ price } placeholder="number" className="input input-bordered" required />
          
        </div>





    </div>
        
        
        
        <div className="form-control mt-6 mb-6">
          <button className="btn btn-error">Order Confirm</button>
        </div>
      </form>
    </div>
  
   
    );
};

export default CheckOut;