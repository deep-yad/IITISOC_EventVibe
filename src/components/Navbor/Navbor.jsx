import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import image from '../images/logo.png'
import '../Navbor/Navbor.css';
import { AuthContext} from "../../hooks/context/AuthContext";
import { useContext } from 'react';
import { useState, useRef } from 'react';
import a from "../userprofile/profilepic.jpg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useFetch from '../../hooks/useFetch';
import { useHistory} from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';
import { set } from 'date-fns';
import b from '../images/appbg.png'

function Navbor() {
  const [userImg,setuserImg]=useState(null)
  const [isActive, setisActive] = useState(false);
  const navigate=useHistory(); 
  const {user,dispatch} =useContext(AuthContext);

  
    useEffect( () => {

const fetchDATA=async()=>{

      if (user) { try {
        const response = await axios.get(`http://localhost:3000/user/${user._id}`);
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
  



  const handleClick=()=>{
   
      toast.info('Logout Succesfully ', {
        position: toast.POSITION.TOP_CENTER
    });
    
    dispatch({ type: "LOGOUT" });
    
    
  
      navigate.push("/login");
  
  }

  return (
    <>
    <ToastContainer/>
      <div className='navbor'>
   
        <div className="navnamenlooo">
          
        <img src={b} alt="" className="logoiog" />

        </div>

        <ul className="navol">
          <li className='navbaroi'><a className="navbaoi" href = "/">HOME</a></li>
          <li className='navbaroi'><a className="navbaoi" href = "/event">CREATE</a></li>
          <li className='navbaroi'><a className="navbaoi" href = "/list">BOOK</a></li>        
          <li className='navbaroi'><a className="navbaoi"href = "/AboutUs">ABOUT US</a></li>
        </ul>

        <div className='logoutnnaoe'>
        {  user ? (
        <div className='userInfoNov'>
        <span className="logoot" id = "no1"onClick={handleClick}>Logout</span> 
        <a href='/user/profile'> <div className='userImaoe'> <img id = "no2"src={userImg || a}/></div>   </a> 
         </div>
        ) :  
        
        <div className="userInfoNov">
          <span className="logoot" id = "no1" >   <a className='auoh' href='/register'>Register</a> </span>
           <span className="logoot"id = "no1" >  <a className='auoh' href='/login'>Login</a> </span> 
       
        </div>
         }
        </div>
        </div>
     
    </>
  );
}

export default Navbor;

