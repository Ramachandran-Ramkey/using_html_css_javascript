//Numbers
const myVariable = "423.088";
const myNumber = 42;
const myFloat = 42.088;

//Number methods(isInteger)
console.log(Number.isInteger());
console.log(Number.isInteger(42));
//passing the value 
console.log(Number.isInteger(myVariable));
//parseFloat method
console.log(Number.parseFloat(myVariable));
console.log(Number.parseFloat(myVariable).toFixed(2));
console.log(myNumber.toString());
console.log(myFloat.toString());
console.log(Number.parseInt(myFloat));
//shining
console.log(parseFloat(myVariable).toFixed(3).toString());
//isNaN ( two type of isNaN 1.Number.isNaN, 2. isNaN)
Number.isNaN()
isNaN()
console.log(Number.isNaN("Dhuddu"));
console.log(isNaN("Dhuddu"));
