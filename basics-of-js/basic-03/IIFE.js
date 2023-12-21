// Immediately Invoked Function Expressions (IIFE)

// why we used the IIFE answer is when the program or source code is execute we need to load 
// some type of invocation immediately. like any kind of database connection etc. that's why we used it.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // the semicolon is here is very important its end the chai() invoation. and runs
// the second function.

( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hammad')
