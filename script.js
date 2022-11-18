let input = document.querySelector("input");
let btn = document.querySelector(".submit");
let errormsg = document.querySelector(".errormsg");
let output = document.querySelector(".output");
let success = document.querySelector(".success");

var number = Math.floor(Math.random() * 100);
console.log(number);

function check() {
  var guess = Number(input.value);
  if (guess < 1 || guess > 100) {
    
    errormsg.innerText = "Please enter a number between 1 and 100";
    const myTimeout = setTimeout(function (){location.reload()}, 5000);
    
    
  } else if(guess===number){
    output.innerText="Yay! You made it.You are a genius"
  }
  else if (guess > number) {
    if (guess - number <= 10) {
      output.innerText = "You are close to the number";
    } else {
      output.innerText = "Your Guess is too high";
    }
  } else if (guess < number) {
    if (number - guess < 11) {
      output.innerText = "You are close to the number";
    } else {
      output.innerText = "Your Guess is too low";
    }
  }
}

btn.addEventListener("click", check);
