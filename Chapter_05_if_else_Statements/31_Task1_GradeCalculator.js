//Grade Calculator
// Write a program that calculates and displays the letter grade for a given 
// numerical score (e.g., A, B, C, D, or F) based on the following grading scale:
// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59

let score = -1;
if(score >= 90 && score <= 100){
    console.log("Grade is: A");
}else if(score >= 80 && score <= 89){
    console.log("Grade is: B");
}else if(score >= 70 && score <= 79){
    console.log("Grade is: C");
}else if(score >= 60 && score <=69){
    console.log("Grade is: D");
}else if(score >=0 && score <=59){
    console.log("Grade is: F");
}else{
    console.log("Not a valid score");
}