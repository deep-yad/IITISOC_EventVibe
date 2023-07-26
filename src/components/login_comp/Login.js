import './Login.css';
import logo from '../images/loglogo.png'
import { useContext, useState } from "react";
import { useHistory} from "react-router-dom";
import axios from 'axios';
import {AuthContext} from "../../hooks/context/AuthContext";
import Navbar from '../navbar/Navbar';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate=useHistory(); 
  const { loading, error, dispatch, login } = useContext(AuthContext);

 // const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
//  const notify=()=>{toast("Wow so easy!");};
  const handleClick = async (e) => {
     e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    setIsLoading(true);
    try {
      const res = await axios.post("https://eventvibe-f71z.onrender.com/auth/login", credentials);
      toast.success("Login Successfull", {
        position: toast.POSITION.TOP_CENTER
    });
    // const {token, details}=res.data;
    // login(token, details);
    localStorage.setItem('token', res.data.token);

    if (res.data.isAdmin || !res.data.isAdmin) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details });
      toast.success('Login Successful', { position: toast.POSITION.TOP_CENTER });
      
      // Delay navigation by 1 second to show loader
      setTimeout(() => {
        setIsLoading(false);
        navigate.push('/');
      }, 1000);
    }  else {
       
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
          
        });
        setIsLoading(false);
      
      }
    } catch (err) {
      setIsLoading(false);
      toast.error("User not found , Please try again", {
        position: toast.POSITION.TOP_CENTER
    });
    console.log(err);
    
      dispatch({ type: "LOGIN_FAILURE", payload: err.res.data });
      setIsLoading(false);
    
    }
  };


  return (
    <>
      <ToastContainer />

      {isLoading ? (
       <div class="loader"></div>
      ) : (
        <>
          <Navbar />
          <div className="flex">
            <div className="left"></div>
            <div className="create">
              <img src={logo} alt="" className="loglogo" />
              <h2 id = "log1"><b>Log in</b></h2>

              <input
                className='entry'
                type="text"
                required
                onChange={handleChange} placeholder='Username' id='username'
              />
              <input
                className='entry'
                type="password"
                required
                onChange={handleChange} placeholder='Password:' id='password'
              />
              <br /><br />

              <button className="logregbtn"><a href="/" style={{ textDecoration: "none", color: 'white' }} onClick={handleClick}><span style={{ textDecoration: "none" }}>Login </span></a></button>


              <br />
              <hr style={{ width: '237px' }} />
              <span id = "log2">Don't have an account? <span style={{ cursor: 'pointer', color: '#d1410c' }}><a href="/Register" style={{ textDecoration: 'none', color: '#d1410c' }}>Sign up!</a></span></span>
            </div>
          </div>
        </>
      )}
    </>
  );
}

 
export default Create;