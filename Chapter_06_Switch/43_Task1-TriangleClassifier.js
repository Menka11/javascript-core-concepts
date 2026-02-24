// Triangle Classifiers
// Write a program that classifies a triangle based on its side lengths. 
// Given three input values representing the lengths of the sides, 
// determine if the triangle is equilateral (all sides are equal), 
// isosceles (exactly two sides are equal), or scalene (no sides are equal). 
// Use an if-else statement to classify the triangle.


let side1= 100, side2 = 10, side3 = 10;
if(side1==side2 && side2==side3 && side3==side1){
    console.log("Equilateral triangle");
}else if(side1==side2 || side1==side3 || side2==side3){
    console.log("Isosceles triangle");
}else{
    console.log("Scalene triangle")
}