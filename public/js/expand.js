var loginIcon = document.getElementsByClassName("loginicon")[0].getElementsByTagName("a")[0];
var loginForm = document.querySelector('.logincontainer');
var searchIcon = document.getElementsByClassName("searchicon")[0].getElementsByTagName("a")[0];
var searchForm = document.querySelector('.searchcontainer');
loginIcon.addEventListener('click', function() {
    loginForm.classList.toggle('expand');
    searchForm.classList.remove('expand');
});

searchIcon.addEventListener('click', function() {
    searchForm.classList.toggle('expand');
    loginForm.classList.remove('expand');
});
