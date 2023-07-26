import './App.css';
import Home from './pages/home/Home';
import Login from './components/login_comp/Login.js';
import Register from './components/login_comp/Register.js';
import Book from './components/book/Book.js';
import IndividualEvent from './pages/events/Event';
import createEvent from "../src/components/createEvent/createEvent"
import EditEvent from "../src/components/editEvent/editEvent"
import BookedEvents from "../src/components/userBookedEvents/allEvents.jsx"
import CreatedEvents from './components/userCreatedEvents/allEvents.jsx';
import { BrowserRouter as  Router, Switch, Route} from 'react-router-dom';
import Business from './components/userCreatedEvents/businessDetails';
import Payment from './components/paymentConfirmation/confirmation';
import AllEventsPage from "./components/EventByType/EventByTypePage";
import AllEventsCountryPage from "./components/EventByType/EventByCountry";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/AboutUs/About';
import UserProfile from './components/userprofile/userProfile';
import PaymentDetails from './components/TransactionDetails/paymentDetails';

function App() {
  return (
    <Router>

     
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exach path ="/list" component={Book}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/event" component={createEvent}></Route>
        <Route exact path="/booked/event" component={BookedEvents}></Route>
        <Route exact path="/created/event" component={CreatedEvents}></Route>
        <Route exact path="/event/edit" component={EditEvent}></Route>
        <Route exact path="/event/:id" component={IndividualEvent}></Route>
        <Route exact path="/user/details/:id" component={Business}></Route>
        <Route exact path="/confirm" component={Payment}></Route>
        <Route exact path="/event/genre/:type" component={AllEventsPage}></Route>
        <Route exact path="/event/location/:country" component={AllEventsCountryPage}></Route>
        <Route exact path="/AboutUs" component={AboutUs}></Route>
        <Route exact path="/confirm" component={Payment}></Route>
        <Route exact path="/user/profile" component={UserProfile}></Route>
        <Route exact path="/bookings/:id" component={PaymentDetails}></Route>
        </Switch>
      
    </Router>  
  );
}

export default App;
