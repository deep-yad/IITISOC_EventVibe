import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser} from '@fortawesome/free-solid-svg-icons'
import image from '../images/logo.png'
import '../navbar/Navbar.css';
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
import { setAuthToken } from '../../hooks/auth';

function Navbar() {
  const [userImg,setuserImg]=useState(null)
  const [isActive, setisActive] = useState(false);
  const navigate=useHistory(); 
  const {user,dispatch, logout} =useContext(AuthContext);

  
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
  



  const handleClick=()=>{
   
      toast.info('Logout Succesfully ', {
        position: toast.POSITION.TOP_CENTER
    });
    
    dispatch({ type: "LOGOUT" });
    
    
   logout();
      navigate.push("/login");
  
  }

  return (
    <>
    <ToastContainer/>
      <div className='navbar'>
   
        <div className="navnamenlogo">
          
        <img src={b} alt="" className="logoimg" />

        </div>

        <ul className="navul">
          <li className='navbarli'><a className="navbari" href = "/">HOME</a></li>
          <li className='navbarli'><a className="navbari" href ={user ?"/event" :"/login" } >CREATE</a></li>
          <li className='navbarli'><a className="navbari" href = "/list">BOOK</a></li>        
          <li className='navbarli'><a className="navbari"href = "/AboutUs">ABOUT US</a></li>
        </ul>

        <div className='logoutnname'>
        {  user ? (
        <div className='userInfoNav'>
        <span className="logout" id = "na1"onClick={handleClick}>Logout</span> 
        <a href='/user/profile'> <div className='userImage'> <img id = "na2"src={userImg || a}/></div>   </a> 
         </div>
        ) :  
        
        <div className="userInfoNav">
          <span className="logout" id = "na1" >   <a className='auth' href='/register'>Register</a> </span>
           <span className="logout"id = "na1" >  <a className='auth' href='/login'>Login</a> </span> 
       
        </div>
         }
        </div>
        </div>
     
    </>
  );
}

export default Navbar;

