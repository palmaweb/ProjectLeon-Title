var box = document.getElementById("cg");

var logo = document.getElementById("logo");
var icon = document.getElementById("icon");
var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");

function render(state) {
  box.style.width = state.width + "px";
  box.style.height = state.height + "px";

  logo.src = state.logo || "";
  icon.src = state.icon || "";

  t1.innerText = state.title1;
  t2.innerText = state.title2;
}

// init
render(getState());

// LIVE STREAM
subscribe(render);
