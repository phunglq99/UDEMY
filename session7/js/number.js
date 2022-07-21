"use strict";

let secretNumber = Math.floor(Math.random() * 20) +1;

let input = document.querySelector(".guess");
let button = document.querySelector(".check");
let score = 20;
let highScore = 0;

button.addEventListener("click", function(e) {
    e.preventDefault();
    let value = Number(input.value);
    console.log(typeof input.value);
    if(!value)  {
        document.querySelector(".message").textContent = "⛔️ No number!"
    }else if(value === secretNumber) {
        document.querySelector(".message").textContent = "🎉 Correct Number!"
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".number").innerHTML = secretNumber;
        input.style.cursor="no-drop";
        if(score > highScore) {
            highScore = score;
        document.querySelector(".highscore").innerHTML = highScore;
        }
    }else if(value !== secretNumber) {
        if(score > 1){
            document.querySelector(".message").textContent = (value < secretNumber)
            ? "📉 Too Low" : "📈 Too High"
            document.querySelector("body").style.backgroundColor = "red";
    
            score--;
            document.querySelector(".score").innerHTML = score;

        }

    } else{
        document.querySelector(".message").textContent = "💥 You lose the game";
        document.querySelector('.score').textContent = 0;
    }
   
})
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    document.querySelector(".message").textContent = 
    'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });