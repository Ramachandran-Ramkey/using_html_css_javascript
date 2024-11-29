// JSON Javascript object Notation
// test formal
// To send and receive date in many programming languages

const myObj = {
    name: "Dhuddu",
    content: ["Earn", "Grow", "Give"],
    sub: function(){
        console.log("Thanks for clicking bell icon");
    }
};

console.log(myObj);
console.log(myObj.name);
myObj.sub();

const sendJSON = JSON.stringify(myObj);  // sending json file to server or some other side 
console.log(sendJSON);
console.log(sendJSON.name);
console.log(typeof myObj);
console.log(typeof sendJSON);

const receiveJSON = JSON.parse(sendJSON);  // receiving the json file to serve or some other side
console.log(receiveJSON);
console.log(receiveJSON.name);