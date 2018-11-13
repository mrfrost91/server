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
