const clocks = [
 {name:"IRAN", zone:"Asia/Tehran"},
 {name:"ISRAEL", zone:"Asia/Jerusalem"},
 {name:"EUROPE", zone:"Europe/Berlin"},
 {name:"USA", zone:"America/New_York"}
];

let i=0;

function updateClock(){

 let c=clocks[i];

 let time=new Date().toLocaleTimeString(
   "en-US",
   {timeZone:c.zone}
 );

 document.getElementById("countryName").innerText=c.name;
 document.getElementById("countryTime").innerText=time;

 i++;
 if(i>=clocks.length) i=0;
}

updateClock();
setInterval(updateClock,10000);
