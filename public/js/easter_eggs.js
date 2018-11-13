var snd = [document.getElementsByTagName("audio")[0], document.getElementsByTagName("audio")[1]];

function black() {
    snd[0].play();
    document.getElementsByTagName("H3")[4].innerText += " Властелин";
    document.getElementById("vlastelin").removeAttribute("onclick");
    document.getElementById("vlastelin").src = "img/heroes/vlastelin.png";
    var valuesSf = document.getElementsByClassName("attrrow")[4].getElementsByClassName("value");
    var i;
    for (i = 0; i < 3; i++) {
        valuesSf[i].innerText = "9999";
    }
}

function toasty() {
    var word = ["toasty", "ещфыен"];
    var num_char = 0;
    document.onkeypress = function match_char(e) {
        var key_char = e.key;
        if (key_char === word[0].charAt(num_char) || (key_char === word[1].charAt(num_char))) {
            num_char++;
        } else {
            num_char = 0;
        }
        if (num_char === word[0].length) {
            snd[1].play();
            num_char = 0;
        }
    }
}

window.onkeypress = toasty();