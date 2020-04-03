let playList = [

    {

        author: "LED ZEPPELIN",

        song: "STAIRWAY TO HEAVEN"

    },

    {

        author: "QUEEN",

        song: "BOHEMIAN RHAPSODY"

    },

    {

        author: "LYNYRD SKYNYRD",

        song: "FREE BIRD"

    },

    {

        author: "DEEP PURPLE",

        song: "SMOKE ON THE WATER"

    },

    {

        author: "JIMI HENDRIX",

        song: "ALL ALONG THE WATCHTOWER"

    },

    {

        author: "AC/DC",

        song: "BACK IN BLACK"

    },

    {

        author: "QUEEN",

        song: "WE WILL ROCK YOU"

    },

    {

        author: "METALLICA",

        song: "ENTER SANDMAN"

    }

];


let output = document.getElementById("Out");

function out(text) {
    output.innerHTML += text;
}

function clearOut() {
    output.innerHTML = "";
}







// 1. Создать страницу, которая выводит нумерованный список песен:

function printPlaylist() {
    clearOut();
    let result = "<ol>";

    for (let i = 0; i < playList.length; i++) {
        result += `<li>${playList[i].song} - ${playList[i].author}</li>`

    }
    result += "</ol>";

    out(result);

}


// 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". 
// Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает. 

function ModalOpen() {
    document.getElementById("alert-utility").style.display = "block";
    document.getElementById("alert-window").style.display = "flex";
}

function ModalClose() {
    document.getElementById("alert-utility").style.display = "none";
    document.getElementById("alert-window").style.display = "none";
}


// 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.
function Traffic() {
    for (let i = 0; i < lights.length; i++) {
        if (i != lightsActive) {
            lights[i].style.opacity = 0.4;
        }
        else {
            lights[i].style.opacity = 1;
        }
    }

    if (lightsActive > 1) {
        lightsActive = 0
    }
    else {
        lightsActive++;
    }
}

let lights = [document.getElementById("red"), document.getElementById("yellow"), document.getElementById("green")];
let lightsActive = 0;
Traffic();


