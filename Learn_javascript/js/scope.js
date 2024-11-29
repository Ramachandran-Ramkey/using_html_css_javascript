//Scope var, let, const

/* //global scope
var x=1;
let y=2;
const z=3;

//local scope // block scope
{
    let y=4;
    console.log(y);
}

//local scope //function scope

function myfunc(){
    const z=5;
    console.log(z);
}

myfunc()
console.log(y); */

//global scope

var x=1;
let y=2;
const z=3;
console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);


//local scope //function scope

  function myfunc() 
  {
    const z=5;
    /* var z=5; // function scope */
    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);

    //local scope // block scope   
    if(true)
    {
        /* var y=4; //function scope */
        let y=4;
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }
    
  }

myfunc()
console.log(y);

