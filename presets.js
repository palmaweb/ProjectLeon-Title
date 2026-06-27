function setPreset(name) {
  var s = getState();

  if (name === "fox") {
    s.width = 1200;
    s.height = 140;
    s.title1 = "FOX NEWS ALERT";
    s.title2 = "Breaking live update";
  }

  if (name === "news") {
    s.width = 1200;
    s.height = 150;
    s.title1 = "NEWS UPDATE";
    s.title2 = "Latest information";
  }

  setState(s);
}
