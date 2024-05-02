import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyOrdersRow from "./MyOrdersRow";
import Swal from 'sweetalert2'

const MyOrders = () => {

   
    const {user}=useContext(AuthContext)

    const [orders,setorders] = useState([]);


    const url = `http://localhost:5000/orders?email=${user?.email}` ;


    useEffect(
    
        ()=>{

            fetch(url)
            .then(res=>res.json())

            .then(data=>setorders(data))
        }

    
        ,
        [url]

    );


    const handledelete = id => {

        const proceed = confirm('Are Tou Sure that You want to DELETE?');
       
       
        if(proceed){
       
           fetch(`http://localhost:5000/orders/${id}`,{
               method: 'DELETE'
       
           })
           .then(res => res.json())
           .then(data => {
            
            console.log(data)
       
            if(data.deleteCount>0){
                
                Swal.fire({
                    title: 'Deleting!',
                    text: 'Do you want to add?',
                    icon: 'success',
                    confirmButtonText: 'Delete'
                  }) 

               const remaining = orders.filter(order=> order._id !== id);


               setorders(remaining);
            }
       
       
       })
       
       
       
       
        }
       
       
       
         }



         const handleupdate = id => {

            fetch(`http://localhost:5000/orders/${id}`,{
                method: 'PATCH',
                headers:{
                    'content-type': 'application/json'
                  },
                  body: JSON.stringify({status:'confirm'})
            
        
            })


            .then(res => res.json())

            .then( data=> {
                console.log(data);

                if(data.modifiedCount > 0){
                    
                    //update state
    const remaining = orders.filter(order => order._id !== id  );

    const updated = orders.find(order=>order._id === id);

    updated.status = 'confirm'

    const neworders = [updated,...remaining];

    setorders(neworders);


                }
            })
         }









    return (
        <div>
            <h1>ORDERS {orders.length} </h1>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Service Type</th>
        <th>Customer Name</th>
        <th>Email</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
      {

    orders.map( order => <MyOrdersRow
    
    key={order._id}

    order={order}

    handledelete={handledelete}

    handleupdate={handleupdate}
    
    
    ></MyOrdersRow>   )


      }
      
      
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default MyOrders;