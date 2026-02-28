// Mini Test Suite Runner
// Build a mini test suite runner that executes test cases and generates a summary report. 
// This question combines ALL topics: var/let/const, if-else, switch, for loop, while loop, do...while, 
// operators (===, !==, &&, ||, ??, ternary), typeof checks, and identifiers.

// Each test case has a name, expected value, actual value, and comparison 
// type (strictEqual, looseEqual, typeCheck, truthy, lessThan). Run all tests, track pass/fail/error counts, 
// find consecutive passes from start (while loop), find first failure (do...while), and 
// print a comprehensive report.
// Input: { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" }
// Output: ✅ TC-01: Status code is 200 → PASS (200 === 200) ... Pass Rate: 80.00% Overall: ❌ FAILED

const testCase = [{ name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" },
                { name: "Compare two value", actual: "10", expected: 10, type: "looseEqual" },
                { name: "Check array type", actual: Array, expected: Object, type: "typeCheck" },
                { name: "VAlue is truthy", actual: "hello", expected: null, type: "truthy" },
                { name: "Salary less than 50000", actual: 45000, expected: 50000, type: "lessThan" },
];
var passCount = 0, failedCount = 0, error = 0;
let results = [];

for(let i = 0 ; i < testCase.length ; i++){
    const test = testCase[i];
    let result;
    let expression = '';
    
    switch(test.type){
        case "strictEqual":
            result = test.actual === test.expected;
            expression = `${test.actual} === ${test.expected}`;
            break;
        case "looseEqual":
            result = test.actual == test.expected;
            expression = `${test.actual} == ${test.expected}`;
            break;
        case "typeCheck":
            result = typeof test.actual === test.expected;
            expression = `${test.actual} === ${test.expected}`;
            break;
        case "truthy":
            result = test.actual === true;
            expression = `${test.actual} === true`;
            break;
        case "lessthan":
            result = test.actual < test.expected;
            expression = `${test.actual} < ${test.expected}`;
            break;
        default:
            result = null;
    }
    if(result == true){
        passCount++;
        results.push("PASS");
    }else if(result == false){
        failedCount++;
        results.push("FAILED");
    }else{
        error++;
        results.push("ERROR");
    }

    let consecutivePasses = 0;
    let j = 0;

    while (j < results.length && results[j] === "PASS") {
        consecutivePasses++;
        j++; }
    
    let firstFailure = -1;
    let k = 0;

    do {
        if (results[k] === "FAIL") {
            firstFailure = k;
            break;
        }
        k++;
    } while (k < results.length);  
}
    let total = testCase.length;
    let passRate = ((passCount * 100) / total).toFixed(2);
    console.log(`✅ TC-01: Status code is 200 → PASS (200 === 200) ... Pass Rate: ${passRate}% Overall: ❌ FAILED`)




