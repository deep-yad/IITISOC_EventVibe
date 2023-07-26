import { useHistory } from 'react-router-dom';

const EventCard = ({ type }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/event/genre/${type}`);
  };

  return (
          <span className='genrename' onClick={handleClick}><b>{type} Events</b></span>
   
  );
};

export default EventCard;