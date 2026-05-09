function loadData(){

    const title = localStorage.getItem("title");
    const subtitle = localStorage.getItem("subtitle");

    const panelColor = localStorage.getItem("panelColor");
    const titleColor = localStorage.getItem("titleColor");
    const subtitleColor = localStorage.getItem("subtitleColor");

    const logo = localStorage.getItem("logo");

    if(title){

        document.getElementById("title").innerText = title;
    }

    if(subtitle){

        document.getElementById("subtitle").innerText = subtitle;
    }

    if(panelColor){

        document.getElementById("news-box").style.background = panelColor;
    }

    if(titleColor){

        document.getElementById("title").style.color = titleColor;
    }

    if(subtitleColor){

        document.getElementById("subtitle").style.color = subtitleColor;
    }

    if(logo){

        document.getElementById("logo").src = logo;
    }

}

loadData();

setInterval(loadData,1000);
