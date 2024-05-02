
const MyOrdersRow = ({order,handledelete,handleupdate}) => {

  const {_id,customerName,email,date,service,price,img,status} = order;

  
 
  

  

    return (
        <tr>
        <th>
        <button onClick={ ()=> handledelete(_id)}  className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="rounded w-28 h-12">
              { img && <   img src={img} alt="Avatar Tailwind CSS Component" /> }
              </div>
            </div>
            <div>
              <div className="font-bold"> {service} </div>
              <div className="text-sm opacity-50"> {date} </div>
            </div>
          </div>
        </td>
        <td>
       {customerName}          
        </td>
        <td>{email}</td>
        <td> ${price}</td>
        <th>
          {
            status === 'confirm' ? <span className="font-bold text-green-500 text-xl">Confirmed</span>

            :
            <button onClick={()=>  handleupdate(_id)} className="btn btn-outline btn-accent"> Please Confirm</button>
          }
        </th>
      </tr>
    );
};

export default MyOrdersRow;