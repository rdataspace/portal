// Modal js

var modal01 = document.getElementById("modal_01");
var btn01 = document.getElementById("item_01");
var btn01X = document.getElementsByClassName("close_01")[0];


btn01.onclick = function () {
  modal01.style.visibility = "visible";
  modal01.style.transform = "scale(1)";
  modal01.style.opacity = "1";
}

btn01X.onclick = function () {
  modal01.style.visibility = "invisible";
  modal01.style.transform = "scale(0)";
  modal01.style.opacity = "0";
}

window.onclick = function (event) {
  if (event.target == modal_01) {
    modal01.style.visibility = "invisible";
    modal01.style.transform = "scale(0)";
    modal01.style.opacity = "0";
  }
}