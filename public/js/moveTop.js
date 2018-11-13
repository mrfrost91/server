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
