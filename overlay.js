function loadOverlay(){

    const saved =
    localStorage.getItem("overlayData");

    if(!saved) return;

    const data =
    JSON.parse(saved);

    if(data.title){

        document
        .getElementById("title")
        .innerText = data.title;
    }

    if(data.subtitle){

        document
        .getElementById("subtitle")
        .innerText = data.subtitle;
    }

    if(data.panelColor){

        document
        .getElementById("news-box")
        .style.background = data.panelColor;
    }

    if(data.titleColor){

        document
        .getElementById("title")
        .style.color = data.titleColor;
    }

    if(data.subtitleColor){

        document
        .getElementById("subtitle")
        .style.color = data.subtitleColor;
    }

    if(data.logo){

        document
        .getElementById("logo")
        .src = data.logo;
    }

    if(data.live === "off"){

        document
        .getElementById("live-badge")
        .style.display = "none";

    }else{

        document
        .getElementById("live-badge")
        .style.display = "block";
    }
}

loadOverlay();

setInterval(loadOverlay,500);
