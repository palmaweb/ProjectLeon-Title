const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".section");

const inputs = document.querySelectorAll("input, textarea, select");

// TAB SYSTEM (FIXED)
tabs.forEach(t=>{
t.onclick=()=>{

tabs.forEach(x=>x.classList.remove("active"));
sections.forEach(s=>s.classList.remove("active"));

t.classList.add("active");

document.getElementById(
t.dataset.tab
).classList.add("active");

}
});

// SAVE DATA
function saveData(){

const data = {
width: width.value,
height: height.value,
radius: radius.value,
title: title.value,
subtitle: subtitle.value,
titleFont: titleFont.value,
subtitleFont: subtitleFont.value,
bgColor: bgColor.value,
titleColor: titleColor.value,
subtitleColor: subtitleColor.value,
transition: transition.value
};

localStorage.setItem("broadcast_pro", JSON.stringify(data));

}

// AUTO SAVE
inputs.forEach(i=>{
i.addEventListener("input", saveData);
});

// MANUAL SAVE BUTTON
document.getElementById("saveBtn").onclick = saveData;


// LOAD DEFAULTS
function load(){

let data = JSON.parse(localStorage.getItem("broadcast_pro"));

if(!data) return;

// set values if exist
for(let key in data){
let el = document.getElementById(key);
if(el) el.value = data[key];
}

}

load();
