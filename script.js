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

// -----------------------------------------------01.09.2025

// let windowOpen = true
// let suntimer = false
// let suncount = 0
// let deadPlant = false
// let seconds = 0

// function toggleWindow(){
//   windowOpen = false
// }

// function windowState() {
// if (windowOpen){
// // waterTimer = -5 / +5% ??
// }else{
//   suntimer = true
// }
// }

// function needOfSun() { 
// if (suntimer = true){
// suncount = seconds++;
// }

// }

// function deadPlant(){
//   // Plant png = dead Plant
//   // Pop up= you've lost, try again?
// }

// ----------------------------------------------------03.09.2025

let windowOpen = true;
let suntimer = 0;
let sunSeconds = 0;







function windowState() {
  if (windowOpen){                // if Window is open
    // waterTimer = -5 / +5% ??   // then water will decrece faster
  }else{                          // if not(else)
    startSuntimer();              // the timer for the need for sun will start
  }
}


//--------------------------theSunIsADeadlyLazer
function startSuntimer(){
clearInterval(suntimer);
suntimer = setInterval(sunwatch,1000);
}

function sunwatch(){
sunSeconds++;
}

function needForSun(){       //need for sun
if(seconds < 10){            //if the timer reaches 10 
  //show img of sun need     //then it'll prompt the need for sun IMG
}else if (seconds <20){      //or if the timer reaches 30 then it'll die
  //deadfunction
}


}

// -----------------------------------04.09.2025



// function numberSlide(number){
//     IconNumber= IconNumber + number; //
//     showIcons();
//     // i++ 
//     // i=i+number
//     // i+=number
// }

// function showIcons() {
//     let icons = document.getElementsByClassName("allIcons"); //we pick up the list(Array) (div elements 0-5) from the class
//     if (IconNumber > icons.length) { // if we try to move past the number of images(divs) that we have
//         IconNumber = 1; //then it returns to 1 (because we don't want it to go over into nothing (7)
//     }

//     if (IconNumber < 1) { //if we try to move lower than the number of images(divs) we have
//         IconNumber = icons.length; //then we return to the end of the images(divs) we have
//     }
//     for (let i = 0; i < icons.length; i++) { // (i is a counter) the loop goes through all the images(divs) 
//         icons[i].style.display = "none"; // and hides them
//     }
//     icons[IconNumber-1].style.display = "block"; //shows the chosen image(div)
//     }


    // hmtl:
    // <div class="allIcons">
    //             <img src="Image/cafe.png" style="width:100%">
    //         </div>

//     css:
//     .allIcons {
//     display: none;
// }
//----------------------------------------------thank you Bodin
let plantDead = true;
showIcons(); //put in all representive places (dead function, water, sun and window for happy)


function showIcons(){
  let icons = document.getElementsByClassName("Icon");
  for (let i = 0; i < icons.length; i++) { // (i is a counter) the loop goes through all the images(divs) 
    icons[i].style.display = "none"; // and hides them
  }
    if (plantDead == true){
        icons[1].style.display = "block"; //plant is dead
    }else if(waterLevel < 30){
        icons[2].style.display = "block"; //plant thirsty
    }else if(sunSeconds > 10){
        icons[0].style.display = "block"; //plant need sun
    }else if(waterLevel >= 30 && windowOpen == true){
        icons[3].style.display = "block"; //plant is happy
    }//else none of the images show
}
      


//------------------------------------------------------------------ 10.09.2025

function createAndShowHtml(color, text, fontSize, border, textcolor){
  document.getElementById('mainDiv').innerHTML =`
  <div ${createStyle(color, fontSize, border, textcolor)}>${text}</div>
  `;
}

function createStyle(color, fontSize, border, textcolor){
  return`style="${createbackgroundColour(color)} ${createfontSize(fontSize)} ${createBorder(border)} ${createTextColor(textcolor)}"`;
}

function createbackgroundColour(color){
  return `background-color: ${color};`;
}

function createfontSize(fontSize){
  return `font-size: ${fontSize}px;`;
}

function createBorder(border){
  return `border: ${border};`;
}

function createTextColor(textcolor){
  return `color: ${textcolor};`;
}

//------------------------------------------------------------------ 12.09.2025

// let savedA = "Hei"
// let savedB = "Hallo"

let savedA = document.getElementById("A").innerHTML;
let savedB = document.getElementById("B").innerHTML;

function copyAtoB(){
  document.getElementById("B").innerHTML = document.getElementById("A").innerHTML;
}

function swapAandB(){
savedA = document.getElementById("A").innerHTML;
savedB = document.getElementById("B").innerHTML;
document.getElementById("A").innerHTML = savedB;
document.getElementById("B").innerHTML = savedA;
}

function doubleA(){
document.getElementById("A").innerHTML += document.getElementById("A").innerHTML;
}

//------------------------------------------------------------------ 12.09.2025



function addWord(value){
if(document.getElementById("firstword").innerHTML == '____')
document.getElementById("firstword").innerHTML = addWord(value)
}

//------------------------------

//Switcher function:
$(".rb-tab").click(function(){
  //Spot switcher:
  $(this).parent().find(".rb-tab").removeClass("rb-tab-active");
  $(this).addClass("rb-tab-active");
});