//switch uses strict comparison ===
let day = 2;
switch(day){
    case 0: 
        console.log("Sunday- Rest day");
        break;
    case 1: 
        console.log("Monday- Sprint planning");
        break;
    case 2: 
        console.log("Tuesday- Development");
        break;
    case 3: 
        console.log("Wednesday- Code Review");
        break;
    case 4: 
        console.log("Thursday- Testing");
        break;
    case 5: 
        console.log("Friday- Deploment & retro");
        break;
    case 6: 
        console.log("Saturday- Rest day");
        break;
    default:
        console.log("Invalid day number");
}