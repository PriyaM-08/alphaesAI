"use strict"

const checkBtn = document.querySelector(".check");
const number = document.querySelector(".number");
const message = document.querySelector(".message");
const scoreLabel = document.querySelector(".score");
const highScoreEle = document.querySelector(".highscore");
const again=document.querySelector(".again");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

again.addEventListener("click",function(){
  score=20;
  secretNumber=Math.trunc(Math.random()*20)+1;
    message.textContent = "Start Guessing!🤔";
  scoreLabel.textContent = score;
  number.textContent = "😁";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#073840";
  number.style.width = "15rem";
});

checkBtn.addEventListener("click", function () {
  const userInput = +document.querySelector(".guess").value;

  if (!userInput) {
    message.textContent = "No Number"
    return;
  }

  if (userInput === secretNumber) {
    message.textContent = "Correct Number";
    number.textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347"
    number.style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      highScoreEle.textContent = highScore;
    }
  } else {
    if (score > 1) {
      if (userInput > secretNumber) {
        message.textContent = "Too High"
        score--;
        scoreLabel.textContent = score;
      } else if (userInput < secretNumber) {
        message.textContent = "Too Low"
        score--;
        scoreLabel.textContent = score;
      }
    } else {
      message.textContent = "You lost the game";
      scoreLabel.textContent = 0;
    }
  }
})
