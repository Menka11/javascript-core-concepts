// Retry Failed API Call
// In automation testing, API calls sometimes fail due to network issues. 
// Write a JavaScript program that simulates retrying a failed API call using a do...while loop. 
// The program should retry a maximum of 5 times. 
// Simulate random success/failure using Math.random() (40% chance of success: randomValue > 0.6). 
// Log each attempt and print the final result.
// Input: MAX_ATTEMPTS = 5
// Output: Attempt 1: ❌ FAILED (Timeout/Error) Attempt 2: ✅ SUCCESS (Response 200 OK) API call PASSED after 2 attempt(s).


let MAX_ATTEMPTS = 5;
let statusCode;
let Attempt = 0;
do{
    Attempt++;
    statusCode = Math.random();
    if(statusCode > 0.6){
        console.log(`Attempt ${Attempt}: ✅ SUCCESS (Response 200 OK) API call PASSED after ${MAX_ATTEMPTS} attempt(s).`);
        break;
    }
    else{
        console.log(`Attempt ${Attempt}: ❌ FAILED (Timeout/Error)`);
    }
    MAX_ATTEMPTS--;

}while(MAX_ATTEMPTS!=0)
