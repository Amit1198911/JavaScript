

// ways of creating a function

// 1 . funciton declaration
// 2 . funciton expression

//function declarartion

function sayhello(){
    console.log("Hello");
}

sayhello();

// fuction expression

let greeting = function(){
    console.log("Good morning");
}
greeting();

// create a function to greet your mom
let mom = function(){
    console.log("Hello mom");
}
mom();

// parameter and arguments
// const addnum = function(num1,num2){
//     let result = num1 + num2;
//     console.log(result);
// }
// addnum(2,4);

const multi = function(num1,num2,num3){
  let result = num1*num2*num3;
  console.log(result);
}
multi(2,3,4);

const multinum = function(num1,num2,num3){
    let result = num1*num2*num3;
    console.log(result);
}
multinum(2,3,4);

const addnum = function(num1,num2){
    return num1+num2;
}
console.log(addnum(2,40));