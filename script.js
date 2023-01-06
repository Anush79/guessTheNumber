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
const win_sound = new Audio("./sounds/win_sound.mp3");
const over_sound = new Audio("./sounds/game-over.mp3");
const button_sound = new Audio("./sounds/button-sound.mp3");

btn_reset.addEventListener("click", function () {
  location.reload();
});

//Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=6713">Pixabay</a>

var count = 0;
var win = false;
class computation {
  #number_easy = Math.floor(Math.random() * 100);
  #number_medium = Math.floor(Math.random() * 50);
  #number_hard = Math.floor(Math.random() * 10);
  getvalue() {
    return [this.#number_easy, this.#number_medium, this.#number_hard];
  }
}
let current_level = "";
btn_easy.addEventListener("click", () => {
  instruction.innerHTML =
    "<h3 class='level' style='border-color:green;'>Easy level</h3><p> Guess a Number between 0 to 100</p><p>You will get 10 attempts only.</p>";
  return (current_level = "easy");
});
btn_medium.addEventListener("click", function () {
  instruction.innerHTML =
    "<h3 class='level' style='border-color:blue;'>Medium level</h3><p>Guess a Number between 0 to 50</p><p>You will get 7 attempts only.</p>";
  return (current_level = "medium");
});
btn_hard.addEventListener("click", function () {
  instruction.innerHTML =
    "<h3 class='level' style='border-color:red;'>Hard level</h3><p>Guess a Number between 0 to 10</p><p>You will get 3 attempts only.</p>";
  return (current_level = "hard");
});

function check() {
  button_sound.play();
  switch (current_level) {
    case "easy":
      checkeasy();
      btn_medium.disabled = true;
      btn_hard.disabled = true;
      break;
    case "medium":
      checkmedium();
      btn_easy.disabled = true;
      btn_hard.disabled = true;
      break;
    case "hard":
      checkhard();
      btn_medium.disabled = true;
      btn_easy.disabled = true;
      break;
    default:
      errormsg.innerText = "Please select a level first";
      setTimeout(() => (errormsg.innerText = ""), 3000);

      break;
  }
}

let computer = new computation();

function checkeasy() {
  let number = computer.getvalue()[0];
  count++;
  var guess = Number(input.value);

  if (!win) {
    if (count < 11) {
      if (guess < 1 || guess > 100) {
        errormsg.innerText = "Please enter a number between 1 and 100";
        setTimeout(() => (errormsg.innerText = ""), 3000);
      } else if (guess === number) {
        output.style.color = "green";
        output.innerText = `Yay! You made it in ${count} attempts only. You are amazing 🎉`;
        win_sound.play();
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
      over_sound.play();
      submit.style.display = "none";
    }
  } else {
    location.reload();
  }
}

function checkmedium() {
  count++;
  let guess = Number(input.value);
  let number = computer.getvalue()[1];
  if (!win) {
    if (count <= 7) {
      if (guess < 1 || guess > 50) {
        errormsg.innerText = "Please enter a number between 1 and 50";
        setTimeout(() => (errormsg.innerText = ""), 3000);
      } else if (guess === number) {
        win_sound.play();
        output.style.color = "green";
        output.innerText = `Yay! You made it in ${count} attempts only. You are outstanding 🥳`;
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
      over_sound.play();
    }
  } else {
    location.reload();
  }
}

function checkhard() {
  let number = computer.getvalue()[2];
  count++;
  var guess = Number(input.value);

  if (!win) {
    if (count < 3) {
      if (guess < 1 || guess > 10) {
        errormsg.innerText = "Please enter a number between 1 and 10";
        setTimeout(() => (errormsg.innerText = ""), 3000);
      } else if (guess === number) {
        win_sound.play();
        output.style.color = "green";
        output.innerText = `Yay! You made it in ${count} attempts only. You are a total genius 😎🎉`;
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
      over_sound.play();
    }
  } else {
    location.reload();
  }
}

submit.addEventListener("click", check);

