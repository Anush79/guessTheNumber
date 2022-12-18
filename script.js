let input = document.querySelector("input");
let submit = document.querySelector(".submit");
let errormsg = document.querySelector(".errormsg");
let output = document.querySelector(".output");
let attempts = document.querySelector(".attempts");
let btn_reset = document.querySelector(".btn-reset");
let btn_easy = document.querySelector(".easy");
let btn_medium = document.querySelector(".medium");
let btn_hard = document.querySelector(".hard");
let instruction = document.querySelector(".instruction");

btn_reset.addEventListener("click", function () {
  location.reload();
});

//Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=6713">Pixabay</a>

var count = 0;
var win = false;

var number_easy = Math.floor(Math.random() * 100);
console.log("Easy num is" + number_easy);
var number_medium = Math.floor(Math.random() * 50);
console.log("Medium num is" + number_medium);
var number_hard = Math.floor(Math.random() * 10);
console.log("Hard num is" + number_hard);

let current_level = "";
btn_easy.addEventListener("click", () => {
  instruction.innerHTML = 
    "<h3 class=level>Easy level</h3><p> Guess a Number between 0 t0 100</p><p>You will get 10 attempts only.</p>";
  return (current_level = "easy");
});

btn_medium.addEventListener("click", function () {
  instruction.innerHTML =
    "<h3 class=level>Medium level</h3><p>Guess a Number between 0 t0 50</p><p>You will get 6 attempts only.</p>";
  return (current_level = "medium");
});

btn_hard.addEventListener("click", function () {
  instruction.innerHTML =
    "<h3 class=level>Hard level</h3><p>Guess a Number between 0 t0 10</p><p>You will get 3 attempts only.</p>";
  return (current_level = "hard");
});

submit.addEventListener("click", () => {
  switch (current_level) {
    case "easy":
      checkeasy();
      break;
    case "medium":
      checkmedium();
      break;
    case "hard":
      checkhard();
      break;
    default:
      break;
  }
});

console.log(current_level);

function checkeasy() {
  let number = number_easy;
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
        submit.innerText = "click to play more";
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
      output.innerHTML = `<p >Oh no! you exceeded number of attempts 🤷‍♀️</p><p class="sorryText">I had the number <span>${number}</span> in my mind 😞</p>`;
      btn_reset.style.display = "block";
      submit.style.display = "none";
    }
  } else {
    location.reload();
  }
}

function checkmedium() {
  count++;
  let guess = Number(input.value);
  let number = number_medium;
  if (!win) {
    if (count <= 7) {
      if (guess < 1 || guess > 50) {
        errormsg.innerText = "Please enter a number between 1 and 50";
        const myTimeout = setTimeout(function () {
          errormsg.innerText = "";
        }, 5000);
      } else if (guess === number) {
        output.style.color = "green";
        output.innerText = `Yay! You made it in ${count} attempts only. You are a genius`;
        win = true;
        submit.innerText = "click to play more";
      } else if (guess > number) {
        output.innerText = "Your Guess is too high";
      } else if (guess < number) {
        output.innerText = "Your Guess is too low";
      }
      attempts.innerHTML += `<li> Attempt No. ${count}👉🏼 <span class="guessed_number"> ${guess}</span></li>`;
    } else {
      output.style.color = "red";
      output.innerHTML = `<p >Oh no! You ran out of attempts🤷‍♀️</p><p class="sorryText">I had the number <span>${number}</span> in my mind 😞</p>`;
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
        submit.innerText = "click to play more";
      } else if (guess > number) {
        output.innerText = "Nope, this is not my number, you guessed more";
      } else if (guess < number) {
        output.innerText =
          "This is definitely not my number. you guessed it less";
      }
    } else {
      output.style.color = "red";
      output.innerHTML = `<p >Oh no! There are no attempts left🤷‍♀️</p><p class="sorryText">I had the number <span>${number}</span> in my mind 😞</p>`;
      btn_reset.style.display = "block";
      submit.style.display = "none";
    }
  } else {
    location.reload();
  }
}
