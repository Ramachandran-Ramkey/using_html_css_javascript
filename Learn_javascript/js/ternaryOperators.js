//ternary operator
let subscriber;
let response = subscriber ? "Welcome" : "Kindly Subcribe";
console.log(response);
//
let testScore = 90;
let grade = testScore > 89 ? "A" : testScore > 79 ? "B" : testScore > 69 ? "C" : testScore > 59 ? "D" : testScore > 39 ? "Pass" : "Fail";
console.log(grade);
//(or)
let player = "rock";
let computer = "scissors";
let result = player === computer ? "Tie" : player === "rock" && computer === "paper"? "computer wins" : player === "paper" && computer === "scissors" ? "computer wins!" : player === "scissors" && computer === "rock" ? "computer wins!" : "player wins";
console.log(result);