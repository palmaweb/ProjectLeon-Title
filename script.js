const KEY = "STUDIO_STATE";

function render(){

const s = JSON.parse(localStorage.getItem(KEY));
if(!s) return;

const box = document.getElementById("overlay");

box.style.width = s.width + "px";
box.style.height = s.height + "px";
box.style.borderRadius = s.radius + "px";

box.style.background = s.bgColor;

document.getElementById("title").innerText = s.title;
document.getElementById("subtitle").innerText = s.subtitle;

document.getElementById("title").style.color = s.titleColor;
document.getElementById("subtitle").style.color = s.subtitleColor;

document.getElementById("title").style.fontFamily = s.titleFont;
document.getElementById("subtitle").style.fontFamily = s.subtitleFont;

box.className = s.transition;

}

setInterval(render, 200);
render();
