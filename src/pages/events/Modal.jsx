import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapLocationDot, faArrowTrendUp, faBed, faCalendarDays, faList, faLocationDot, faUserGraduate, faMasksTheater, faHeartPulse, faGamepad, faMusic, faChildren,faPerson, faClock, faLanguage, faPeopleArrows, faTags, faClockRotateLeft, faBookmark, faBook, faLocation, faTag} from '@fortawesome/free-solid-svg-icons';
import './Modal.css';
import a from '../../components/images/cntr4.jpg';
import useFetch from "../../hooks/useFetch"
import axios from "axios";
import { AuthContext } from '../../hooks/context/AuthContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TicketBook from '../../components/ticketbBook/TicketBook';


export default function Modal({closeModal,eventId,ticketDet}) {
  const [sale,setSale]=useState(ticketDet.ticketSale)
  const [loading, setLoading] = useState(false);
  const [orderAmount, setOrderAmount] = useState(0);
  const {user}=useContext(AuthContext);
  const [openOptions, setOpenOptions] = useState(false);
  const token = localStorage.getItem('token');
  const [option, setOption] = useState({
    tickets:1
  });
  const {data}=useFetch(`https://eventvibe-f71z.onrender.com/event/ticket/${eventId}`)
console.log(data);
  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };
  console.log(option)
  console.log(ticketDet)

  




const handleClick=async (orderId)=>{
  
  try {
  
    const purchase= await axios.post(`https://eventvibe-f71z.onrender.com/ticket/purchase/${eventId}/${ticketDet._id}`,{eventId:eventId,ticketId:ticketDet._id,ticket:option.tickets,userId:user._id,orderId:orderId},{ headers: {
      Authorization: `Bearer ${token}`,
      // Other headers if needed
    }});   //NOTE TO INCLUDE USER DATEILS HERE AFTER COMPLETION 
    toast.success('Tickets Booked Succesfully ..Please check your registered Email for more details', {
      position: toast.POSITION.TOP_CENTER
    });
   console.log(purchase.data._id)
    await axios.post("https://eventvibe-f71z.onrender.com/event/sendconfirmation",{userId:user._id,purchaseId:purchase.data._id},{ headers: {
      Authorization: `Bearer ${token}`,
      // Other headers if needed
    }})

    closeModal(false);
      
  }
 catch(err){
    console.log(err);
 }
}


const loadRazorpay=()=> {
  const script = document.createElement('script');
  script.src = 'https://checkout.razorpay.com/v1/checkout.js';
  script.onerror = () => {
    alert('Razorpay SDK failed to load. Are you online?');
   
  };
  script.onload = async () => {
    try {
      setOrderAmount(option.tickets*ticketDet.price)
      setLoading(true);
      const result = await axios.post('https://eventvibe-f71z.onrender.com/create-order', {
        amount: orderAmount + '00' ,
      });
      const { amount, id: order_id, currency } = result.data;
      const {
        data: { key: razorpayKey },
      } = await axios.get('https://eventvibe-f71z.onrender.com/get-razorpay-key');

      const options = {
        key: razorpayKey,
        amount: amount.toString(),
        currency: currency,
        name: 'example name',
        description: 'example transaction',
        order_id: order_id,
        handler: async function (response) {
          const result = await axios.post('https://eventvibe-f71z.onrender.com/pay-order', {
            amount: amount,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          });
          alert(result.data.msg);
          if(result.data.success){
            handleClick(result.data.orderId);
          }
          // fetchOrders();
        },
        prefill: {
          name: 'example name',
          email: 'email@example.com',
          contact: '111111',
        },
        notes: {
          address: 'example address',
        },
        theme: {
          color: '#80c0f0',
        },
      };

      setLoading(false);
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
      console.log(paymentObject)
      

     


    } catch (err) {
      alert(err);
      setLoading(false);
    }
  };
  document.body.appendChild(script);
}

const dateStart = new Date(ticketDet.date?.startDate); // Replace this with your actual date
const startDate = dateStart.toLocaleDateString('en-US',{
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
const dateEnd = new Date(ticketDet.date?.endDate); // Replace this with your actual date
const endDate = dateEnd.toLocaleDateString('en-US',{
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const currentDate=new Date();
const formattedEndDate = endDate.slice(0, -1); // Remove the 'Z' at the end
const currentDateString = currentDate.toISOString();




  return (
   
    <div className="modalBackground">
       
      {/* <span onClick={closeModal(false)}>Close</span> */}
      <div className="modalContainer">
        <div className="title" id = "mo1">CONFIRM TICKET BOOKING <small>{!sale && <b>Ticket Sale Paused</b>}</small></div>
        <span className="m1m1">
         
        <span className="details"><b>Details:</b><small>  {ticketDet.totalTickets} Tickets Remaining</small></span><br/>
          <FontAwesomeIcon style={{color:"red"}}icon = {faBookmark}></FontAwesomeIcon>
          <span className="modalchildtitle"><b style = {{fontWeight:'900', color:'gray'}}> NAME:</b></span>
            <span className="childinfo" id = "mo2">&ensp;{ticketDet?.name}</span><br/>
          <FontAwesomeIcon style={{color:"green"}}icon = {faLocationDot}></FontAwesomeIcon>
          <span className="modalchildtitle"><b style = {{fontWeight:'900', color:'gray'}}> CATEGORY:</b></span>
            <span className="childinfo" id = "mo2">&ensp;{ticketDet?.type}</span><br/>
            <FontAwesomeIcon style={{color:"blue"}}icon = {faLanguage}></FontAwesomeIcon>
          <span className="modalchildtitle"><b style = {{fontWeight:'900', color:'gray'}}> DESCRIPTION:</b></span>
            <span className="childinfo" id = "mo2">&ensp;{ticketDet?.desc}</span><br/>
          <FontAwesomeIcon style={{color:"yellow"}}icon = {faClock}></FontAwesomeIcon>
          <span className="modalchildtitle"><b style = {{fontWeight:'900', color:'gray'}}> PRICE <small>per Ticket</small> :</b></span>
            <span className="childinfo" id = "mo2">&ensp;<b> $ {ticketDet?.price}</b></span><br/>
          <FontAwesomeIcon style={{color:"black"}}icon = {faPeopleArrows}></FontAwesomeIcon>
          <span className="modalchildtitle"><b style = {{fontWeight:'900', color:'gray'}}> TICKET SALE ENDS:</b></span>
            <span className="childinfo" od = "mo2">&ensp;{startDate} - {endDate}</span><br/><br/>
          <FontAwesomeIcon icon = {faTags}></FontAwesomeIcon>
          <span className="modalchildtitle"><b style = {{fontWeight:'900', color:'gray'}}>SELECT NUMBER OF TICKETS:</b></span>
          
            
        </span>
        <ToastContainer/>
        <div className="imlidli" style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'10px'}}>
        <div className="headerSearchItem">
                <FontAwesomeIcon id = "mo2" style = {{color:'red'}}icon={faPerson} className="headerIcon" />
                <span id = "mo2"
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${option.tickets} tickets`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <div className="optionCounter">
                        <button
                          disabled={option.tickets <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("tickets", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {option.tickets}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("tickets", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    
                  </div>
                )}
              </div>
              <span className="modalchildtitle" id = "mo2"><b>AMOUNT TO PAY : $ {option.tickets*ticketDet.price}</b>
         </span>
              
        </div>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        { currentDateString<ticketDet.date?.endDate ? <>
        <button className="openModalBtun" id = "mo4" onClick={loadRazorpay} disabled={!sale}>CONFIRM BOOKING</button>
        </> : <h2 style={{color:"#fd5f5f"}}>Ticket Sale Ended</h2>
        }
         <button className="openModalBtun" id = "mo4" onClick={()=>closeModal(false)}>Cancel</button>
         </div>
      </div>
    </div>
  )
}