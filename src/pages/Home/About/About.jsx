
const About = () => {
    return (
        <div className="hero min-h-screen bg-gray-400  h-1/2 mt-6 mb-4">
  <div className="hero-content flex-col lg:flex-row">
    
    
    <div className=" lg:w-1/2 relative">

    <img src="https://i.ibb.co/jRnxyvV/male-mechanics-working-together-car-shop.jpg" className="max-w-sm rounded-lg shadow-2xl w-3/4 border-8 border-white" />
    <img src="https://i.ibb.co/k8hLJY9/spare-parts-car.jpg" className="max-w-sm rounded-lg shadow-2xl absolute right-5 top-1/2  border-white border-8" />


    </div>
   
    
    
    
    
    
    <div className="lg:w-1/2">
      <h1 className="text-5xl text-orange-7     font-extrabold">Car Servicing Methods!</h1>
      <p className="py-6">Car servicing methods include routine maintenance, diagnostic checks, brake servicing, engine tune-up, suspension and steering servicing, wheel alignment, cooling system servicing, transmission servicing, electrical system check, and safety inspections.</p>
      <button className="btn btn-error">Know More !</button>
    </div>
  </div>
</div>
    );
};

export default About;