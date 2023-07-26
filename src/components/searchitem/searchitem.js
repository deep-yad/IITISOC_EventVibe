import { Link } from "react-router-dom";
import "./searchitem.css"
import { format } from "date-fns";

const searchitem = ({ item }) => {

  const dateStart = new Date(item.date?.startDate); // Replace this with your actual date
const startDate = dateStart.toLocaleDateString('en-US',{
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
const dateEnd = new Date(item.date?.endDate); // Replace this with your actual date
const endDate = dateEnd.toLocaleDateString('en-US',{
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
  return (
    <>
      
        
          <div class="col-lg-4">

            <div class="card">
              <img src={item.photos[0] || "http://res.cloudinary.com/dg7seerl9/image/upload/v1689512962/upload/ogw0ec9vuandxuasonsw.png"} className="searchitemimg cardimg" alt="..."  />

              <div class="card-body">
                <h5 class="card-title"><div style={{display:"flex", alignItems:'center', justifyContent:'center', fontSize:'30px'}}><b>{item.name}</b></div></h5>
                {/* <p class="card-title">{item.desc}</p> */}
                <p class="card-title"><b>Type</b> : {item.type}</p>
                < p class="card-title"><b> Scheduled on</b>: {startDate} - {endDate}</p>
                <p class="card-title"><b>Location</b>: {item.address} ,{item.city},{item.country}</p>
                {item.featured && <p class="card-title"><b><span style={{color:"red"}}>FREE</span> </b><small>Event</small></p>}
                
                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <Link to={`/event/${item._id}`}>
                  <button className="openModalBtn" >Book Now</button>
                </Link>
                </div>
                <p class="card-text"></p>



              </div>
            </div>
          </div>
     
      
    </>
  )
};

export default searchitem
  ;