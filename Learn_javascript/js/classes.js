//classes

/* const myPizza = {
    size: "medium",
    crust: "original",
    back: function() {
        return console.log(`backing a ${this.size} ${this.crust} crust pizza.`);
    }
};

myPizza.back();

class Pizza {
    constructor(){
        this.size = "medium";
        this.crust = "Original";
    }
    back() {
        return console.log(`Backing a ${this.size} ${this.crust} crust pizza`);
    }
}

const anotherPizza = new Pizza(); */
/*  ------------------------------------ */
/* const myPizza = {
    size: "medium",
    crust: "original",
    back: function() {
        return console.log(`backing a ${this.size} ${this.crust} crust pizza.`);
    }
};

myPizza.back();

class Pizza {
    constructor(typePizza, sizePizza, crustPizza){
        this.type = typePizza;
        this.resize = sizePizza;
        this.size = "medium";
        this.crust = crustPizza;
    }
    back() {
        return console.log(`Backing a ${this.resize} ${this.size}  ${this.type} ${this.crust} crust pizza`);
    }
}

const anotherPizza = new Pizza("margarita", "small", "thin"); //classes using complex use
anotherPizza.back();
const anPizza = new Pizza ("pepperonni", "Medium", "Original");
anPizza.back() */
/* -------------------------------------------- */
/* const myPizza = {
    size: "medium",
    crust: "original",
    back: function() {
        return console.log(`backing a ${this.size} ${this.crust} crust pizza.`);
    }
};

myPizza.back(); 
/* -------------------------------------------- */
/* class Pizza {
    constructor(typePizza, sizePizza, crustPizza){
        this.type = typePizza;
        this.resize = sizePizza;
        this.size = "medium";
        this.crust = crustPizza;
        this.toppings = "olives";
    }

    get toppingsPizza(){
        return this.toppings;
    }

    set toppingsPizza(toppingsPizza){
        this.toppings = toppingsPizza;
    }

    back() {
        return console.log(`Backing a ${this.resize} ${this.size}  ${this.type} ${this.crust} crust pizza with ${this.toppings}`);
    }
}

// const anotherPizza = new Pizza("margarita", "small", "thin"); //classes using complex use
//anotherPizza.back(); 
//const anPizza = new Pizza ("pepperonni", "Medium", "Original"); 
//anPizza.back() 
const myPizza = new Pizza("margarita", "small", "thin");
myPizza.toppingsPizza = "sausage"; 
myPizza.back(); */

/*------------------------------------------------------*/
/* class Pizza {
    constructor(typePizza, sizePizza, crustPizza){
        this.type = typePizza;
        this.resize = sizePizza;
        this.size = "medium";
        this.crust = crustPizza;
        this.toppings = "olives";
    }

    getToppings(){
        return this.toppings;
    }

    setToppings(toppingsPizza){
        this.toppings = toppingsPizza;
    }

    back() {
        return console.log(`Backing a ${this.resize} ${this.size}  ${this.type} ${this.crust} crust pizza with ${this.toppings}`);
    }
}

const myPizza = new Pizza("margarita", "small", "thin");
myPizza.setToppings("sausage"); 
myPizza.back(); */

/*-------------------------------------------------------*/
// ordering multiple pizza

/* class Pizza {
    constructor(typePizza, sizePizza, crustPizza){
        this.type = typePizza;
        this.resize = sizePizza;
        this.size = "medium";
        this.crust = crustPizza;
        this.toppings = [];
    }

    getToppings(){
        return this.toppings;
    }

    setToppings(toppingsPizza){
        this.toppings.push(toppingsPizza);
    }

    back() {
        return console.log(`Backing a ${this.resize} ${this.size}  ${this.type} ${this.crust} crust pizza with ${this.toppings}`);
    }
}

const myPizza = new Pizza("margarita", "small", "thin");
myPizza.setToppings("sausage"); 
myPizza.setToppings("egg");
myPizza.back();
console.log(myPizza.getToppings());
 */
/*--------------------------------------------------*/

//super class ,Parent class, sub class, child class
/* 
class Pizza {
    constructor(sizePizza){
        this.size = sizePizza;
        this.crust = "Original";
    }

    getCrust(){
        return this.crust;
    }

    setCrust(crustPizza){
        this.crust = crustPizza;
    }

}

class specialPizza extends Pizza{
    constructor(sizePizza){
        super(sizePizza);
        this.type = "Margarita";
    }
    slice(){
        console.log(`Our ${this.type} ${this.size} ${this.crust} pizza has 6 clices`);
    }
}

const myspecialPizza = new specialPizza("Medium");
myspecialPizza.slice(); */

/*------------------------------------------------------*/
//Factory Function
// previous update

/* function pizzaFactory(sizePizza){
    const crust = "original";
    const size = sizePizza;
    return{
        back: ()=> console.log(`Backing a ${size} ${crust} crust pizza`)
    };
}

const myPizza = pizzaFactory("small");
myPizza.back()
console.log(myPizza.crust);

class Pizza {
    constructor(sizePizza){
        this._size = sizePizza;   // private property
        this._crust = "Original";  // private property
    }

    getCrust(){
        return this._crust;
    }

    setCrust(crustPizza){
        this._crust = crustPizza;
    }

} */

/*---------------------------------------------------*/
//Factory Function
// latest update

class Pizza {
    crust = "Original";   // public property
    #sauce = "tomato";    // private property latest updates
    constructor(sizePizza){
        this.size = sizePizza;   
    }

    getCrust(){
        return this.crust;
    }

    setCrust(crustPizza){
        this.crust = crustPizza;
    }
    back(){
        return console.log(`Backing a ${this.size} ${this.crust} ${this.#sauce} pizza`);
    }
}

const myPizza = new Pizza("small");
myPizza.back();
/* console.log(myPizza.#sauce);  // cannot read #sauce property */
