function loadJson(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/json");
        xhr.open('GET', url, true);
        xhr.onload = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject(Error("Data didn't load successfully; error code:" + xhr.statusText));
            }
        };
        xhr.onerror = function () {
            reject(Error("There was a network error."));
        };
        xhr.send();
    });
}

var heroName = document.getElementsByClassName("heroname");
loadJson("http://127.0.0.1:8080/items/").then(function(response) {
    var jsonArray = JSON.parse(response);
    var jsonText, jsonLength, i;
    jsonLength = jsonArray.length;
    for (i = 0; i < jsonLength; ++i) {
        jsonText = "<h3>" + jsonArray[i].number + ". " + jsonArray[i].name + "</h3>";
        heroName[i].innerHTML = jsonText;
    }
}, function(Error) {
    console.log(Error);
});
