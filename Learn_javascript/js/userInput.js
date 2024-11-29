// user input

/* alert("Hi Subscribers"); */ //ok

/* let myBoolean = confirm("Hi Subscribers"); true or false
console.log(myBoolean); */

/* let my = prompt("Enter the Name:"); //cancel === null
console.log(my); */

/* let my = prompt("Enter the Name:"); //null collapsing
console.log(my ?? "You didn't Enter your Name"); */

let my = prompt("Enter the Name:"); 
if (my)
    {
        console.log(my ?? "You didn't Enter your Name");
    }
else{
    console.log("You didn't Enter your Name");
}

console.log(my.trim().length); // using trim() function(uses to removing blank space)