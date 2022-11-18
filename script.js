let input = document.querySelector("input");
let btn = document.querySelector(".submit");
let errormsg = document.querySelector(".errormsg");
let output = document.querySelector(".output");
let attempts = document.querySelector(".attempts");

var number = Math.floor(Math.random() * 100);
console.log(number);

var count = 0;
var win = false;

function check() {
  count++;
  var guess = Number(input.value);

  if (!win) {
    if (guess < 1 || guess > 100) {
      errormsg.innerText = "Please enter a number between 1 and 100";
      const myTimeout = setTimeout(function () {
        errormsg.innerText = "";
      }, 5000);
    } else if (guess === number) {
      output.innerText = `Yay! You made it in ${count} attempts only. You are a genius`;
      win = true;
    } else if (guess > number) {
      if (guess - number <= 10) {
        output.innerText =
          "You are close to the number, just need a little effort";
      } else {
        output.innerText = "Your Guess is too high";
      }
    } else if (guess < number) {
      if (number - guess < 11) {
        output.innerText =
          "You are close to the number. just need to put some more effort";
      } else {
        output.innerText = "Your Guess is too low";
      }
    }
    attempts.innerHTML += `<li>Attempt No. ${count}👉🏼 <span class="guessed_number"> ${guess}</span></li>`;
  } 
  else {
    location.reload();
  }
}

btn.addEventListener("click", check);
