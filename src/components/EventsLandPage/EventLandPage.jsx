import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import "./ELP.css";
import g from '../images/p1.jpg';
import h from '../images/p2.jpeg';
import i from '../images/p3.jpeg';
import j from '../images/p4.jpeg';
import k from '../images/p5.jpeg';
import l from '../images/p6.jpeg';
import a from "../images/cntr1.jpg"
import CountDown from '../functions/countdown'
import { format } from "date-fns";
import Card from 'react-bootstrap/Card';
  import ListGroup from 'react-bootstrap/ListGroup';



export default function Event() {
  const { data, loading, error } = useFetch("https://eventvibe-f71z.onrender.com/event/online?featured=true");
  console.log(data);






return (
  <div className="main-scroll-div">
    <div className="cover ">
      <div className="trendcont">
          {data.map(event => (
            <Link to={`/event/${event._id}`}>
               <Card style={{ width: '18rem' ,margin:"2rem", }}>
      <Card.Img variant="top" src={event.photos[0] || "http://res.cloudinary.com/dg7seerl9/image/upload/v1689512962/upload/ogw0ec9vuandxuasonsw.png"} className='cardimg' />
      <Card.Body>
        <Card.Title style = {{textDecoration:'none'}}><h4><b>{event.name}</b></h4></Card.Title>
        {/* <Card.Title style = {{textDecoration:'none'}}><b> Scheduled on</b>: {startDate} - {endDate}</Card.Title> */}
        <Card.Title style = {{textDecoration:'none'}}><b>Type</b>: {event.type} </Card.Title>  
        <Card.Title style = {{textDecoration:'none'}}><b>Location</b>: {event.address} ,{event.city},{event.country}</Card.Title>       
      </Card.Body>

     
    </Card>

          </Link>
          ))}

        </div>
      </div>
    </div>
  )



}