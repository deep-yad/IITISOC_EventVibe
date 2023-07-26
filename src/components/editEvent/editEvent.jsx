//import "./createEvent.css";
import Navbar from "../navbar/Navbar";
import { useState } from "react";
import { EventInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";


const EditEvent = ({infoEvent}) => {
  
  
  const [info, setInfo] = useState({});
  const [eventId, setEventId] = useState(undefined);
  
  const { data, loading, error } = useFetch(`http://localhost:3000/event/${infoEvent._id}`);

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

    // const handleSelect = (e) => {
    //   const value = Array.from(
    //     e.target.selectedOptions,
    //     (option) => option.value
    //   );
    //   setTickets(value);
    // };
    // console.log(value)

  const handleClick = async (e) => {
    e.preventDefault();
    try {
     const updatedevent={...info};
      console.log(info);
      const response=await axios.post(`http://localhost:3000/event/${infoEvent._id}`, updatedevent);
     
      }
       catch (err) { console.log(err) }
  };
 
  return (
    <div className="new">
      <Navbar />

      <div className="newContainer" style={{margin:100}}>
        <div className="top">
          <h1>Edit Event</h1>
        </div>

        <div className="right">
          <form>

            {EventInputs.map((input) => (
              <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input
                  id={input.id}
                  onChange={handleChange}
                  type={input.type}
                  value={infoEvent.value}
                  placeholder={input.placeholder}
                />
              </div>
            ))}
            <div className="formInput">
              <label>Featured</label>
              <select id="featured" onChange={handleChange}>
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </select>
            </div>
            <div className="formInput">
              <label>Free or Paid</label>
              <select id="freeOrPaid" onChange={handleChange}>
                <option value={true}>Free</option>
                <option value={false}>Paid</option>
              </select>
            </div>
            {/* <div className="selectTickets">
                <label>Tickets</label>
                <select id="tickets" multiple onChange={handleSelect}>
                  {loading
                    ? "loading"
                    : data &&
                      data.map((ticket) => (
                        <option key={ticket._id} value={ticket._id}>
                          {ticket.title}
                        </option>
                      ))}
                </select>
              </div> */}

            <button className="btn btn-outline-success" onClick={handleClick}>Update</button>
          </form>
        </div>
      </div>

    </div>

  );
};

export default EditEvent;
