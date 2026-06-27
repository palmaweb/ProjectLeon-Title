var CHANNEL_NAME = "subtitle_broadcast_channel";

// BroadcastChannel (real-time)
var channel = null;

if (typeof BroadcastChannel !== "undefined") {
  channel = new BroadcastChannel(CHANNEL_NAME);
}

// STATE
function getState() {
  var data = localStorage.getItem("subtitle_state");
  return data ? JSON.parse(data) : {
    width: 1200,
    height: 150,
    logo: "",
    icon: "",
    title1: "LIVE NEWS",
    title2: "Breaking update..."
  };
}

function setState(state) {
  localStorage.setItem("subtitle_state", JSON.stringify(state));

  // real-time push
  if (channel) {
    channel.postMessage(state);
  }
}

// LISTENER for viewer/admin sync
function subscribe(callback) {
  if (channel) {
    channel.onmessage = function(e) {
      callback(e.data);
    };
  }

  // fallback polling (for Vimix/WebView)
  setInterval(function () {
    callback(getState());
  }, 800);
}
