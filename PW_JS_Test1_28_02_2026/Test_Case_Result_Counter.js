// Test Case Result Counter
// After a test suite runs, you receive an array of test results 
// (strings: "pass", "fail", "skip"). 
// Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped. 
// Print a test report with total tests, counts, pass rate percentage, 
// and a verdict (all passed → ready for release, ≤2 failures → review, >2 failures → block release).
// Input: testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]
// Output: Total Tests : 8 Passed: 5 Failed: 2 Skipped: 1 Pass Rate: 62.50% VERDICT: Minor failures. Review before release.

let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];
let passCount = 0, failedCount = 0, skipCount = 0;
let verdict = '';
let testCount = testResults.length;
for(const testResult of testResults){
    if(testResult == "pass"){
        passCount ++;
    }else if(testResult == "fail"){
        failedCount ++;
    }
    else if(testResult == "skip"){
        skipCount ++;
    }
    else{
        console.log("Status of test is invalid");
    }
}
let passRatePercentage = ((passCount * 100) / testCount).toFixed(2);
if(passCount==testCount){
    verdict = "Ready for release";
}
else if(failedCount <=2){
    verdict = "Minor failures. Review before release";
}
else if(failedCount > 2){
    verdict = "Block release"
}
console.log(`Total Tests : ${testCount} Passed: ${passCount} Failed: ${failedCount} Skipped: ${skipCount} Pass Rate: ${passRatePercentage}% VERDICT: ${verdict}`);
