x = 5;
console.log(x); //5  - if value not assigned only declared - it shows undefined, if not declared-gives error 
var x; 

var y;
y = 2;
console.log(y); //2

//Above both code works same due to javascript hoisting concept. 
/*Hoisting means JavaScript's default behavior of moving all 
declarations to the top of the current scope (to the top of the current script or the current function) */

// console.log(l); // tdz - reference error
let l = 10;  //after declaration no tdz
console.log(l); 
// console.log(c);  // tdz - reference error
const c = 10;  //after declaration no tdz
console.log(c);