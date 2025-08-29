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

// -----------------------------------------------

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

// -----------------------------------------------

function changeTextAndColourAndSize(color,width,height,text){
  document.getElementById('changingDiv').innerHTML = /*html*/`
  <div style="background-color:${color}; width:${width}px; height:${height}px;">${text}</div>
`;}
// -----------------------------------------------

let selectedColour= null;


function selectBodyColour(color){
  this_element_.style.border = '1px solid red'
  selectedColour= color;
  document.getElementById(borderOn).style.border = '#090909 1px solid;'
 }

function applyBodyColour(){
  if (selectedColour) {
    document.body.style.background = selectedColour
  }
}