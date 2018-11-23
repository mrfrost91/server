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
var heroImg = document.getElementsByClassName("heroimg");
var heroText = document.getElementsByClassName("herotext");
var valueStr = document.getElementsByClassName("value str");
var valueAgi = document.getElementsByClassName("value agi");
var valueInt = document.getElementsByClassName("value int");
loadJson("http://127.0.0.1:8080/items/").then(function(response) {
    var jsonArray = JSON.parse(response);
    var jsonText, jsonLength, i;
    jsonLength = jsonArray.length;
    for (i = 0; i < jsonLength; ++i) {
        createField();
        jsonText = '<h3>' + jsonArray[i].number + ". " + jsonArray[i].name + '</h3>';
        heroName[i].innerHTML = jsonText;
        heroImg[i].innerHTML = '<img src="img/heroes/' + jsonArray[i].image + '" alt="' + jsonArray[i].name + '">';
        heroText[i].innerHTML = '<p>' + jsonArray[i].description + '</p>';
        valueStr[i].innerText = jsonArray[i].strength;
        valueAgi[i].innerText = jsonArray[i].agility;
        valueInt[i].innerText = jsonArray[i].intelligence;
    }
}, function(Error) {
    console.log(Error);
});

function createField() {
    var j;
    var content = document.getElementsByClassName("content")[0];
    var field = document.createElement("div");
    field.className = "field";
    var heroNameDiv = document.createElement("div");
    heroNameDiv.className = "heroname";
    heroNameDiv.appendChild(document.createElement("h3"));
    var container = document.createElement("div");
    container.className = "container";

    var heroImg = document.createElement("div");
    heroImg.className = "heroimg";
    heroImg.appendChild(document.createElement("img"));

    var attrrow = document.createElement("div");
    attrrow.className = "attrrow";
    var attributes = ["str", "agi", "int"];
    for (j = 0; j < attributes.length; j++) {
        var attrcol = document.createElement("div");
        attrcol.className = "attrcol " + attributes[j];
        var imageContainer = document.createElement("div");
        var textContainer = document.createElement("div");
        textContainer.className = "value " + attributes[j];
        var imgAttr = document.createElement("img");
        imgAttr.setAttribute("src", "img/heroes/" + attributes[j] + ".png");
        imageContainer.className = "attrimg";
        imageContainer.appendChild(imgAttr);
        attrcol.appendChild(imageContainer);
        attrcol.appendChild(textContainer);
        attrrow.appendChild(attrcol);
    }

    var heroText = document.createElement("div");
    heroText.className = "herotext";
    heroText.appendChild(document.createElement("p"));
    var containerNames = ["imgcontainer", "txtcontainer"];
    for (j = 0; j < containerNames.length; j++) {
        var div = document.createElement("div");
        div.className = containerNames[j];
        if (j < 1) {
            div.appendChild(heroImg);
            div.appendChild(attrrow);
        } else {
            div.appendChild(heroText);
        }
        container.appendChild(div);
    }

    field.appendChild(heroNameDiv);
    field.appendChild(container);
    content.appendChild(field);
}


