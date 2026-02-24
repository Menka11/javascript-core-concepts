let username = "Jenny";
let password = "Admin123";
let isAccountLocked = false;

if((username === "Jenny" && password === "Admin123") && !isAccountLocked){
    console.log("Allowed to enter");
}else {
    console.log("Not allowed to enter");
}