let input = document.querySelector("input");
let submit = document.querySelector(".submit");
let errormsg = document.querySelector(".errormsg");
let output = document.querySelector(".output");
let attempts = document.querySelector(".attempts");
let btn_reset = document.querySelector(".btn-reset");
let btn_easy = document.querySelector(".easy");
let btn_medium = document.querySelector(".medium");
let btn_hard = document.querySelector(".hard");


btn_reset.addEventListener("click", function () {
  location.reload();
});



var count = 0;
var win = false;


var number_easy = Math.floor(Math.random() * 100);
  console.log("Easy num is"+number_easy);
var number_medium = Math.floor(Math.random() * 50);
  console.log("Medium num is"+number_medium);
var number_hard = Math.floor(Math.random() * 10);
  console.log("Hard num is"+number_hard);

  btn_easy.addEventListener("click", function(){
    submit.addEventListener("click", checkeasy);
  })

  btn_easy.addEventListener("click", function(){
    submit.addEventListener("click", checkmedium);
  })
  
  btn_easy.addEventListener("click", function(){
    submit.addEventListener("click", checkhard);
  })

function checkeasy() {
  let number= number_easy;
  count++;
  var guess = Number(input.value);

  if (!win) {
    if (count < 11) {
      if (guess < 1 || guess > 100) {
        errormsg.innerText = "Please enter a number between 1 and 100";
        const myTimeout = setTimeout(function () {
          errormsg.innerText = "";
        }, 5000);
      } else if (guess === number) {
        output.style.color = "green";
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
    } else {
      output.style.color = "red";
      output.innerText = "Oh no! You ran out of attempts🤷‍♀️";
      btn_reset.style.display = "block";
      submit.style.display = "none";
    }
  } else {
    location.reload();
  }
}



function checkmedium() {
  count++;
  var guess = Number(input.value);

  if (!win) {
    if (count < 7) {
      if (guess < 1 || guess > 50) {
        errormsg.innerText = "Please enter a number between 1 and 50";
        const myTimeout = setTimeout(function () {
          errormsg.innerText = "";
        }, 5000);
      } else if (guess === number) {
        output.style.color = "green";
        output.innerText = `Yay! You made it in ${count} attempts only. You are a genius`;
        win = true;
      } else if (guess > number) {
        output.innerText = "Your Guess is too high";
      } else if (guess < number) {
        output.innerText = "Your Guess is too low";
      }
      attempts.innerHTML += `<li> Attempt No. ${count}👉🏼 <span class="guessed_number"> ${guess}</span></li>`;
    } else {
      output.style.color = "red";
      output.innerText = "Oh no! You ran out of attempts🤷‍♀️";
      btn_reset.style.display = "block";
      submit.style.display = "none";
    }
  } else {
    location.reload();
  }
}

function checkhard() {
  let number = number_hard;
  count++;
  var guess = Number(input.value);

  if (!win) {
    if (count < 3) {
      if (guess < 1 || guess > 10) {
        errormsg.innerText = "Please enter a number between 1 and 10";
        const myTimeout = setTimeout(function () {
          errormsg.innerText = "";
        }, 5000);
      } else if (guess === number) {
        output.style.color = "green";
        output.innerText = `Yay! You made it in ${count} attempts only. You are a genius`;
        win = true;
      } else if (guess > number) {
        output.innerText = "Your Guess is high";
      } else if (guess < number) {
        output.innerText = "Your Guess is low";
      }
    } else {
      output.style.color = "red";
      output.innerText = "Oh no! You ran out of attempts🤷‍♀️";
      btn_reset.style.display = "block";
      submit.style.display = "none";
    }
  } else {
    location.reload();
  }
}
