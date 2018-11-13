var logoimg = document.getElementById("logoimg");
var dokalogo = document.getElementsByClassName("dokalogo")[0];
dokalogo.addEventListener("mouseover", mouseOver);
dokalogo.addEventListener("mouseout", mouseOut);

function mouseOver() {
    logoimg.src = "img/dota_logo_hover.png";
}

function mouseOut() {
    logoimg.src = "img/dota_logo.png";
}

var loginIcon = document.getElementsByClassName("loginicon")[0].getElementsByTagName("a")[0];
var loginForm = document.getElementById("formcontainer");
var searchIcon = document.getElementsByClassName("searchicon")[0].getElementsByTagName("a")[0];
var searchForm = document.getElementsByClassName("searchcontainer")[0];
var n = 0;
var i = 0;
loginIcon.onclick = function () {
    if (loginForm.className === "logincontainer") {
        loginForm.className = "logincontainer-expand";
        searchForm.style = "margin: -49px 0 0 -246px;";
        n++;
        i = 0;
    } else {
        loginForm.className = "logincontainer";
        n = 0;
    }
};

searchIcon.onclick = function () {
    if (i % 2 === 0) {
        searchForm.style = "margin: 0 0 0 -246px;";
        loginForm.style = "margin: -155px 0 0 -192px;";
        i++;
        n = 0;
    } else {
        searchForm.style = "margin: -49px 0 0 -246px;";
        i = 0;
    }
};

var move_up = document.getElementById("button_move_up");
window.onscroll = function showMoveTop() {
    if (window.pageYOffset > 0) {
        move_up.style = "display: block";
    } else {
        move_up.style = "display: none;";
    }
};

function moveTop() {
    window.scrollTo(0, 0);
}
