import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    
    const [services,setservices] = useState([]);

    useEffect(    
        
        ()=> {

    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setservices(data))


        }
        
        
        ,[])



    return (
        <div>
            
        

        <div className="text-center py-2 ">
            <h3 className="text-4xl font-bold text-orange-500"> Service's   </h3>

            <h1 className="font-bold text-2xl mt-2">Our Services</h1>

            <p className="font-bold mt-2">We Provide All Kind Of Car Services.</p>
        </div>



    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

   {
    services.map( service =>  <ServiceCard 
    
      key={service._id}
    service={service}
    
        > </ServiceCard> )
   }


    </div>





        </div>
    );
};

export default Services;