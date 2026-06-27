var state = getState();

var w = document.getElementById("w");
var h = document.getElementById("h");
var logo = document.getElementById("logo");
var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");

function apply() {
  state.width = parseInt(w.value || 1200);
  state.height = parseInt(h.value || 150);
  state.logo = logo.value;
  state.title1 = t1.value;
  state.title2 = t2.value;

  setState(state);
}

// bind live
[w,h,logo,t1,t2].forEach(function(el){
  el.oninput = apply;
});

// init
function load() {
  w.value = state.width;
  h.value = state.height;
  logo.value = state.logo;
  t1.value = state.title1;
  t2.value = state.title2;
}
load();
