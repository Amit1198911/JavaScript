// ways of creating string

// const myname = "Amit"

// //using the constructor method
// const firstname = new String("Doe");
// // console.log(myname, firstname);

// const result = myname === firstname;
// console.log(firstname);

// ! string concatenation

// (+)operator

// const str1 = "hello";
// const str2 = " how are you";
// const result = str1 + str2;
// console.log(result);


// concate method
// const str1 = "hello";
// const str2 = "how are you";
// const result = str1.concat(" " + str2);
// console.log(result);


// ! template literals
// string templates
// back tick sybrax
// template strings

// const msg = `good day brother`;
// const msg2  = `good morning`;
// console.log(msg2);

// multiline strings
// const str = 
// `
// jdln;snv;snv s,zbvsbzvbavbsvksndvsbv
// `;
// console.log(str);

// interpolation
// const age = 30;
// const welcome = `Your age is ${age}`;

// ! string length
// const lastname = "Ahirwar";
// console.log(lastname.length);

// coding challenge 1
// function length(str1){
//     return str1.length;
// }

// let strs = prompt("Enter a string");
// console.log(length(strs));

// function longer(str1,num1){
//     if(str1.length > num1){
//         return true;
//     }
//     return false;
// }

// const str  = prompt();
// const num1 = prompt();
// console.log(longer(str,num1));  

// !trim / touppercase / tolowercase / indexOf

// 1 . trim : to remove whitespaces
// const str = "  Coding Train   ";
// console.log(str);
// const res = str.trim();
// console.log(res);

// 2 . touppercase() and to lowercase()
// const str = "Coding TRAIN";
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

//  3. indexOf()
// const str = "Coding TRAIN";
// console.log(str.indexOf('T'));


// coding challenge 2
// const whitespaces = function(str){
//     const str2 = str.trim();
//     if(str2!=str){
//         return true;

//     }
//     return false;
// }

// let ans = whitespaces("Anit");
// console.log(ans);

// ! split()
// split the string into array

// const str = "you";
// const res = str.split("");
// console.log(res[0]);


// ! join()
// joins the chars
// const str = "you";
// const res = str.split("");
// console.log(res.join("-"));

// !reverse()
// const food = ["Pizza","burger","momos"];
// const res = food.reverse();
// console.log(res);

// challenge 3
// const separatestr = function(str,seprate){
//     return str.join(seprate);
// }
// const res = separatestr(["amit","arpit","raj"],"-");
// console.log(res);

// const revstr = function(str){
//     return str.split("").reverse().join("")
// }
// const res = revstr("Amit");
// console.log(res);

// ! repeat()
// const str = "Amit";
// const res = str.repeat(4);
// console.log(res);

// challenge
// const repeatstring = function(str,num){
//     if(num<=0){

//         return "number should be greater than zero";

//     }
//     return str.repeat(num);
// }
// const res = repeatstring("Amit",3);
// console.log(res);

// ! startsWith()
// to determine whether a string begins with a specified string


// const str = "Welcome";
// const res = str.startsWith("Wel");
// console.log(res);

// const strartstring =  function(str,str1){
//     if(str.startsWith(str1)){
//         return true;
//     }
    
//     return false;
// }
// const res = strartstring("Amit","Ami");
// console.log(res);

// ! endWith()
// const endstring =  function(str,str1){
//     if(str.endsWith(str1)){
//         return true;
//     }
    
//     return false;
// }
// const res = endstring("Amit","it");
// console.log(res);

// ! includes();
// it is case sensitive method

// const str = "Are you a developer";
// const res = str.includes("you",0);
// console.log(res);


// challenge 7
// const checkinclude = function(str,include){
//     if(str.includes(include)){
//         return true;
//     }
//     return "it does not include " + include;

// }
// const str = "It's just like raining outside";
// const res = checkinclude(str,"like");
// console.log(res);


// ! slice()
// const str = "welcome got javascript method";
// const res = str.slice(0,6);                       //does not include the last index
// console.log(res);


// challenge 8
// const slicestr = function(str,chars){
//     return str.slice(0,chars);
// }

// const res = slicestr("Ahirwar",5);
// console.log(res);

// ! string comparision
// console.log("a" < "b");
// console.log("a" < "A");

// console.log("Glow" > "Glee");

// compare of different types
// console.log("a" > 2);
// console.log("5"==5);
// console.log(false ==0);

// comapare bwtween null and undefined
console.log(null===undefined);