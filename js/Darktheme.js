let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")
let inicial = document.getElementById("inicial");
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
let botao = document.getElementById("botao");
let buttons = document.querySelectorAll(".buttongroup")

function emojicon() {

    if (emoji.style.display == "block") {

        emoji.style.display = "none";
        emoji2.style.display = "block";
        img.src = "./imagens/logo.png";
        colorBlack();
        backGroundWhite();
        buttonsRed();
        localStorage.setItem("theme", "light");

    }
    else {
        emoji.style.display = "block";
        emoji2.style.display = "none";
        img.src = "./imagens/logoblack.png";
        colorWhite();
        backGroundBlack();
        buttonsYellow();
        localStorage.setItem("theme", "dark");

    }
}
window.onload = checkTheme();
function checkTheme() {
    let localStorageTheme = localStorage.getItem("theme");
    if (localStorageTheme != null && localStorageTheme === "light") {
        emoji.style.display = "none";
        emoji2.style.display = "block";
        colorBlack();
        backGroundWhite();
        buttonsRed();
    }
    else {
        emoji2.style.display = "none";
        emoji.style.display = "block";
        img.src = "./imagens/logoblack.png"
        colorWhite();
        backGroundBlack();
        buttonsYellow();
    }
}
function colorWhite() {
    dark.style.color = "white";
    dark1.style.color = "white";
    dark2.style.color = "white";
    dark3.style.color = "white";
    h2.style.color = "white";
    h1.style.color = "#ffc107";
}
function colorBlack() {
    dark.style.color = "black";
    dark1.style.color = "black";
    dark2.style.color = "black";
    dark3.style.color = "black";
    h2.style.color = "black";
    h1.style.color = "#fc0000";
}
function backGroundBlack() {
    nav.style.backgroundColor = "black"
    navList.style.backgroundColor = "rgba(0, 0, 0, 0.562)";
    line1.style.backgroundColor = "white";
    line2.style.backgroundColor = "white";
    line3.style.backgroundColor = "white";
    inicial.style.backgroundColor = "#212529";
    document.body.style.backgroundColor = "#212529";
    botao.classList.remove("btn-outline-dark");
    botao.classList.add("btn-light");
}
function backGroundWhite() {
    nav.style.backgroundColor = "white";
    navList.style.backgroundColor = "white";
    line1.style.backgroundColor = "black";
    line2.style.backgroundColor = "black";
    line3.style.backgroundColor = "black";
    inicial.style.backgroundColor = "#f8f9fa";
    document.body.style.backgroundColor = "white";
    botao.classList.remove("btn-light");
    botao.classList.add("btn-outline-dark")
}
function buttonsYellow() {
    for (let i = 0; i < buttons.length; i++) {

        buttons[i].classList.remove("btn-outline-danger");
        buttons[i].classList.add("btn-warning");

    }
}
function buttonsRed() {
    for (let i = 0; i < buttons.length; i++) {

        buttons[i].classList.remove("btn-warning");
        buttons[i].classList.add("btn-outline-danger");

    }
}