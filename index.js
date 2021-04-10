var round = 0;
var arrayButton = [];
var arrayRandom = [];
var popupDuration = 400;
var buttonClickDuration = 100;
var nextButtonDuration = 500;
var tryAgainMode = 0;



$(".start-button").click(startFunction);

$(".button-click").click(function() {
  var x = event.srcElement.innerText;
  console.log(x);
  buttonAnimation(x);
});

$(document).keypress(function() {
  var x = event.key;
  console.log(x);
  if(tryAgainMode === 1 && x == 'Enter') {
    tryAgainMode = 0;
    startFunction();
  }
  buttonAnimation(x);
});




// code to enable button animation

function buttonAnimation(x) {
 if (round > 0 && (x === "w" || x === "a" || x === "s" || x === "d")){
  arrayButton.push(x);
  console.log(arrayButton);
  var arrayPosition = arrayButton.length - 1
  if(arrayButton[arrayPosition] !== arrayRandom[arrayPosition] || arrayButton.length > arrayRandom.length) {
    errorFunction();

  }
  else {
switch (x) {
  case "w":
  $(".w").addClass("button-on-click");
  var sound = new Audio("sounds/crash.mp3");
  sound.play();
  functionPushArray();
  break;

  case "a":
  $(".a").addClass("button-on-click");
  var sound = new Audio("sounds/kick-bass.mp3");
  sound.play();
  functionPushArray();
  break;

  case "s":
  $(".s").addClass("button-on-click");
  var sound = new Audio("sounds/snare.mp3");
  sound.play();
  functionPushArray();
  break;

  case "d":
  $(".d").addClass("button-on-click");
  var sound = new Audio("sounds/tom-4.mp3");
  sound.play();
  functionPushArray();
  break;

  default:

  }


}}

function functionPushArray() {
  console.log(arrayButton);
  setTimeout(function() {$(".button-click").removeClass("button-on-click"); }, buttonClickDuration);
  if (arrayButton.length === arrayRandom.length) {
    round++;
  $("h2").text("Round "+round);
  setTimeout(randomNumbers, nextButtonDuration);
  arrayButton = [];
}

}}




function errorFunction(){
  $(".button-click").addClass("button-error")
  $("body").addClass("button-error")

  $(".start-button").text("Try again! ⏎");
  $(".start-button").css("visibility","visible");
  $(".smiley").css("visibility","visible");
    arrayButton = [];
  arrayRandom = [];
  tryAgainMode = 1;

}

// create random numbers (1-4) and assign them to the buttons


function randomNumbers() {
  var randomNumber = Math.ceil(Math.random() * 4);
  console.log(randomNumber);
  switch (randomNumber) {
    case 1:
      var randomButton = "w";
    break;
    case 2:
      var randomButton = "a";
    break;
    case 3:
      var randomButton = "s";
    break;
    case 4:
      var randomButton = "d";
    break;
    default:

    }

    arrayRandom.push(randomButton);
    $("."+randomButton).addClass("button-popup");
    setTimeout(function(){$("."+randomButton).removeClass("button-popup");},popupDuration);
    console.log(randomButton);
}


function startFunction () {

    round = 1;
    $(".button-click").removeClass("button-error");
    $("body").removeClass("button-error")
    $("h2").text("Round "+round);
    $(".roundNumber").css("visibility","visible");
    $(".start-button").css("visibility","hidden");
    $(".smiley").css("visibility","hidden");
    setTimeout(randomNumbers,500);

}
