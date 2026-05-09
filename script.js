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
