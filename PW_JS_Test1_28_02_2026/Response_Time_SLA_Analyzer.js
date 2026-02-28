// Response Time SLA Analyzer
// As a performance tester, you collect API response times in milliseconds. 
// Write a JavaScript program using a while loop that analyzes an array of response times 
// and prints a performance report with min, max, average, and how many responses breached 
// the SLA threshold (> 500ms). Use comparison operators for min/max tracking.
// Input: responseTimes = [120, 230, 450, 510, 180, 620], SLA_LIMIT = 500
// Output: Total Requests: 6 Min Response: 120ms Max Response: 620ms SLA Breaches: 2 (33.33%) Overall Status: ❌ SLA VIOLATED

let responseTimes = [120, 230, 450, 510, 180, 620];
let SLA_LIMIT = 500;
let i = 0, min = responseTimes[0], max = responseTimes[0], SLABreachersCount = 0;
let responseTimesLeng = responseTimes.length;

while(i < responseTimesLeng){
    if(min > responseTimes[i]){
        min = responseTimes[i];
    }if(max < responseTimes[i]){
        max = responseTimes[i];
    }
    if(responseTimes[i] >500){
        SLABreachersCount++;
    }
    i++;

}
if(SLABreachersCount!=0){
    SLABreachersCountPercentage = ((SLABreachersCount * 100 )/responseTimesLeng).toFixed(2);
    console.log(`Total Requests: ${responseTimesLeng} Min Response: ${min}ms Max Response: ${max}ms SLA Breaches: ${SLABreachersCount} (${SLABreachersCountPercentage}%) Overall Status: ❌ SLA VIOLATED`)
}