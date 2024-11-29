// If statement

/* if(condition){
    //run code
}
else{
    // run different code
} */

/* let viewer = "Dhuddu React full course";
let reply;
if (viewer) {
    reply = `Enjoy ${viewer}`;
}
console.log(reply); */

/* let viewer;
let reply;
if (viewer) {
    reply = `Enjoy ${viewer}`;
}
else{
    reply = `Sorry I am still working`
}
console.log(reply); */

/* let customerIsBanned = false;
let viewer = "Dhuddu's JS full course";
let reply;
let finance = false;
if(customerIsBanned){
    reply = `Sorry`;
}
else if (viewer && finance)
{
    reply = `Enjoy ${viewer} and finace content`;
}
else if (viewer) {
    reply = `Enjoy ${viewer}`;
}
else{
    reply = `Sorry I am still working`
}
console.log(reply); */

let testScore = 39;
let grade;
let collegeStudent = false;

if(testScore >= 90){
    grade = `A`;
}
else if(testScore>= 80)
{
    grade = `B`;
}
else if(testScore>= 70)
{
    grade = `C`;
}
else if(testScore>= 60)
{
    grade = `D`;
}
else {
    if(collegeStudent)
    {
        grade = `Yes`;
    }

/* else if(testScore>= 40)
{
    grade = `E`;
} */
else /* else if(testScore<= 40) */

    grade = `Pass`
}
console.log(grade);