import "./EBT.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Sitem from "../searchitem/searchitem.js";
import useFetch from "../../hooks/useFetch";
import Navbar from "../navbar/Navbar";


const AllEventsPage = () => {
  const [events, setEvents] = useState([]);
  const { type } = useParams();
  const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
  
  const {data, loading ,error}= useFetch(`https://eventvibe-f71z.onrender.com/event/genre/${type}`);
  console.log(data);
 /* useEffect(() => {
    axios.get(`http://localhost:3000/event/genre/${type}`)
      .then((response) => {
        const eventsData = response.data;
        setEvents(eventsData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [type]);*/

  return (
    <div className="maincontainer">
    <>
    <Navbar/>
     <div className="container1">
      <h1 className="headingText" style={{marginTop:"1rem", color:"white", marginLeft:"37rem"}}>All Events - {capitalizedType}</h1>
    <div className="listresults">
     
        {data.map((event) => (
          <div className="listresultitem">
            <Sitem item={event}/>
          </div>
        ))}
      </div>
   
      </div>
    </>
    </div>
  );
};

export default AllEventsPage;