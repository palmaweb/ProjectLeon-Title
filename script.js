const zones = [
{label:"IRAN", zone:"Asia/Tehran"},
{label:"ISRAEL", zone:"Asia/Jerusalem"},
{label:"EUROPE", zone:"Europe/Berlin"},
{label:"USA", zone:"America/New_York"}
];

let current = 0;

function updateClock(){
const z = zones[current];

const time = new Date().toLocaleTimeString("en-US",{
timeZone:z.zone
});

document.getElementById("clock").innerHTML=
`${z.label}<br>${time}`;

current=(current+1)%zones.length;
}

updateClock();
setInterval(updateClock,10000);

window.addEventListener("storage",()=>{

const data=JSON.parse(localStorage.getItem("newsData"));

if(!data) return;

const box=document.getElementById("newsBox");
const title=document.getElementById("title");
const desc=document.getElementById("desc");

box.style.width=data.width+"px";
box.style.height=data.height+"px";
box.style.background=data.bg;

title.innerText=data.title;
desc.innerText=data.desc;

title.style.color=data.titleColor;
desc.style.color=data.descColor;

title.style.fontSize=data.titleSize+"px";
desc.style.fontSize=data.descSize+"px";

title.style.fontFamily=data.font;
desc.style.fontFamily=data.font;

document.getElementById("logo").src=data.logo;

title.className=data.effect;
desc.className=data.effect;

});

dispatchEvent(new Event("storage"));
