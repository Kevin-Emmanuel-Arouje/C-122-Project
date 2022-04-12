x = 0;
y = 0;
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
  document.getElementById("status").innerHTML = "System is listening please speak";
  recognition.start();
}

function preload() {
  img = loadImage("apple.png");
}
recognition.onresult = function (event) {

  console.log(event);

  content = event.results[0][0].transcript;

  document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
  to_number = Number(content);
  if (Number.isInteger(to_number)) {
    document.getElementById("status").innerHTML = "started drawing apple";
    draw_apple = "set";
  } else {
    document.getElementById("status").innerHTML = "the speech recognised is not a number, please try again";
  }
}

function setup() {
  canvas = createCanvas(1300, 500);
}

function draw() {
  if (draw_apple == "set") {
    for (i = 1; i <= to_number; i++) {
      x = Math.floor(Math.random() * 1300);
      y = Math.floor(Math.random() * 500);
      image(img, x, y, 50, 50);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}
function clear(){
  background("pink");
}
function speak() {
  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

  speak_data = "";
}