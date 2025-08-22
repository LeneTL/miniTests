function changeDivText() {
  document.getElementById("mydiv").innerHTML = "O_O";
}

function changeDivColor() {
  document.getElementById("mydiv").classList.add("red");
}

function restoreDivText() {
  document.getElementById("mydiv").innerHTML = "-_- Zzz";
}

function restoreDivColor() {
  document.getElementById("mydiv").classList.remove("red");
}

var outputDiv = document.getElementById('output');
var shownNumber = 0;

function addNumber(){
shownNumber ++;
outputDiv.innerHTML = shownNumber;
}

function subtractNumber(){
shownNumber --;
outputDiv.innerHTML = shownNumber;
}