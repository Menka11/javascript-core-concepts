let side1= 100, side2 = 10, side3 = 10;
if(side1==side2 && side2==side3 && side3==side1){
    console.log("Equilateral triangle");
}else if(side1==side2 || side1==side3 || side2==side3  ){
    console.log("Isosceles triangle");
}else{
    console.log("Scalene triangle")
}