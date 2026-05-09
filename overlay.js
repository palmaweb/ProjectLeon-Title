function loadOverlay(){

    const data =
    JSON.parse(
        localStorage.getItem("overlay")
    );

    if(!data) return;

    document.getElementById("title").innerText =
    data.title;

    document.getElementById("subtitle").innerText =
    data.subtitle;

    document.getElementById("overlay").style.background =
    data.bg;

    document.getElementById("title").style.color =
    data.titleColor;

    document.getElementById("subtitle").style.color =
    data.subtitleColor;

    document.getElementById("left-side").style.background =
    data.leftColor;

    document.getElementById("logo").src =
    data.logo;

    if(data.live){

        document.getElementById("live").style.display =
        "block";

    }else{

        document.getElementById("live").style.display =
        "none";
    }
}

loadOverlay();

setInterval(loadOverlay,500);
