// Login Brute-Force Detection
// Write a JavaScript program that simulates a login system with brute-force detection. 
// The system should lock the account after 3 consecutive failed attempts. 
// Use a do...while loop to process login attempts from an array.
// Demonstrate var (global counter), let (loop variables), and const (credentials and threshold). 
// Validate using strict equality (===) and logical operators (&&).
// Input: Valid: admin@testingacademy.com / Test@1234 Attempts: [wrong, wrong, wrong, correct]
// Output: Attempt 1: ❌ FAILED - Strike 1/3 
// Attempt 2: ❌ FAILED - Strike 2/3 
// Attempt 3: ❌ FAILED - Strike 3/3 🚨 ACCOUNT LOCKED 
// Attempt 4: 🔒 ACCOUNT LOCKED - Rejected
const validEmail = 'admin@testingacademy.com';
const validPassword = 'Test@1234';
const threshold = 3;
var strickCounter = 1;
var Attempts = [
    {email: 'admin@testingacademy.com', password:'wrong'},
    {email: 'admin@testingacademy.com', password:'wrong'},
    {email: 'admin@testingacademy.com', password:'wrong'},
    {email: 'admin@testingacademy.com', password:'Test@1234'},
];
let i = 0;
do{
    if(strickCounter > threshold){    
        console.log(`Attempt ${i+1}: 🔒 ACCOUNT LOCKED - Rejected`);
    }
    else if(Attempts.email === validEmail && Attempts.password === validPassword){
            console.log(`Attempt ${i+1}: Login Success`);
            strickCounter = 0; //reset the counter
    }else{
            strickCounter ++; 
            if(strickCounter == threshold){
                console.log(`Attempt ${i+1}: FAILED - Strike ${i+1} ACCOUNT LOCKED`);
            }   
            else{
                console.log(`Attempt ${i+1}: FAILED - Strike ${i+1}/${threshold}`);
            }
            
        }
    i++; 
}while(i < Attempts.length)