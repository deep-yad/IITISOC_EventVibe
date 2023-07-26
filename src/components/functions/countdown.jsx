export default function CountDown({Eventdate}){

   var countDown = new Date(Eventdate).getTime;
 var x=setInterval(function(){var now=new Date().getTime();
   var distance = countDown-now;
  
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
return <div>In {days} Days {hours} Hours {minutes} Mins {seconds} Seconds  </div>
},1000)

}

