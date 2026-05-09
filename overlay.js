function loadData(){

    let title = localStorage.getItem("title");
    let subtitle = localStorage.getItem("subtitle");

    let panelColor = localStorage.getItem("panelColor");
    let leftColor = localStorage.getItem("leftColor");

    if(title){
        document.getElementById("title").innerText = title;
    }

    if(subtitle){
        document.getElementById("subtitle").innerText = subtitle;
    }

    if(panelColor){
        document.getElementById("news-box").style.background = panelColor;
    }

    if(leftColor){
        document.getElementById("left-box").style.background = leftColor;
    }

}

loadData();

setInterval(loadData,1000);
