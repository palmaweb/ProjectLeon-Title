function saveData(){

    localStorage.setItem(
        "title",
        document.getElementById("title").value
    );

    localStorage.setItem(
        "subtitle",
        document.getElementById("subtitle").value
    );

    localStorage.setItem(
        "panelColor",
        document.getElementById("panelColor").value
    );

    localStorage.setItem(
        "titleColor",
        document.getElementById("titleColor").value
    );

    localStorage.setItem(
        "subtitleColor",
        document.getElementById("subtitleColor").value
    );

    localStorage.setItem(
        "logo",
        document.getElementById("logo").value
    );

    localStorage.setItem(
        "live",
        document.getElementById("live").value
    );

    alert("ذخیره شد");
}
