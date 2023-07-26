import './createTicket.css';
import { useContext, useState } from "react";
import { TicketInputs } from "../../formSource";
import { EventInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { AuthContext } from "../../hooks/context/AuthContext";

import { DateRange } from 'react-date-range';
import { format } from "date-fns";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { setAuthToken } from '../../hooks/auth';


const NewTicket = ({ infoEvent, index }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isTicketButtonDisabled, setIsTicketButtonDisabled] = useState(false);
    const location = useLocation();
    console.log(location);
 //   const [info, setInfo] = useState({});
    const { user } = useContext(AuthContext);
    const [eventId, setEventId] = useState(undefined);

    const { data, loading, error } = useFetch(`https://eventvibe-f71z.onrender.com/ticket/${infoEvent._id}`);

    const [ticketDate, setTicketDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);



    const formik = useFormik({
        initialValues: {
            name: "",
            type: "",
            price: "",
            desc: "",
            totalTickets: "",


        },
        validationSchema: Yup.object({
            name: Yup.string().required('name is required').max(15, "name can be only 15 character long"),
            type: Yup.string().required('type is required'),
            price: Yup.string().required("price is required").min(0, "price must be positive"),
            totalTickets: Yup.string().required("Total tickets is required").min(0, "total must be positive"),
            desc: Yup.string().required("Description is required").max(100, "Description must be less than 100 words"),
        }),

        onSubmit: async (values) => {


            try {
                const token = localStorage.getItem('token');
                setIsLoading(true);
                setIsTicketButtonDisabled(true)
                toast.success(`Ticket Type ${index + 1} ,Generated Successfully`, {
                    position: toast.POSITION.TOP_CENTER
                });
                const newTicket = {
                    ...values,
                    date: ticketDate[0]
                };
                console.log(newTicket);
                //  await axios.post("/event", infoEvent); 
                setIsLoading(false);  
                
                // const token = localStorage.getItem('jwtToken');
                // setAuthToken(token);

                const response = await axios.post(`https://eventvibe-f71z.onrender.com/ticket/${infoEvent._id}`, newTicket,{ headers: {
                    Authorization: `Bearer ${token}`,
                    // Other headers if needed
                  }});
                console.log(response.data);
                console.log(infoEvent._id)

                // const token1 = localStorage.getItem('jwtToken');
                // setAuthToken(token1);

                await axios.post(`https://eventvibe-f71z.onrender.com/user/event`, { ticketId: response.data._id, userId: user._id, eventId: infoEvent._id },{ headers: {
                    Authorization: `Bearer ${token}`,
                    // Other headers if needed
                  }});
            } catch (err) {
                console.log(err);
            }
        },
    });



    /*
        const handleClick = async (e) => {
            e.preventDefault();
    
            try {
                setIsTicketButtonDisabled(true)
                toast.success(`Ticket Type ${index+1} ,Generated Successfully`, {
                    position: toast.POSITION.TOP_CENTER
                });
                const newTicket = {
                    ...info,
                    date:ticketDate[0]
                };
                console.log(newTicket);
                //  await axios.post("/event", infoEvent);    
                const response = await axios.post(`http://localhost:3000/ticket/${infoEvent._id}`, newTicket);
                console.log(response.data);
                console.log(infoEvent._id)
                await axios.post(`http://localhost:3000/user/event`, { ticketId: response.data._id, userId: user._id, eventId: infoEvent._id });
            } catch (err) {
                console.log(err);
            }
        };
    */

    return (

        <>
         {isLoading ? (
      <div class="loader"></div>
     ) : (
     <>
        <div className="newa">
            <ToastContainer />
            <div className="newContainer pop" >
                <div className="top">
                    <h1 className="toptitle"><b>Add Ticket type {index + 1}</b></h1>
                </div>

                <div className="righta">
                    <form className='inputform' >


                        <div className="formInput">

                            <b><label className="inputlabel">Name:</label></b><br />
                            <input className="inputstyle"
                                id="name"
                                type="text"

                       
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                               
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div style={{ color: "red", marginTop: "2px", fontSize: "15px" }}>{formik.errors.name}</div>
                            ) : null}
                        </div>
                        <div className="formInput">

                            <b><label className="inputlabel">type:</label></b><br />
                            <input className="inputstyle"
                                id="type"
                                type="text"

                             
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                               
                            />
                            {formik.touched.type && formik.errors.type ? (
                                <div style={{ color: "red", marginTop: "2px", fontSize: "15px" }}>{formik.errors.type}</div>
                            ) : null}
                        </div>
                        <div className="formInput">

                            <b><label className="inputlabel">Price:</label></b><br />
                            <input className="inputstyle"
                                id="price"
                                type="number"

                               min={0}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                               
                            />
                            {formik.touched.price && formik.errors.price ? (
                                <div style={{ color: "red", marginTop: "2px", fontSize: "15px" }}>{formik.errors.price}</div>
                            ) : null}
                        </div>
                        <div className="formInput">

                            <b><label className="inputlabel">Description:</label></b><br />
                            <input className="inputstyle"
                                id="desc"
                                type="text"

                               
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                
                            />
                            {formik.touched.desc && formik.errors.desc ? (
                                <div style={{ color: "red", marginTop: "2px", fontSize: "15px" }}>{formik.errors.desc}</div>
                            ) : null}
                        </div>
                        <div className="formInput">

                            <b><label className="inputlabel">TotalTickets:</label></b><br />
                            <input className="inputstyle"
                                id="totalTickets"
                                type="number"
                                min={0}
                                
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                
                            />
                            {formik.touched.totalTickets && formik.errors.totalTickets ? (
                                <div style={{ color: "red", marginTop: "2px", fontSize: "15px" }}>{formik.errors.totalTickets}</div>
                            ) : null}
                        </div>


                        {/* <div className="formInput">
                            <label>Choose a event</label>
                            <select
                                id="eventId"
                                onChange={(e) => setEventId(e.target.value)}
                            >
                                {loading
                                    ? "loading"
                                    : data &&
                                    data.map((event) => (
                                        <option key={event._id} value={event._id}>{event.name}</option>
                                    ))}
                            </select>
                        </div> */}

                        <p id='s'>{`Ticket Sale Starts ${format(ticketDate[0].startDate, "MM/dd/yyyy")} `} </p>
                        <p id='s'>{`Ticket Sale Ends ${format(ticketDate[0].endDate, "MM/dd/yyyy")} `} </p>

                        {!isTicketButtonDisabled &&
                            <DateRange
                                editableDateInputs={true}
                                onChange={item => setTicketDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={ticketDate}
                                minDate={new Date()}
                            />}

                        <div style={{ display: 'flex', textAlign: "center", alignItems: "center" }}>
                            <button className="createtktbtn" type='submit' onClick={formik.handleSubmit} disabled={isTicketButtonDisabled}>Create Tickets</button>

                        </div>
                        {isTicketButtonDisabled && <small>*Ticket Generated and Form is <b>Locked</b> </small>}
                    </form>

                </div>
            </div>



        </div>
        </>)}
        </>

    );
};

export default NewTicket;