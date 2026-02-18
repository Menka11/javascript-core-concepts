// var a = 10;
// var a = 20; //allowed re-declaration and re-initialization
console.log(a); // not give an error, shows undefined due to hoisting (only applicable when atleast variable is declared, if it is not declare it gives an error)
var a = 10;

function sum (a,b){
    var c = a + b;
    console.log(c); //30
    var c = 100;
    console.log(c); //100
    if(true){
        var c = 500;
        console.log("inside if block",c); //500
    }
    console.log("last value of c", c); //500  - this is the issue of var. value should be 100 but it displayed 500 
}

sum(10,20);