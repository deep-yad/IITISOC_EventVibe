import { Link } from "react-router-dom";
import { useState } from "react";
import "./singleEvent.css"
import { format } from 'date-fns'

import Model from './Model.jsx'
const Searchitem = ({ details }) => {
  const [openmodel, setopenmodel] = useState(false)

  const dateStart = new Date(details.purchaseDate); // Replace this with your actual date
  const startDate = dateStart.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      
      <div class = "col-lg-4">

        

          <div class="card">
            <img src={details.eventId.photos[0] || "http://res.cloudinary.com/dg7seerl9/image/upload/v1689512962/upload/ogw0ec9vuandxuasonsw.png"} className="searchitemimg cardimg" alt="..." />

            <div class="card-body" id = "se2">
              <div ><h1 ><b className="card-title">EVENT NAME: {details.eventId.name}</b></h1></div>
              <span class="card-title">DATE OF PURCHASE : {startDate}</span><br/>
              <span class="card-title"  id = "se1">Ticket Quantity :{details.quantity}</span>

              {/* MAKE A POP UP FOR THESE    */}
            
              <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <button id = "se3"className="openModalBtn" onClick={() => { setopenmodel(true); }} >SEE DETAILS</button>
              </div>





            </div>
          </div>
        



      
      {openmodel && <Model closemodel={setopenmodel} ticketinfo={details} />}
      </div>
    </>
  )
};

export default Searchitem
  ;