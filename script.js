// Находим элемент <link> по его rel атрибуту
var linkElement = document.querySelector('link[rel=stylesheet]');
var list = document.querySelector('div[class=theme-toggle-list]');

function changeFontSize(i) {
    setTimeout(function () {
        list.style.fontSize = i / 2 + 'px';
    }, i * 10);
}
// Проверяем, содержит ли текущий URL под строку "index.html"; если да, задаем капчу
if (window.location.href.includes("index.html")) {
    while (!confirm("Нажми ОК, если НЕ робот")) {

    } // проверка на робота в начале (капча)
    alert("Проверка пройдена!");
}

// Добавляем обработчик события click на элемент с id "activateScript"
document.getElementById("activateScript").addEventListener("click", function () {
    while (!confirm("Ты амогус?")) {

    }
    alert("Молодец!");
}); // пасхалочка (проверка на амогуса)

// Добавляем обработчик события mouseover на элемент с id "activateScript"
document.getElementById("activateScript").addEventListener("mouseover", function () {
    if (linkElement.getAttribute('href') == 'style.css' || linkElement.getAttribute('href') == 'style3.css') {
        document.getElementById("activateScript").style.color = "#ffffff";
    }
    else {
        document.getElementById("activateScript").style.color = "#000000";
    }
});

// Добавляем обработчик события mouseout на элемент с id "activateScript"
document.getElementById("activateScript").addEventListener("mouseout", function () {
    if (linkElement.getAttribute('href') == 'style.css' || linkElement.getAttribute('href') == 'style3.css') {
        document.getElementById("activateScript").style.color = "#232332";
    }
    else {
        document.getElementById("activateScript").style.color = "#ababba";
    }
});

document.getElementById("openList").addEventListener("mouseover", function () {
    for (let i = 1; i <= 28; i++) {
        changeFontSize(i);
    }
});
var list = document.querySelector('div[class=theme-toggle-list]');
document.getElementById("openList").addEventListener("mouseout", function () {
    setTimeout(function () {
        list.style.fontSize = '0px';
    }, 2500); // 1000 миллисекунд = 1 секунда
});
// Добавляем обработчик события click на элемент с id "theme1"
document.getElementById("theme1").addEventListener("click", function () {
    // Изменяем значение атрибута href
    linkElement.setAttribute('href', 'style.css');
    document.getElementById("activateScript").style.color = "#232332";
});

// Добавляем обработчик события click на элемент с id "theme2"
document.getElementById("theme2").addEventListener("click", function () {
    // Изменяем значение атрибута href
    linkElement.setAttribute('href', 'style1.css');
    document.getElementById("activateScript").style.color = "#ababba";
});

// Добавляем обработчик события click на элемент с id "theme3"
document.getElementById("theme3").addEventListener("click", function () {
    // Изменяем значение атрибута href
    linkElement.setAttribute('href', 'style2.css');
    document.getElementById("activateScript").style.color = "#ababba";
});
// Добавляем обработчик события click на элемент с id "theme3"
document.getElementById("theme4").addEventListener("click", function () {
    // Изменяем значение атрибута href
    linkElement.setAttribute('href', 'style3.css');
    document.getElementById("activateScript").style.color = "#ababba";
});