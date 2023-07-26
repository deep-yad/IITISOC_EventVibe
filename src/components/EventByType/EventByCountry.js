import "./EBT.css"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Sitem from "../searchitem/searchitem.js";
import useFetch from "../../hooks/useFetch";
import Navbar from "../navbar/Navbar";


const AllEventsCountryPage = () => {
  const [events, setEvents] = useState([]);
  const { country } = useParams();
 
  
  const {data, loading ,error}= useFetch(`https://eventvibe-f71z.onrender.com/event/location/${country}`);
  console.log(data);


  return (
    <div className="maincontainer">
    <>
    <Navbar/>
    <div className="container1">
      <h1 className="headingText" style={{marginTop:"1rem", color:"white", marginLeft:"37rem"}}>All Events - {country}</h1>
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

export default AllEventsCountryPage;