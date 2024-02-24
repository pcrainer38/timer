var timerElement = document.querySelector(".timer");
var startButton = document.querySelector(".start-button");
var divEl = document.querySelector("#div1");

var timer;
var timerCount;


function startTimer() {
     timerCount = 10;
     timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if(timerCount <= 0) {
            clearInterval(timer);
            addElement();
        }
     }, 1000);
}

function addElement() {
    timerElement.textContent = "BOOM!";
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "assets/images/image_1.jpg")
    divEl.appendChild(imgEl);

}

startButton.addEventListener("click", startTimer);
