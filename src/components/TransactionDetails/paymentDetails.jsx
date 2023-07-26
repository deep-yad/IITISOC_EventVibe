

import { setAuthToken } from '../../hooks/auth';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './paymentDetails.css'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import { useState } from 'react';
export default function PaymentDetails() {
      const location=useLocation();
      console.log(location)
      const id=location.pathname.split('/')[2];
      
      console.log(id)
      // const token = localStorage.getItem('jwtToken');
      // setAuthToken(token);

      const {data,error,loading}=useFetch(`https://eventvibe-f71z.onrender.com/event/orders/${id}`);
      console.log(data)

      const [orderid,setOrderId]=useState('');
      const [paymentid,setPaymentId]=useState('');
    //   const {data:search}=useFetch(`http://localhost:3000/event/orders/search?orderId=${orderid}&paymentId=${paymentid}`);

      const handleChange2=(e)=>{
        e.preventDefault();
        setPaymentId(e.target.value)

      }
      const handleChange1=(e)=>{
        e.preventDefault();
        setOrderId(e.target.value)

      }

console.log("k")
    return (

        <div className="unit">
            <h1 id = "pd1"style={{color:'black'}}>TICKET DETAILS</h1>
            
            <div className="ticket">
           
                    <div class="col-md-12">

                        <span id = "pd4" style={{marginLeft:'190px'}}> <label htmlFor="inputdefault">
                            TRANSACTION ID :
                        </label>
                            <input className="col-xs-3 " id="inputdefault" type="text" placeholder="Trans ID" onChange={handleChange1}/></span>

                        <span id = "pd5" style={{marginLeft:'190px'}}><label htmlFor="inputdefault">
                            SEARCH :
                        </label><input className="col-xs-4" id="inputdefault" type="text" placeholder="search" onChange={handleChange2}/></span>


                    </div>
                  <div  style={{ width: '100%' }}>

<div className='result'>
{/* 
{search ? <><h3>Order_id: {search.razorpay?.orderId}</h3>
<h3>Payment_id: {search.razorpay?.paymentId}</h3>
<h3>Amount: {search.amount}</h3></> : <h1>Order Not Found</h1> } */}


</div>



                    <Table style={{ width: '1200px',border:"solid"}}>
      {/* <Thead> */}
      <Tbody id="pd6">
        <Tr id = "pd2" style={{color:'black'}}>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Contact no</Th>
          {/* <Th>Name</Th> */}
          <Th>Order_Id</Th>
          <Th>Payment_id</Th>
          <Th>Quantity</Th>
          <Th>Ticket Type</Th>
        
        </Tr>
      {/* </Thead> */}   
     {data.map(order=>(<>
        <Tr >
          <Td>{order.userId.firstname} {order.userId.lastname}</Td>
          <Td>{order.userId.email}</Td>
          <Td>{order.userId.contactNo}</Td>
          <Td>{order.orderDetail.razorpay.orderId}</Td>
          <Td>{order.orderDetail.razorpay.paymentId}</Td>
          <Td>{order.quantity}</Td>
          <Td>{order.ticketId.type}</Td>
        </Tr>
     </>))}
      
      </Tbody>
    </Table>
    </div>
    </div>
    </div>

          
   










    );






}