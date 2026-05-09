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
        "bgcolor",
        document.getElementById("bgcolor").value
    );

    localStorage.setItem(
        "logo",
        document.getElementById("logo").value
    );

    alert("ذخیره شد");
}
