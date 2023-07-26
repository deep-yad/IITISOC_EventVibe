import React, { useContext, useEffect } from 'react'

import Navbar from '../navbar/Navbar';
import a from "./profilepic.jpg"
import './userProfile.css';
import Edit from './userprofcomp/Edit.jsx'

import { AuthContext } from '../../hooks/context/AuthContext';
import useFetch from '../../hooks/useFetch';
import { setAuthToken } from '../../hooks/auth';
import { useState } from 'react';
import axios from 'axios';

export default function UserProfile() {
  const [userImg,setuserImg]=useState(null)

  const {user } =useContext(AuthContext);

  // const token = localStorage.getItem('jwtToken');
  // setAuthToken(token);


const {data}=useFetch(`https://eventvibe-f71z.onrender.com/user/${user._id}`)
console.log(data)

useEffect( () => {

  const fetchDATA=async()=>{
  
        if (user) { try {
          const token = localStorage.getItem('token');
          // const token = localStorage.getItem('jwtToken');
          //         setAuthToken(token);
          const response = await axios.get(`https://eventvibe-f71z.onrender.com/user/${user._id}`,{ headers: {
            Authorization: `Bearer ${token}`,
            // Other headers if needed
          }});
          const userforimg = response.data;
          setuserImg(userforimg.image);
        } catch (error) {
          // Handle any error that occurs during the request
          console.error(error);
        }
      }
    }
    fetchDATA();
        // Handle the fetched data here
        // This effect will run when the user object changes
        // or when the fetch request is completed
      
      });
  
  return (
    <div style={{backgroundColor:'rgb(31,31,31)'}}>
      <Navbar/>
      <div className="main-container">
        <div className="lefts">
           <img src ={userImg || a} style={{width:"90px", height:"130px"}}  className='a1a'></img>
            <div className='a2a'><b>{user.username}</b></div><br/>
            <span className="asd"><a className="asd"style = {{textDecoration:'none'}}href = "/created/event">YOUR CREATED EVENTS</a></span><br/>
            <span className="asd"><a className="asd"style = {{textDecoration:'none'}}href = "/booked/event">YOUR BOOKED EVENTS</a></span><br/>
            </div>
        <div className="rights">
            <Edit/>
            
        </div>
      </div>
    </div>
  )
}
