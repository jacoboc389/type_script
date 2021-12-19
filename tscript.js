// ŁADOWANIE DOMYŚLNEGO STYLE "style_green.css"
var head = document.getElementsByTagName("head")[0];
var link = document.createElement('link');
link.type = 'text/css';
link.rel = 'stylesheet';
head.appendChild(link);
link.href = "style_green.css";
/* TWORZENIE PRZYCISKÓW DO ZMIANY STYKÓW */
var nav_list = document.getElementsByClassName("dl_l")[0];
var my_button1 = document.createElement('button');
my_button1.innerText = "Style 1";
my_button1.id = "style_1";
//my_button1.style = "margin: 22px;";
nav_list.appendChild(my_button1);
var nav_list = document.getElementsByClassName("dl_l")[0];
var my_button2 = document.createElement('button');
my_button2.innerText = "Style 2";
my_button2.id = "style_2";
//my_button2.style = "margin: 22px;";
nav_list.appendChild(my_button2);
my_button1.addEventListener("click", function () {
    var my_head = document.getElementsByTagName("head")[0];
    var my_link = document.getElementsByTagName('link')[0];
    my_link.type = 'text/css';
    my_link.rel = 'stylesheet';
    my_link.href = "style_green.css";
});
my_button2.addEventListener("click", function () {
    var my_head = document.getElementsByTagName("head")[0];
    var my_link = document.getElementsByTagName('link')[0];
    my_link.type = 'text/css';
    my_link.rel = 'stylesheet';
    my_link.href = "style_blue.css";
});
