// Modal js

var modal01 = document.getElementById("modal_01"),
  modal02 = document.getElementById("modal_02"),
  modal03 = document.getElementById("modal_03");

var btn01 = document.getElementById("item_01"),
  btn02 = document.getElementById("item_02"),
  btn03 = document.getElementById("item_03");

var btn01X = document.getElementsByClassName("close_01")[0],
  btn02X = document.getElementsByClassName("close_02")[0],
  btn03X = document.getElementsByClassName("close_03")[0];


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

btn02.onclick = function () {
  modal02.style.visibility = "visible";
  modal02.style.transform = "scale(1)";
  modal02.style.opacity = "1";
}

btn02X.onclick = function () {
  modal02.style.visibility = "invisible";
  modal02.style.transform = "scale(0)";
  modal02.style.opacity = "0";
}

btn03.onclick = function () {
  modal03.style.visibility = "visible";
  modal03.style.transform = "scale(1)";
  modal03.style.opacity = "1";
}

btn03X.onclick = function () {
  modal03.style.visibility = "invisible";
  modal03.style.transform = "scale(0)";
  modal03.style.opacity = "0";
}

window.onclick = function (event) {
  if (event.target == modal_01) {
    modal01.style.visibility = "invisible";
    modal01.style.transform = "scale(0)";
    modal01.style.opacity = "0";
  }
  if (event.target == modal_02) {
    modal02.style.visibility = "invisible";
    modal02.style.transform = "scale(0)";
    modal02.style.opacity = "0";
  }
    if (event.target == modal_03) {
    modal03.style.visibility = "invisible";
    modal03.style.transform = "scale(0)";
    modal03.style.opacity = "0";
  }
}