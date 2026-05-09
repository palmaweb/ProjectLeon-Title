const clocks = [
  {name:"IRAN",zone:"Asia/Tehran"},
  {name:"ISRAEL",zone:"Asia/Jerusalem"},
  {name:"EUROPE",zone:"Europe/Berlin"},
  {name:"USA",zone:"America/New_York"}
];

let clockIndex = 0;

function updateClock(){

let c = clocks[clockIndex];

let time = new Date().toLocaleTimeString(
'en-US',
{
timeZone:c.zone
}
);

document.getElementById("countryName").innerText = c.name;
document.getElementById("countryTime").innerText = time;

clockIndex++;

if(clockIndex >= clocks.length){
clockIndex = 0;
}

}

setInterval(updateClock,10000);
updateClock();



function loadData(){

let data = JSON.parse(
localStorage.getItem("broadcastData")
);

if(!data) return;


let box = document.getElementById("lowerThird");

box.style.width = data.width + "px";
box.style.height = data.height + "px";

box.style.background = data.bgColor;

document.getElementById("titleText").innerText = data.title;

document.getElementById("subtitleText").innerText = data.subtitle;

document.getElementById("titleText").style.color = data.titleColor;

document.getElementById("subtitleText").style.color = data.subtitleColor;

document.getElementById("titleText").style.fontSize =
data.titleSize + "px";

document.getElementById("subtitleText").style.fontSize =
data.subtitleSize + "px";

document.getElementById("logo").src = data.logo;

}


setInterval(loadData,500);
loadData();
