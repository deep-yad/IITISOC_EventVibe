import './UpcomingEvents.css'
import useFetch from '../../hooks/useFetch';
import a from '../images/cntr1.jpg';
import b from '../images/cntr2.jpg';
import c from '../images/cntr3.jpeg';
import d from '../images/cntr4.jpg';
import e from '../images/cntr5.jpg';
import f from '../images/cntr6.jpeg';


export default function Upcoming() {

  const { data, loading, error } = useFetch("https://eventvibe-f71z.onrender.com/event/countbycountries?country=India,Sweden,United States,Russia,Australia,Japan")
  console.log(data);

  return (
    <div className="contthreecontainer idli">
      <div className="contthreebox"><a href="/event/location/India"><img src={a} className="contthreeboximg" ></img></a>
        <h5 className="cthrevecou"> <b>{data[0]}+</b> events</h5><b className='countryname' >India</b></div>
      <div className="contthreebox"><a href="/event/location/Sweden"><img src={b} className="contthreeboximg" ></img></a>
        <h5 className="cthrevecou"> <b>{data[1]}+</b> events</h5><b className='countryname' >Sweden</b></div>
      <div className="contthreebox"><a href="/event/location/USA"><img src={c} className="contthreeboximg" ></img></a>
        <h5 className="cthrevecou"> <b>{data[2]}+</b> events</h5><b className='countryname' >Uniteb States</b></div>
      <div className="contthreebox"><a href="/event/location/Russia"><img src={d} className="contthreeboximg" ></img></a>
        <h5 className="cthrevecou"> <b>{data[3]}+</b> events</h5><b className='countryname' >Russia</b></div>
      <div className="contthreebox"><a href="/event/location/Australia"><img src={e} className="contthreeboximg" ></img></a>
        <h5 className="cthrevecou"> <b>{data[4]}+</b> events</h5><b className='countryname' >Australia</b></div>
      <div className="contthreebox"><a href="/event/location/Japan"><img src={f} className="contthreeboximg" ></img></a>
        <h5 className="cthrevecou">{data[5]}+ events</h5><b className='countryname' >Japan</b></div>
    </div>
  )



}