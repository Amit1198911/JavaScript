// ! Control Structures

// if statement
let stock = true;

if(stock){
    console.log("If item in stock");

}

// else statement
let loggedin = false;

if(loggedin){
    console.log("Logged in");

}
else{
    console.log("Not logged in");

}

let registered = true;
if(registered){
    console.log("You are eligible to vote");

}
else{
    console.log("You are not eligible to vote");
}

// else if statement

let trafficlight = "yellow";
if(trafficlight === "red"){
    console.log("stop");
}
else if(trafficlight === "yellow"){
    console.log("Prepare to go");
}
else if(trafficlight === "green"){
    console.log("GO");

}
else {
    console.log("Invalid traffic");
}