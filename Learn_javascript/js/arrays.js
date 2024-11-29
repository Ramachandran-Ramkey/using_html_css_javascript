// Arrays 

const myArray=[];
// adding element

myArray[0]= "Dhuddu";
myArray[1]= "Subscribe";
myArray[2]= 999;
myArray[3]= true;

console.log(myArray);

/* console.log(myArray.length);
console.log(myArray[1]);
console.log(myArray[myArray.length-1]); */

/* myArray.unshift("click"); //add first element
console.log(myArray);
myArray.shift(); // deleting the first element
console.log(myArray);
myArray.push("click"); // add last element
console.log(myArray);
myArray.pop(); // deleting last element
console.log(myArray); */

/* const lastItem = myArray.shift();
console.log(lastItem);

console.log(myArray); */

/* myArray.splice(2,1); // deleting particular array
myArray.splice(1,1,"ramu"); // replace element
myArray.splice(1,0,"chandran"); //inserting element */

/* const newArray = myArray.slice(1); */
/* const newArray = myArray.slice(1,2); */
/* const newArray = myArray.reverse();*/
/* const newArray = myArray.join(); 
console.log(newArray); */

myArrayA = ["false", 58 , 48];

console.log(myArrayA);
/* const newArray = myArray.concat(myArrayA);
const newArray = myArrayA.concat(myArray);  // inserting orders */
const newArray = [...myArray,...myArrayA];  // ""  same value display // sprade operater


console.log(newArray);

/* console.log(myArray[2]); */