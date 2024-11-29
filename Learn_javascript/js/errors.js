// Errrors and Error Handling
"use strict";  // finding reference errors
/* variable = "Dhuddu"; // reference error */

/* const variable = "Dhuddu";
console.log(variable); */

/* Object..create();  // syntax error */
/* variable = "Subscribe"; // type error */

/* const makeError = () => {
    try{
        const name = "Dhuddu";
        name = "Subscribe";
    }catch(err){
        //console.log(err);
        //console.error(err);
        //console.warn(err);
        //console.table(err); 
        //console.error(err.stack);
        logTheError(err.stack); 
    }
};

makeError(); */
/*--------------------------------------------------*/
/* const makeError = () => {
    try{
        
        throw new customError("This is a custom Error");
    
    }catch(err){
         
        console.error(err.stack);
      
    }
};

makeError();

function customError(message){
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name}:${this.message}`;
} */

/*-------------------------------------------*/

/* const makeError = () => {
    try{
        
        throw new Error("This is a custom Error");
    
    }catch(err){
         
        console.error(err.stack);
      
    }
};

makeError(); */

/*-------------------------------------------------*/

/* const makeError = () => {
    try{
        
        throw new Error("This is a custom Error");
    
    }catch(err){
         
        console.error(err.stack);
      
    }finally{                  // using finally
        console.log("...finally");
    }
};

makeError(); */

/*---------------------------------------*/
const makeError = () => {
    let i = 0;   //using highdrated variable (i)
    while(i <= 5){

    try{
        if(i%2 !==0)
        {
            throw new Error("Odd Number");  
        }
        //throw new Error("This is a custom Error");
        console.log("Even Number");

    }catch(err){
         
        console.error(err.message);
      
    }finally{                  // using finally
        console.log("...finally");
        i++;
    }
}
};

makeError();
