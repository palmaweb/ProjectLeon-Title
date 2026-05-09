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

function load(){

const data = JSON.parse(localStorage.getItem("broadcast_pro"));
if(!data) return;

document.getElementById("overlay").style.width = data.width+"px";
document.getElementById("overlay").style.height = data.height+"px";

document.getElementById("title").innerText = data.title;
document.getElementById("subtitle").innerText = data.subtitle;

document.getElementById("overlay").style.background = data.bgColor;

document.getElementById("title").style.color = data.titleColor;
document.getElementById("subtitle").style.color = data.subtitleColor;
}

setInterval(load, 300);
