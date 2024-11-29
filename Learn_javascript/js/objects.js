// objects
// key-value pairs is early braces

/* const myObj = {name:"Dhuddu"};

console.log(myObj);
console.log(myObj.name); */

/* const myObj = {name:"Dhuddu"};

const anotherObj = {
    subscriber: true,
    no: 10000,
    content:{
        earn:"JS",
        grow:"Stocks"
    },
    subdivisions: ["Earn","Grow","Give"],
    action: function(){
        // return "Hello World"; 
        return `Earn by learning ${this.content.earn}`;
    }
};

console.log(myObj.name);
console.log(anotherObj.content.earn);
console.log(anotherObj["subscriber"]);
console.log(anotherObj.action()); */

/* // object inheritens
const vehicle = {
    doors:2,
    engine: function() {
        return "Vrrooor!";
    }
};

console.log(vehicle.engine());

const car = Object.create(vehicle);
car.wheels = 4;

car.engine = function()
{
    return "Whoosh"
};

console.log(car.engine());

const tesla = Object.create(car);
tesla.engine = function() {
    return "Shhhh"
}
console.log(tesla.engine()); */

const movie = {
    actor: "Kavin",
    music: "Arr",
    director: "Lokesh",
    producer: "Anbu"
};

movie.actress = "swetha"; // adding values
delete movie.producer;  // property with values
console.log(movie.hasOwnProperty("producer"));  // property checking it's avaiable are not // true or false

/* console.log(Object.values(movie));

// for inloop
for( let job in movie)
{
    console.log(`${job}, It's ${movie[job]}`);
}
 */

// destructuring the objects
/* const {music: myFavMusicDirector} = movie;
onsole.log(myFavMusicDirector); */

/* const {music: myFavMusicDirector, director: myFavD} = movie;
console.log(myFavMusicDirector, myFavD); */

/* const {actor, music, director, actress} = movie;  // properties changing variables
console.log(actor, music, director, actress);*/

const {music} = movie;

function sings({music}){
    return music;
};

console.log(sings(movie));
