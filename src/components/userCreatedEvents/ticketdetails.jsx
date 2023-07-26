import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapLocationDot, faArrowTrendUp, faBed, faCalendarDays, faList, faLocationDot, faUserGraduate, faMasksTheater, faHeartPulse, faGamepad, faMusic, faChildren, faClock, faLanguage, faMoneyBills, faPeopleArrows, faTags, faClockRotateLeft, faBookmark, faBook, faLocation } from '@fortawesome/free-solid-svg-icons';
import './businessDetails.css'
import axios from 'axios';
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';


export default function TicketInfo({ticket}){
  // const {data}=useFetch(`http://localhost:3000/ticket/${ticket._id}`);
  // console.log(data)
  const [sale,setSale]=useState(ticket.ticketSale)
  const [salee,setSalee]=useState(ticket.ticketSale)
  const [isLoading, setIsLoading] = useState(false);
//   useEffect(()=>{
//   const fetch=async()=>{
//             const dataa=await axios.get(`http://localhost:3000/ticket/${ticket._id}`);
//             setSale(dataa.data.ticketSale);
//             console.log(dataa.data.ticketSale);
//   }
// fetch();
//   })
  // console.log(ticket)
        const dateStart = new Date(ticket.date?.startDate); // Replace this with your actual date
        const startDate = dateStart.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
        const dateEnd = new Date(ticket.date?.endDate); // Replace this with your actual date
        const endDate = dateEnd.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
// console.log(ticket)


// console.log(data);

const handleClick=async ()=>{
  const token = localStorage.getItem('token');
  setIsLoading(true);
  const res=await axios.get(`https://eventvibe-f71z.onrender.com/ticket/${ticket._id}`);
  // console.log(res.data)
  setSale(!res.data.ticketSale)
  // const sale=!data.ticketSale;
  // console.log(sale)
  const updated=await axios.post(`https://eventvibe-f71z.onrender.com/ticket/ticketsale/${ticket._id}`,{ticketSale:sale},{ headers: {
    Authorization: `Bearer ${token}`,
    // Other headers if needed
  }});
  console.log(updated.data.ticketSale);
  setSalee(updated.data.ticketSale);
  setIsLoading(false);
}

return (<>
 {isLoading ? (
       <div class="loader"></div>
      ) : (<>
<div className='ticketbox'>
          <span className="eventtitle" style={{fontSize:'37px', fontWeight:'1000', color:'rgb(233, 231, 229)'}}><b>{ticket.name}</b></span><br/><br/>
  <h3>Ticket Sale: <b style={{color:'red'}}>{salee ? "SALE ON" :"SALE OFF"}</b></h3>  
  {/* <h3> joo{ticket.ticketSale}</h3>     */}
<p>Price : {ticket.price}</p>
<p>Remaing TIckets : {ticket.totalTickets}</p>
<p>Ticket Type :{ticket.type}</p>
<p>Ticket Desc :{ticket.desc}</p>
<p>Ticket Sale starts :{startDate} ends : {endDate}</p> 
<div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
       <button id = "td1">Add Tickets</button>
       <button id ="td1"onClick={handleClick}>Stop/Resume Ticket Sale</button>
</div>       
        </div>
      </>)}







</>)



}