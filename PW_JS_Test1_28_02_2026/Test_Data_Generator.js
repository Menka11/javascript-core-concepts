// Test Data Generator
// As an SDET, you frequently need to generate test data for form testing. 
// Write a JavaScript program that generates test user data using a for loop. 
// Each user should have a unique ID (USR-0001 format), name, email, and 
// role (cycling through: admin, editor, viewer, tester, manager). 
// Every 3rd user should be inactive (edge case testing). 
// Demonstrate proper use of var (global counter), let (loop variables), and const (fixed values).
// Input: Generate 8 users
// Output: 
// USR-0001 | TestUser_1 | testuser1@testingacademy.com | admin | ACTIVE 
// USR-0002 | TestUser_2 | testuser2@testingacademy.com | editor | ACTIVE
// USR-0003 | TestUser_3 | testuser3@testingacademy.com | viewer | INACTIVE
var users=[];
const role = ['admin','editor','viewer','tester', 'manage'];
for(let i = 1; i <= 8; i++){
    if(i % 3 == 0){
        let userID = `USR-000${i}`;
        let userName = `TestUser_${i}`;
        let email = `testuser${i}@testingacademy.com`;
        let userRole =  role[i];
        let userStatus = 'INACTIVE';
        users[i-1] = userID + "|" + userName + "|" + email + "|" + userRole + "|" + userStatus;
    }
    else{
        let userID = `USR-000${i}`;
        let userName = `TestUser_${i}`;
        let email = `testuser${i}@testingacademy.com`;
        let userRole =  role[i];
        let userStatus = 'ACTIVE';
        users[i-1] = userID + "|" + userName + "|" + email + "|" + userRole + "|" + userStatus;
    }
  
 }
   console.log(users);
  