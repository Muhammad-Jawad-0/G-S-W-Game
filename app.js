let userInput = prompt("Enter Snake , Water , Gun");
userInput = userInput.toUpperCase();

let pcInput = Math.floor(Math.random() * 3);
let pc = ["SNAKE", "WATER", "GUN"][pcInput];

const match = (userInput, pc) => {
  if (pc === userInput) {
    return "Match Tied";
  } else if (pc === "SNAKE" && userInput === "GUN") {
    return "You Won Congratulations";
  } else if (pc === "SNAKE" && userInput === "WATER") {
    return "Your Computer Butter Luck Next Time";
  } else if (pc === "GUN" && userInput === "WATER") {
    return "You Won Congratulations";
  } else if (pc === "GUN" && userInput === "SNAKE") {
    return "Your Computer Butter Luck Next Time";
  } else if (pc === "WATER" && userInput === "GUN") {
    return "Your Computer Butter Luck Next Time";
  } else if (pc === "WATER" && userInput === "SNAKE") {
    return "You Won Congratulations";
  } else {
    return 'Only Enter: SNAKE , WATER , GUN '
  }
};

let result = match(pc , userInput);

document.write(`PC : ${pc} <br> USER : ${userInput} <br> The Winner Is :${result.toUpperCase()} `)
// document.write(`CPU:${pc} <br> User:${userInput} <br>The winner is: ${result.toUpperCase()}` )