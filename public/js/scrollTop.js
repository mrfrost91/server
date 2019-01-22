var move_up = document.getElementById("button_move_up");
move_up.addEventListener("click", scrollTop);
window.onscroll = function showMoveTopBtn() {
    if (window.pageYOffset > 400) {
        move_up.style = "display: block";
    } else {
        move_up.style = "display: none;";
    }
};

function scrollTop() {
    window.scrollTo(0, 0);
}
