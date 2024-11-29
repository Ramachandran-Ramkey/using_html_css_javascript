// switch statement

/* //switch statement syntax
switch (expression or values) {
    case choice1:
     // Run code;
       break;
    case choice2:
     // Run different code;
       break;
    
    default:
      //Run different code;
} */

  /* switch (3) */
  switch (Math.floor(Math.random()*4))
  {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    
    default:
        console.log("No Match");
    
  }    

  //switch case statement for sample video game code

  let player = "rock";
  let computer = "scissors";

  switch (player) {
    case computer:
        console.log("Tie!");
        break;
    case "rock":
          if(computer === "scrissors"){
            console.log("Player Win");
          }
          else{
            console.log("Computer Win");
          }
          break;
          
    default:
          
        console.log("No Tie!");
  }
