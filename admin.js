// admin.js

const navItems = document.querySelectorAll(".navItem");
const tabs = document.querySelectorAll(".tab");

navItems.forEach(btn=>{

btn.onclick=()=>{

navItems.forEach(n=>n.classList.remove("active"));
tabs.forEach(t=>t.classList.remove("active"));

btn.classList.add("active");

document
.getElementById(btn.dataset.tab)
.classList.add("active");

};

});


// LIVE PREVIEW

const widthInput =
document.getElementById("width");

const heightInput =
document.getElementById("height");

const radiusInput =
document.getElementById("radius");

const opacityInput =
document.getElementById("opacity");

const mainBg =
document.getElementById("mainBg");

const overlay =
document.getElementById("previewOverlay");

function updatePreview(){

overlay.style.width =
widthInput.value + "px";

overlay.style.height =
heightInput.value + "px";

overlay.style.borderRadius =
radiusInput.value + "px";

overlay.style.opacity =
opacityInput.value;

overlay.style.background =
mainBg.value;


// TITLE

document.getElementById(
"previewTitle"
).innerText =
document.getElementById(
"titleTextInput"
).value;

document.getElementById(
"previewTitle"
).style.fontSize =
document.getElementById(
"titleSize"
).value + "px";

document.getElementById(
"previewTitle"
).style.color =
document.getElementById(
"titleColor"
).value;


// SUBTITLE

document.getElementById(
"previewSubtitle"
).innerText =
document.getElementById(
"subtitleInput"
).value;

document.getElementById(
"previewSubtitle"
).style.fontSize =
document.getElementById(
"subtitleSize"
).value + "px";

document.getElementById(
"previewSubtitle"
).style.color =
document.getElementById(
"subtitleColor"
).value;


// LOGO

document.getElementById(
"previewLogo"
).src =
document.getElementById(
"logoURL"
).value;


// LOGO BG

document.getElementById(
"previewLeft"
).style.background =
document.getElementById(
"logoBg"
).value;


// CLOCK BG

document.getElementById(
"previewClock"
).style.background =
document.getElementById(
"clockBg"
).value;


// CLOCK COLOR

document.getElementById(
"previewClock"
).style.color =
document.getElementById(
"clockColor"
).value;

}

document.querySelectorAll(
"input, textarea, select"
).forEach(el=>{

el.addEventListener(
"input",
updatePreview
);

});

updatePreview();


// CLOCK

const clocks = [

{
name:"IRAN",
zone:"Asia/Tehran"
},

{
name:"ISRAEL",
zone:"Asia/Jerusalem"
},

{
name:"EUROPE",
zone:"Europe/Berlin"
},

{
name:"USA",
zone:"America/New_York"
}

];

let clockIndex = 0;

function updateClock(){

let c = clocks[clockIndex];

let time = new Date()
.toLocaleTimeString(
'en-US',
{
timeZone:c.zone
}
);

document.getElementById(
"previewCountry"
).innerText = c.name;

document.getElementById(
"previewTime"
).innerText = time;

clockIndex++;

if(clockIndex >= clocks.length){
clockIndex = 0;
}

}

setInterval(updateClock,10000);
updateClock();
