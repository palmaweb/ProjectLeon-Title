function saveData(){

    const data = {

        title:
        document.getElementById("title").value,

        subtitle:
        document.getElementById("subtitle").value,

        panelColor:
        document.getElementById("panelColor").value,

        titleColor:
        document.getElementById("titleColor").value,

        subtitleColor:
        document.getElementById("subtitleColor").value,

        logo:
        document.getElementById("logo").value,

        live:
        document.getElementById("live").value
    };

    localStorage.setItem(
        "overlayData",
        JSON.stringify(data)
    );

    alert("ذخیره شد");
}

function loadForm(){

    const saved =
    localStorage.getItem("overlayData");

    if(!saved) return;

    const data =
    JSON.parse(saved);

    document.getElementById("title").value =
    data.title || "";

    document.getElementById("subtitle").value =
    data.subtitle || "";

    document.getElementById("panelColor").value =
    data.panelColor || "#ffffff";

    document.getElementById("titleColor").value =
    data.titleColor || "#111111";

    document.getElementById("subtitleColor").value =
    data.subtitleColor || "#555555";

    document.getElementById("logo").value =
    data.logo || "";

    document.getElementById("live").value =
    data.live || "on";
}

loadForm();
