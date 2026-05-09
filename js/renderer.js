function applySettings(state) {

  const container = document.querySelector(".ticker-container");
  const title = document.querySelector(".title");
  const subtitle = document.querySelector(".subtitle");

  // container
  container.style.width = state.container.width + "px";
  container.style.height = state.container.height + "px";
  container.style.backgroundColor = state.container.bgColor;
  container.style.opacity = state.container.opacity;

  // title
  title.innerText = state.title.text;
  title.style.fontFamily = state.title.font;
  title.style.fontWeight = state.title.weight;
  title.style.fontSize = state.title.size + "px";
  title.style.color = state.title.color;

  // subtitle
  subtitle.innerText = state.subtitle.text;
  subtitle.style.fontFamily = state.subtitle.font;
  subtitle.style.fontWeight = state.subtitle.weight;
  subtitle.style.fontSize = state.subtitle.size + "px";
  subtitle.style.color = state.subtitle.color;
}

// live sync listener
window.addEventListener("broadcast_update", () => {
  applySettings(loadState());
});
