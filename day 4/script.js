// Defining function in js

//function of square number
// function square(number){
//     return number*number;

// }
// console.log(square(5));

// When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function
// function myfunc(theobject){
//     theobject.make = "Toyota";
// }

// const mycar = {
//     make : "Honda",
//     model : "Accord",
//     year : 1998,
// };

// console.log(mycar.make);
// myfunc(mycar);
// console.log(mycar.make);



// When you pass an array as a parameter, if the function changes any of the array's values, that change is visible outside the function
// function myfunc(theArray){
//     theArray[0] = 30;

// }

// const arr=[45];
// console.log(arr[0]);
// myfunc(arr);
// console.log(arr[0]);

// function Expression
// const square = function(number){
//     return number*number;

// };
// console.log(square(5));

// const factorial = function fac(n){
//     return n<2 ? 1 : n*fac(n-1);
// }
// console.log(factorial(4));



// Function expressions are convenient when passing a function as an argument to another function. The following example shows a map function that should receive a function as first argument and an array as second argument:
// function map(f,a){
//     const result = new Array(a.length);
//     for(let i=0;i<a.length;i++){
//         result[i] = f(a[i]);

//     }

//     return result;

// }

// const cube = function(x){
//     return x*x*x;
// }

// const numbers = [0,1,2,5,10];
// console.log(map(cube,numbers));

// function hoisting
// <!-- This is because the JavaScript interpreter hoists the entire function declaration to the top of the current scope -->
// console.log(square(5));

// function square(n){
//     return n*n;

// }




// Recursion
// A function can refer to and call itself. There are three ways for a function to refer to itself:

// The function's name
// arguments.callee
// An in-scope variable that refers to the function



// Nested Function
// function addsquare(a,b){
//     function square(x){
//         return x*x;
//     }
//     return square(a) + square(b);
// }

// console.log(addsquare(2,3));  //13
// console.log(addsquare(3,4));  //25
// console.log(addsquare(4,5));  //41


// Multiple Nested functions
// function A(x){
//     function B(y){
//         function C(z){
//             console.log(x+y+z);  //6

//         }
//         C(3);
//     }
//     B(2);
// }
// A(1);  


// Name Conflict
// function outside(){
//     const x = 5;
//     function inside(x){
//         return x*2;

//     }
//     return inside;
// }

// console.log(outside()(10));  //20(instead of 10)


// Arrow Function
const a = ["Hydrogen","Helium","Lithium","Beryllium"];

const a2 = a.map(function(s){
    return s.length;
});

console.log(a2);  //[8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log(a3);  //[8, 6, 7, 9]