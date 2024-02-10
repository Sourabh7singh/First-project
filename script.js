function ToggleMenu(){
    let sidebar = document.getElementById("sidebar");
    let Closebtn = document.getElementById("Closebtn");
    let Menubtn = document.getElementById("Menutbn");
    if (Closebtn.style.display==="block"){
        Closebtn.style.display = "none";
        sidebar.style.display = "none";
        Menubtn.style.display = "block";
    }
    else{
        Closebtn.style.display = "block";
        sidebar.style.display = "block";
        Menubtn.style.display = "none";    

    }
}
