let input = document.querySelector("input");
let submit = document.querySelector(".submit");
let errormsg = document.querySelector(".errormsg");
let output = document.querySelector(".output");
let attempts = document.querySelector(".attempts");
let btn_reset= document.querySelector(".btn-reset");

btn_reset.addEventListener("click", function(){
  location.reload();

})

var number = Math.floor(Math.random() * 100);
console.log(number);

var count = 0;
var win = false;

function check() {
  count++;
  var guess = Number(input.value);

  if (!win) {
    if(count < 11){
    if (guess < 1 || guess > 100) {
      errormsg.innerText = "Please enter a number between 1 and 100";
      const myTimeout = setTimeout(function () {
        errormsg.innerText = "";
      }, 5000);
    } else if (guess === number) {
      output.style.color="green";
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
    attempts.innerHTML += `<li> Attempt No. ${count}👉🏼 <span class="guessed_number"> ${guess}</span></li>`;
  }
  else{
    output.style.color="red";
    output.innerText ="Oh no! You ran out of attempts🤷‍♀️"
    btn_reset.style.display="block";
    submit.style.display="none";
  }
  
  } 
  else {
    location.reload();
  }
}

submit.addEventListener("click", check);
