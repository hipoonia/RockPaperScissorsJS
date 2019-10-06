let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
// caching the DOM. ie storing something for future use.

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = (Math.floor(Math.random()*3));
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter=="r") return "Rock";
  else if (letter=="p") return "Paper";
  else return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  // result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!";
  //ES5
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
  //ES6

  userChoice_div.classList.add('green-glow');
  setTimeout(function() { userChoice_div.classList.remove('green-glow')}, 300);

}


function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost!`;

  userChoice_div.classList.add('red-glow');
  // setTimeout(function() { userChoice_div.classList.remove('red-glow')}, 300);
  // ES5

  setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
  // ES6
}

function draw(userChoice, computerChoice) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw!`;

  userChoice_div.classList.add('gray-glow');
  setTimeout(function() { userChoice_div.classList.remove('gray-glow')}, 300);

}

function game(userChoice) {
  // console.log(" & & &  " + userChoice);
  const computerChoice = getComputerChoice();

  switch (userChoice+computerChoice) {
    case "pr":
    case "rs":
    case "sp":
      win(userChoice, computerChoice);
      // console.log("USER WINS");
      break;

    case "rp":
    case "sr":
    case "ps":
      lose(userChoice, computerChoice);
      // console.log("USER LOOSES");
      break;

    case "pp":
    case "rr":
    case "ss":
      draw(userChoice, computerChoice);
      // console.log("ITS A DRAW!");
      break;
  }

}

function main() {

  // rock_div.addEventListener('click', function() {
  // ES5
  rock_div.addEventListener('click', () => game("r"));
  // ES6
    // console.log("hey you clicked on rock");
    // game("r");
  // })

  paper_div.addEventListener('click', function() {
    game("p");
  })

  scissors_div.addEventListener('click', function() {
    game("s");
    // console.log("hey you clicked on scissors");
  })
}

main();
