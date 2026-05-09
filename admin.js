function saveData(){

let data = {

width:
document.getElementById("width").value,

height:
document.getElementById("height").value,

bgColor:
document.getElementById("bgColor").value,

title:
document.getElementById("title").value,

subtitle:
document.getElementById("subtitle").value,

titleColor:
document.getElementById("titleColor").value,

subtitleColor:
document.getElementById("subtitleColor").value,

titleSize:
document.getElementById("titleSize").value,

subtitleSize:
document.getElementById("subtitleSize").value,

logo:
document.getElementById("logo").value

};

localStorage.setItem(
"broadcastData",
JSON.stringify(data)
);

alert("Saved");

}
