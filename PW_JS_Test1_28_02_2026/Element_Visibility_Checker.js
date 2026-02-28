// Element Visibility Checker
// In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them. 
// Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) and 
// prints the appropriate action a QA engineer should take. Use strict equality (===), 
// logical operators (&&, ||), and the ternary operator for severity level.

// States: READY (all true), DISABLED (present+displayed but not enabled), 
// HIDDEN (present but not displayed), NOT FOUND (not present).
// Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).
// Input: isPresent = true, isDisplayed = true, isEnabled = false
// Output: Status: DISABLED Severity: WARNING Action: Element is visible but disabled. Wait for enable state or check preconditions.


let isPresent = true, isDisplayed = true, isEnabled = false;
let elementStatus;

if(isPresent=== true && isDisplayed === true && isEnabled === true){
    elementStatus = 'READY';
}else if(isPresent===true && isDisplayed=== true || isEnabled ===false){
    elementStatus = 'DISABLED';
}else if(isPresent === true && isDisplayed === false){
    elementStatus = 'HIDDEN';
}else if(isPresent === false){
    elementStatus = 'NOT FOUND';
}else{
    elementStatus = 'INVALID';
}

let severity = elementStatus == 'READY'? 'OK': 
               elementStatus == 'NOT FOUND'? 'CRITICAL':
               elementStatus == 'HIDDEN' || elementStatus == 'DISABLED' ? 'WARNING' :'';

if(severity == 'WARNING')
    console.log(`Status: ${elementStatus} Severity: ${severity} Action: Element is visible but disabled. Wait for enable state or check preconditions.`)
else if(severity == 'OK')
    console.log(`Status: ${elementStatus} Severity: ${severity} Action: Element is Ready`);
else if(severity == 'CRITICAL')
    console.log(`Status: ${elementStatus} Severity: ${severity} Action: Element is not present.`);
else 
    console.log("Element stauts is not defined");
