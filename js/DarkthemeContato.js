let h1 = document.querySelectorAll("h1");
let img = document.getElementById("logo");
let dark = document.getElementById("dark");
let dark1 = document.getElementById("dark1");
let dark2 = document.getElementById("dark2");
let dark3 = document.getElementById("dark3");
let nav = document.querySelector("nav");
let navList = document.getElementById("nav-list");
let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");
let dropdown= document.querySelector(".dropdown-menu");
let main = document.querySelector("main");
let all = document.getElementById("all");
function emojicon() {

    if (emoji.style.display == "block") {

        emoji.style.display = "none";
        emoji2.style.display = "block";
        img.src = "./imagens/Logowhite.png";
        dropdown.classList.remove("dropdown-menu-dark");
        colorBlack();
        backGroundWhite();
        h1Red()
        localStorage.setItem("theme", "light");

    }
    else {
        emoji.style.display = "block";
        emoji2.style.display = "none";
        img.src = "./imagens/logoblack.png";
        dropdown.classList.add("dropdown-menu-dark");
        colorWhite();
        backGroundBlack();
        h1Yellow()
        localStorage.setItem("theme", "dark");

    }
}

window.onload = checkTheme();

function checkTheme() {
    let localStorageTheme = localStorage.getItem("theme");
    if (localStorageTheme != null && localStorageTheme === "light") {

        emoji.style.display = "none";
        emoji2.style.display = "block";
        img.src = "./imagens/Logowhite.png"
        dropdown.classList.remove("dropdown-menu-dark");
        colorBlack();
        backGroundWhite();
        h1Red()
     
    }
    else {

        emoji2.style.display = "none";
        emoji.style.display = "block";
        img.src = "./imagens/logoblack.png"
        dropdown.classList.add("dropdown-menu-dark");
        colorWhite();
        backGroundBlack();
        h1Yellow()

    }
}

function colorWhite() {

    dark.style.color = "white";
    dark1.style.color = "white";
    dark2.style.color = "white";
    dark3.style.color = "white";
    


}

function colorBlack() {

    dark.style.color = "black";
    dark1.style.color = "black";
    dark2.style.color = "black";
    dark3.style.color = "black";
    
   
}

function backGroundBlack() {

    nav.style.backgroundColor = "black"
    navList.style.backgroundColor = "rgba(0, 0, 0, 0.562)";
    line1.style.backgroundColor = "white";
    line2.style.backgroundColor = "white";
    line3.style.backgroundColor = "white";
    document.body.style.backgroundColor = "#212529";
    main.style.backgroundColor ="#212529";
    all.style.backgroundColor ="#212529";
    

}

function backGroundWhite() {

    nav.style.backgroundColor = "white";
    navList.style.backgroundColor = "white";
    line1.style.backgroundColor = "black";
    line2.style.backgroundColor = "black";
    line3.style.backgroundColor = "black";
    main.style.backgroundColor ="#f3f5f7";
    document.body.style.backgroundColor = "white";
    all.style.backgroundColor ="#f3f5f7";

}
function disableSelect(){
    let servico = $('#servico').find(":selected").text();
    if(servico == 'Dúvida'|| servico=="Reparo/Atualização"){
        $("#plano").prop("disabled",true)
        $("#plano1").prop("selected",true)
    }
    else{
        $("#plano").prop("disabled",false)
    }
}
function h1Yellow(){
    for(let i =0;i < h1.length; i++){
        h1[i].style.color="yellow"
    }

}
function h1Red(){

    for(let i =0;i < h1.length; i++){
        h1[i].style.color="red"
    }

}

