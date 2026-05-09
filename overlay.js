function loadData(){

    let title = localStorage.getItem("title");
    let subtitle = localStorage.getItem("subtitle");
    let color = localStorage.getItem("bgcolor");
    let logo = localStorage.getItem("logo");

    if(title){
        document.getElementById("title").innerText = title;
    }

    if(subtitle){
        document.getElementById("subtitle").innerText = subtitle;
    }

    if(color){
        document.getElementById("news-box").style.background = color;
    }

    if(logo){
        document.getElementById("logo").src = logo;
    }
}

loadData();

setInterval(loadData,1000);
