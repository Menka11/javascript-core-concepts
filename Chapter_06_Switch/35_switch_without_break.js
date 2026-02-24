//switch uses strict comparison ===
let day = 2;
switch(day){
    case 0: 
        console.log("Sunday- Rest day");
        
    case 1: 
        console.log("Monday- Sprint planning");
       
    case 2: 
        console.log("Tuesday- Development");
        
    case 3: 
        console.log("Wednesday- Code Review");
      
    case 4: 
        console.log("Thursday- Testing");
      
    case 5: 
        console.log("Friday- Deploment & retro");
    
    case 6: 
        console.log("Saturday- Rest day");
    
    default:
        console.log("Invalid day number");
}