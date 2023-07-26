import { Link } from "react-router-dom";
import "./singleEvent.css"
import { format } from 'date-fns'
import Business from "./businessDetails";





const searchitem = ({ details}) => {

  const dateStart = new Date(details.date?.startDate); // Replace this with your actual date
const startDate = dateStart.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
const dateEnd = new Date(details.date?.endDate); // Replace this with your actual date
const endDate = dateEnd.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

  return (
    <>
      
        
          <div class="col-lg-4">

            <div class="card">
              <img src={details.photos[0] || "http://res.cloudinary.com/dg7seerl9/image/upload/v1689512962/upload/ogw0ec9vuandxuasonsw.png"} class="img-fluid rounded-start" className="searchitemimg cardimg" alt="..." />

              <div class="card-body">
                 <h5 class="card-title"><b style = {{color:"#EBDECC"}}> {details.name}</b></h5>
                 <p class="card-title"><b style = {{color:"#EBDECC"}}>Event Duration : </b>{startDate} - {endDate} </p>
                 {/* <p class="card-title"><b style = {{color:"#EBDECC"}}>Event Ends :</b> {startDate}</p> */}
                 <p class="card-title"><b style = {{color:"#EBDECC"}}>Event Type: </b>{details.type}</p> 
                 <p class="card-title"><b style = {{color:"#EBDECC"}}>Event Type: </b>{details.address}, {details.city}, {details.country}</p> 
              
                <div id = "sese1">
                  {/* MAKE A POP UP FOR THESE    */}
                 <Link to={`/user/details/${details._id}`} ><button id = "sese2"className="openModalBtn">VIEW DETAILS</button></Link>

                 <Link to={`/bookings/${details._id}`} ><button id = "sese2"className="openModalBtn">VIEW BOOKINGS</button></Link>
              
                 </div>



              </div>
            </div>
          </div>
     
      
    </>
  )
};

export default searchitem;