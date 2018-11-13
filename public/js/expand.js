var loginIcon = document.getElementsByClassName("loginicon")[0].getElementsByTagName("a")[0];
var loginForm = document.getElementById("formcontainer");
var searchIcon = document.getElementsByClassName("searchicon")[0].getElementsByTagName("a")[0];
var searchForm = document.getElementById("searchcontainer");
loginIcon.onclick = function () {
    if (loginForm.className === "logincontainer") {
        loginForm.className = "logincontainer-expand";
        searchForm.className = "searchcontainer";
    } else {
        loginForm.className = "logincontainer";
    }
};

searchIcon.onclick = function () {
    if (searchForm.className === "searchcontainer") {
        searchForm.className = "searchcontainer-expand";
        loginForm.className = "logincontainer";
    } else {
        searchForm.className = "searchcontainer";
    }
};
