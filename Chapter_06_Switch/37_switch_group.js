let browser = "Edge";

switch(browser){
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Engine");
        break;
    case "Firefox":
        console.log("Mozilla");
        break;
    case "Safari":
        console.log("Apple");
        break;
    default:
        console.log("Invalid");
}