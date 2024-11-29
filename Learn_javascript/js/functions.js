// functions

/* function sum(num1,num2){
    return num1 + num2;
}
console.log(sum(10,2)); */

/* function sum(num1, num2)
{
    console.log(num1);
    console.log(num2);
    if(num2 === undefined)
    {
        return num1+num1;
    }
    return num1+num2;

}
console.log(sum(10,100)); */

/* console.log("ramkey700@gmail.com".slice(0,"ramkey700@gmail.com".indexOf("@"))); */
/* email = "ramkey700@gmail.com"
console.log(email.slice(0,email.indexOf("@"))); */

/* function getUserNameFromEmail(email){
    return(email.slice(0,email.indexOf("@")));
}
console.log(getUserNameFromEmail("ramkey700@gmail.com")); */

//three types of function call
/* //one
function toProperCase(name)
{
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(toProperCase("subcribe")); */

/* //Two
const toProperCase = function (name)
{
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(toProperCase("subcribe")); */

//Three
const toProperCase = (name) =>
{
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(toProperCase("subcribe"));
