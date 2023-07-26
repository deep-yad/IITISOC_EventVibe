import React , {useEffect} from 'react';
import { useState } from 'react';
import './Home.css';
import Navbar from '../../components/navbar/Navbar';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapLocationDot, faArrowTrendUp, faBed, faCalendarDays, faList, faLocationDot, faUserGraduate, faMasksTheater, faHeartPulse, faGamepad, faMusic, faChildren, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';

import { useHistory} from "react-router-dom";

import Footer from '../../components/footer/Footer.js';
import Genre from '../../components/GenreLandingPage/GenreLAndingPage';
import Event from '../../components/EventsLandPage/EventLandPage';
import Upcoming from '../../components/UpcomingEvents/UpcomingEvents';
import { useContext } from 'react';
import { SearchContext } from '../../hooks/context/SearchContext';
import { AuthContext } from '../../hooks/context/AuthContext';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  //all functions
  const {user}=useContext(AuthContext);
  const [city, setCity] = useState("");
  // const [openDate, setOpenDate] = useState(false);
  // const [dates, setDates] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: 'selection',
  //   }
  // ]);

  const navigate=useHistory(); 
  const {dispatch}=   useContext(SearchContext);

  const onSearch = () => {
    dispatch({type:"NEW_SEARCH" , payload :{city}});
    navigate.push("/list", { state:  {city}  });
  };
  // if(user){
  //   toast.success('Login Successfull Welcome !', {
  //     position: toast.POSITION.TOP_CENTER
  // });
  // }
  // useEffect(()=>{

  //   if(user){
  //     toast.success('Login Successfull Welcome !', {
  //       position: toast.POSITION.TOP_CENTER
  //   });
  //   }
  // },[]);


  return (


    < div className='home'>
      <Navbar />
      <ToastContainer/>
      <div className="contone">
        <div className="contonecont">
          <span className='lonetit' > <b> {user && "Hi "+user.firstname}</b><br/><b>Have any <span style={{ color: "red" }}>weekend plans?</span></b></span><br /><br /><br/>
          <div className="lonecontent" >Looking for something to do lately? Whether you're a local, new in town or just cruising through we've got loads of great tips and events-from thrilling concerts to thought-provoking conferences, we have a wide variety of experiences for you to choose from.You can explore by location, popularity, free stuff... you got this. Ready?</div><br /><br />
          
          <div className="input-group" id = "#searchbox" >
          <input type="text" name="text" className="input" id="Email"  placeholder="search by location, date or timing!" onChange={(evt)=>{setCity(evt.target.value)}}/>
          <button className="button--submit"onClick={onSearch} >SEARCH</button>
        </div>
        </div>
         {/* SEARCHBAR */}
        
         

      </div>
      <div className="contthreecont">

       

       {/* UPCOMING EVENTS */}
<br/>
        <div className='findnewevents'><FontAwesomeIcon icon={faMapLocationDot} style={{ paddingTop: '70px', fontSize: '3em', paddingLeft: '137px', paddingRight: '30px' }} />
        <span className='idli'>FIND NEW UPCOMING EVENTS!</span><br /><span className="imlimli">Step out or stay in. Make a plan. Have a look at a few locations. </span>
        </div>
        <Upcoming/>  

        <a style={{ color: 'white', textDecoration: 'none'  }} href="/Book"><span className="imlimli idlidli" >and more.... </span></a><br /><br/><br/><br/><br/>

        

        {/* EVENTS LIST */}
        <div className='findnewevents'><FontAwesomeIcon icon={faArrowTrendUp} style={{ paddingTop: '70px', fontSize: '3em', paddingLeft: '137px', paddingRight: '30px' }} />
        <span className='idli'>TRENDING <span style={{color:"red"}}>FREE</span> EVENTS</span><br /><span className="imlimli">Don't miss out on these trending events!! </span>
        </div>
        <Event/>
        <a style={{ color: 'black', textDecoration: 'none' }} href="/Book"><span className="imlimli idlidli" >and more.... </span></a><br /><br/><br/><br/><br/>

        {/* BROWSE BY GENRES */}

        <div className='findnewevents'><FontAwesomeIcon icon={faList} style={{ paddingTop: '70px', fontSize: '3em', paddingLeft: '107px', paddingRight: '30px' }} />
        <span className='idli'>BROWSE EVENTS BY GENRES</span><br /><span className="imlimli">Check out your favourite genres!! </span>
        </div>
        <Genre />


      </div>

      <div className="conttwo">
        <div className="conttwocont">
          <span className='ltwotit'><b>Got an act <span style={{ color: "#3978ff" }}>worth showing?</span></b></span><br /><br />
          <span className="ltwocontent">Publish your event in under five minutes. Craft unique experiences using our simple and powerful event platform. Create, ticket and host both on-ground and digital events on a platform used by millions of live event loving fans.</span><br /><br />
          <span className="clicknoq" ><a href = "/event" style={{textDecoration:'none'}}>Create event!<FontAwesomeIcon icon={faArrowRight} className='arrowright' /></a></span>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <div className="contfour">
        <div className="contfourcont">
          <b><span className='ltwotit'><b><span style={{ color: "rgb(192, 255, 57)" }}>EVENTBRITE: </span>Ticketing made easy!</b></span><br /><br /></b>
          <span className="ltwocontent" >Publish your event in under five minutes.
            Craft unique experiences using our simple and powerful event platform. Create, ticket and host both on-ground and digital events on a platform used by thousands of live event loving fans.</span><br /><br />
          <span className="clicknoe clicknoq" style={{ fontWeight: '300' }}><a style={{textDecoration:'none', color:'rgb(192, 255, 57)'}} href = "/AboutUs">More about us!</a><FontAwesomeIcon icon={faArrowRight} className='arrowright' /></span>

        </div>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Footer />
    </div>
  )
}
