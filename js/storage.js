const STORAGE_KEY = "broadcast_settings";

// default state
const defaultState = {
  title: {
    text: "BREAKING NEWS",
    font: "IRANYekanX",
    weight: 700,
    size: 36,
    color: "#ffffff"
  },
  subtitle: {
    text: "Live Update System",
    font: "Vazirmatn",
    weight: 400,
    size: 24,
    color: "#cccccc"
  },
  container: {
    width: 1200,
    height: 90,
    bgColor: "#0f1423",
    opacity: 0.75
  },
  icon: {
    type: "live",
    enabled: true
  },
  transition: {
    type: "fade",
    duration: 500
  }
};

// save
function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new Event("broadcast_update"));
}

// load
function loadState() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultState;
}
