function saveData(){

    const data = {

        title:
        document.getElementById("title").value,

        subtitle:
        document.getElementById("subtitle").value,

        logo:
        document.getElementById("logo").value,

        bg:
        document.getElementById("bg").value,

        leftColor:
        document.getElementById("leftColor").value,

        titleColor:
        document.getElementById("titleColor").value,

        subtitleColor:
        document.getElementById("subtitleColor").value,

        live:
        document.getElementById("live").checked
    };

    localStorage.setItem(
        "overlay",
        JSON.stringify(data)
    );

    alert("ذخیره شد");
}

function loadData(){

    const data =
    JSON.parse(
        localStorage.getItem("overlay")
    );

    if(!data) return;

    document.getElementById("title").value =
    data.title;

    document.getElementById("subtitle").value =
    data.subtitle;

    document.getElementById("logo").value =
    data.logo;

    document.getElementById("bg").value =
    data.bg;

    document.getElementById("leftColor").value =
    data.leftColor;

    document.getElementById("titleColor").value =
    data.titleColor;

    document.getElementById("subtitleColor").value =
    data.subtitleColor;

    document.getElementById("live").checked =
    data.live;
}

loadData();
