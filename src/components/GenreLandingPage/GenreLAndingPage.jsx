import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapLocationDot, faArrowTrendUp, faBed, faCalendarDays, faList, faLocationDot, faUserGraduate, faMasksTheater, faHeartPulse, faGamepad, faMusic, faChildren, faClockRotateLeft, faFootball } from '@fortawesome/free-solid-svg-icons';
import EventCard from '../EventByType/EventByType';

export default function Genre() {

  return (
    <div className="genrecontainer">
      <a  style={{textDecoration:"none"}}  href='/event/genre/Music'> <div className="genrebox"><FontAwesomeIcon className='genreicon' icon={faUserGraduate} /><br />
        <EventCard type="Music" />
      </div></a>
      <a   style={{textDecoration:"none"}} href='/event/genre/Sports'> <div className="genrebox"><FontAwesomeIcon className='genreicon' icon={faFootball} /><br />
        <EventCard type="Sports" />
      </div></a>
      <a   style={{textDecoration:"none"}} href='/event/genre/Health'> <div className="genrebox"><FontAwesomeIcon className='genreicon' icon={faHeartPulse} /><br />
        <EventCard type="Health" />
      </div></a>
      <a  style={{textDecoration:"none"}} href='/event/genre/Dance'> <div className="genrebox"><FontAwesomeIcon className='genreicon' icon={faGamepad} /><br />
        <EventCard type="Dance" />
      </div></a>
      <a  style={{textDecoration:"none"}} href='/event/genre/Festival'> <div className="genrebox"><FontAwesomeIcon className='genreicon' icon={faMusic} /><br />
        <EventCard type="Festival" />
      </div></a>
      <a  style={{textDecoration:"none"}} href='/event/genre/Gaming'> <div className="genrebox"><FontAwesomeIcon className='genreicon' icon={faChildren} /><br />
        <EventCard type="Gaming" />
      </div></a>
    </div>
  )






}