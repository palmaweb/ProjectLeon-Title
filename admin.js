// Tabs
document.querySelectorAll(".tab").forEach(btn=>{
btn.onclick=()=>{
document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));

btn.classList.add("active");
document.getElementById(btn.dataset.tab).classList.add("active");
}
});

// Save live data
function save(){

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
leftColor: leftColor.value,
rightColor: rightColor.value,
transition: transition.value
};

localStorage.setItem("overlay", JSON.stringify(data));
}

document.querySelectorAll("input,textarea,select")
.forEach(el=>{
el.addEventListener("input", save);
});

save();
