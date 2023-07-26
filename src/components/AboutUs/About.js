
import "./About.css";
import Navbor from "../Navbor/Navbor";
import Footer from '../footer/Footer'
import { Nav } from "react-bootstrap";
import a from '../images/contfourbg.jpg'
// import img from "./ticket.png";
// import sort from './sort1.png';
// import ic1 from './ic1.avif';
// import qr from './qr.png';
import b from '../images/ab1.svg'
import c from '../images/ab2.svg'
import d from '../images/ab3.svg'
import e from '../images/ab4.png'
import f from '../images/abo1.jpg'
import g from '../images/abo2.jpg'
import h from '../images/abo3.jpg'
import i from '../images/abo4.jpg'
import j from '../images/abo5.jpg'
import k from '../images/abo6.jpg'
const AboutUs = () => {
    return (
    <div className="homee">
        <Navbor/>
        <div id="ab1">
            <div id="ab2">
                <div className="lonetit">Publish your event in under <span style = {{color:'yellow'}}>five</span> minutes.</div>
                <div className="lonecontent" id = "ab14">Promote your event across EventVibe and get 14x more visibility on our homepage, related events, search results, and more. We offer tailored packages for event pros with unique needs. Get customized fee schedule, personalized support, and more individualized features by partnering with our sales team!</div>


            </div>
            <div className="imim" style={{backgroundColor:'rgb(31,31,31)', display:'flex', justifyContent:'center'}}>REASONS TO CHOOSE EVENTVIBE</div>
            <div id="ab3">
                <div id="ab4">
                    <div id="numb">01</div>
                    <div id="title">EASY EVENT SETUP</div>
                    <div id="content">
                        <p>List your event in under five minutes. Our all-in-one platform lets you set up, customise, sell event tickets, host them, generate reports and collect payments</p>
                    </div>
                    <div id="ab5"><img src={b} alt="" id = "ab6"/></div>
                </div>
                <div id="ab4">
                    <div id="ab5" ><img src={c} className="ab7"alt="" id = "ab6"/></div>
                    <div id="numb">02</div>
                    <div id="title">SMART TICKETING</div>
                    <div id="content">
                        <p>Integrated attendee management and guest list management. An event ticketing system with automated reminders to ticket buyers.</p>
                    </div>
                </div>
                <div id="ab4">
                    <div id="numb">03</div>
                    <div id="title">HOST VIRTUAL EXPERIENCES</div>
                    <div id="content">
                        <p>Stream live or pre-recorded content while you engage and interact with your audience via live chat, polls, Q&A and more.</p>
                    </div>
                    <div id="ab5"><img src={d} alt="" id = "ab6"/></div>
                </div>
                <div id="ab4">
                    
                <div id="ab5"><img src={e} className="ab7" alt="" id = "ab6"/></div>
                    <div id="numb">01</div>
                    <div id="title">SAFETY MEASURES</div>
                    <div id="content">
                        <p>Specify safety measures you will have at your event keeping your customer at ease.</p>
                    </div>
                </div><br/><br/>
            </div>
            <div className="soldinfo">
                <div className="soldinfocont">
                    <div className="soldinfobox"><span id="ab8"><b>32+</b></span><br/><span id="ab9">EVENTS CREATED</span></div>
                    <div className="soldinfobox"><span id="ab8"><b>32+</b></span><br/><span id="ab9">TICKETS BOOKED</span></div>
                    <div className="soldinfobox"><span id="ab8"><b>32+</b></span><br/><span id="ab9">USERS</span></div>
                </div>
            </div>
            <div className="allsolns">
                <span className="ab10">DISCOVER ALL TYPES OF EVENTS on <span style={{color:'greenyellow'}}>EVENTVIBE!</span></span><br/>
                <div className="allsolncont">
                    <div className="allsolnbox"><img id = "ab11"src={f} alt="" /><div className="ab12"> MUSIC EVENTS</div></div>
                    <div className="allsolnbox"><img id = "ab11"src={g} alt="" /><div className="ab12"> CORPORATE EVENTS</div></div>
                    <div className="allsolnbox"><img id = "ab11"src={h} alt="" /><div className="ab12"> ONLINE EVENTS</div></div>
                    <div className="allsolnbox"><img id = "ab11"src={i} alt="" /><div className="ab12"> FOOD AND BEVERAGE EVENTS</div></div>
                    <div className="allsolnbox"><img id = "ab11"src={j} alt="" /><div className="ab12"> PERFOMANCE AND ARTS</div></div>
                    <div className="allsolnbox"><img id = "ab11"src={k} alt="" /><div className="ab12"> HANDS-ON WORKSHOPS</div></div> 
                </div>
                <span id = "ab13">So what's stopping you now? <a href = "/list" style={{textDecoration:'none', color:'red'}}>Book</a>/<a href = "/event" style={{textDecoration:'none', color:'red'}}>Create</a> your first event on <span style={{color:'greenyellow'}}>EventVibe</span>, and give wings to your event ticketing journey!!</span><br/><br/>
            </div>
{/*            
            <div><Footer/></div> */}
        </div>
        
    </div>
            
)
    };
export default AboutUs;