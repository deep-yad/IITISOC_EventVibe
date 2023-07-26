import React from 'react'
import Navbar from '../navbar/Navbar.js';
import './allEvents.css'
import SingleEvent from './singleEvent.jsx'
// import Datepick from "./datepicker.js";
import { setAuthToken } from '../../hooks/auth.js';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState, useContext } from 'react';
import { SearchContext } from '../../hooks/context/SearchContext.jsx';
import useFetch from '../../hooks/useFetch.jsx';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../hooks/context/AuthContext.jsx';
import _ from 'lodash';//LODASH IS A FUNCTION TO SORT DUPLICATES IN A ARRAY

export default function Book() {
 
  const {user}=useContext(AuthContext);
 

  console.log(user)

 
  const token = localStorage.getItem('token');
  // setAuthToken(token);
  
  const { data, loading, error , reFetch} = useFetch(`https://eventvibe-f71z.onrender.com/user/events/created/${user._id}`);
  console.log(data);
  const uniqueData = _.uniqBy(data, '_id')
  console.log(uniqueData)
  

const handleClick=()=>{
  reFetch();
};
  return (
    <div>
      <Navbar/>
     <>
     <h2 id = "ub1">CREATED EVENTS:</h2>
<div className="listresults">
  
{uniqueData.map((item)=>(
             <SingleEvent details={item}  />
  ))}
</div> 
</>
</div>
  )
}
