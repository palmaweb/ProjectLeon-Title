function getState() {
  var data = localStorage.getItem("subtitle_state");

  return data ? JSON.parse(data) : {
    width: 1200,
    height: 150,
    logo: "",
    icon: "",
    title1: "تیتر اصلی",
    title2: "زیرتیتر"
  };
}

function setState(state) {
  localStorage.setItem("subtitle_state", JSON.stringify(state));

  // این خط باعث میشه viewer سریع بفهمه تغییر شده
  localStorage.setItem("subtitle_ping", Date.now());
}

/* =======================
   VIEWER MODE
======================= */
if (location.href.indexOf("viewer") !== -1) {

  var logo = document.getElementById("logo");
  var icon = document.getElementById("icon");
  var t1 = document.getElementById("t1");
  var t2 = document.getElementById("t2");

  function render() {
    var s = getState();
    logo.src = s.logo;
    icon.src = s.icon;
    t1.innerText = s.t1;
    t2.innerText = s.t2;
  }

  setInterval(render, 500);
}

/* =======================
   ADMIN MODE
======================= */
if (location.href.indexOf("admin") !== -1) {

  var s = getState();

  var logo = document.getElementById("logo");
  var icon = document.getElementById("icon");
  var t1 = document.getElementById("t1");
  var t2 = document.getElementById("t2");

  var status = document.getElementById("status");

  // load saved
  logo.value = s.logo;
  icon.value = s.icon;
  t1.value = s.t1;
  t2.value = s.t2;

  function update() {
    setState({
      logo: logo.value,
      icon: icon.value,
      t1: t1.value,
      t2: t2.value
    });
  }

  logo.oninput = update;
  icon.oninput = update;
  t1.oninput = update;
  t2.oninput = update;

  // 💾 SAVE BUTTON
  document.getElementById("saveBtn").onclick = function () {
    update();
    status.innerText = "✔ ذخیره شد";
    setTimeout(function(){
      status.innerText = "";
    }, 1500);
  };

  // 🔄 RESET BUTTON
  document.getElementById("resetBtn").onclick = function () {
    var defaultState = {
      logo: "",
      icon: "",
      t1: "تیتر اصلی",
      t2: "زیرتیتر"
    };

    setState(defaultState);

    logo.value = defaultState.logo;
    icon.value = defaultState.icon;
    t1.value = defaultState.t1;
    t2.value = defaultState.t2;

    status.innerText = "↩ بازنشانی شد";
    setTimeout(function(){
      status.innerText = "";
    }, 1500);
  };
}
