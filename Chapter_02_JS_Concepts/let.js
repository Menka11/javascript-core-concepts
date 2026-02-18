let a = 10;
// let a = 20; //not allowed re-declaration 
a = 20; // re-assignment is ok
console.log(a); // when use variable before declaration, it gives an error


function sum (a,b){
    let c = a + b;
    console.log(c); //30
    
    if(true){
        let c = 500;
        console.log("inside if block",c); //500
    }
    console.log("last value of c", c); //30  - this is the issue of var. value should be 100 but it displayed 500 
}

sum(10,20);