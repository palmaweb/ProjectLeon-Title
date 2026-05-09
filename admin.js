const STORAGE_KEY = "STUDIO_STATE";

// default state
const defaultState = {
width:1200,
height:200,
radius:20,
title:"BREAKING NEWS",
subtitle:"Live Broadcast",
titleFont:"IRANSans",
subtitleFont:"IRANSans",
bgColor:"#1e1e1e",
titleColor:"#ffffff",
subtitleColor:"#cccccc",
transition:"fade"
};

// load state
function getState(){
return JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultState;
}

// save state
function setState(state){
localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// apply UI from state
function loadUI(){

const s = getState();

Object.keys(s).forEach(k=>{
let el = document.getElementById(k);
if(el) el.value = s[k];
});

}

// collect UI
function collect(){

return {
width:+width.value,
height:+height.value,
radius:+radius.value,
title:title.value,
subtitle:subtitle.value,
titleFont:titleFont.value,
subtitleFont:subtitleFont.value,
bgColor:bgColor.value,
titleColor:titleColor.value,
subtitleColor:subtitleColor.value,
transition:transition.value
};

}

// save live
function save(){
setState(collect());
}

// EVENTS (IMPORTANT FIX)
document.querySelectorAll("input,textarea,select")
.forEach(el=>{
el.addEventListener("input", save);
});

// TAB SYSTEM FIX
document.querySelectorAll(".tab").forEach(t=>{
t.onclick=()=>{
document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));

t.classList.add("active");
document.getElementById(t.dataset.tab).classList.add("active");
};
});

// RESET
document.getElementById("resetBtn").onclick=()=>{
setState(defaultState);
loadUI();
save();
};

// INIT
loadUI();
save();
