//function of square number

function square(number){
    return number*number;

}
console.log(square(5));
25

When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function

function myfunc(theobject){
    theobject.make = "Toyota";
}
const mycar = {
    make : "Honda",
    model : "Accord",
    year : 1998,
};

console.log(mycar.make);  //Honda
myfunc(mycar);
console.log(mycar.make); //Toyota

 When you pass an array as a parameter, if the function changes any of the array's values, that change is visible outside the function

function myfunc(theArray){
    theArray[0] = 30;

}
const arr=[45];
console.log(arr[0]);  //45
myfunc(arr);
console.log(arr[0]);  //30

<!-- Function Expression -->
const square = function(number){
    return number*number;

};
console.log(square(5));  //25

const factorial = function fac(n){
    return n<2 ? 1 : n*fac(n-1);
}
console.log(factorial(4));  //24

Function expressions are convenient when passing a function as an argument to another function. The following example shows a map function that should receive a function as first argument and an array as second argument:

function map(f,a){
    const result = new Array(a.length);
    for(let i=0;i<a.length;i++){
        result[i] = f(a[i]);

    }

    return result;

}

const cube = function(x){
    return x*x*x;
}

const numbers = [0,1,2,5,10];
console.log(map(cube,numbers));  //[0, 1, 8, 125, 1000]

<!-- functoin hoisting -->
This is because the JavaScript interpreter hoists the entire function declaration to the top of the current scope
console.log(square(5));  //25

function square(n){
    return n*n;
}
Function hoisting only works with function declarations — not with function expressions.

Recursion
A function can refer to and call itself. There are three ways for a function to refer to itself:

The function's name
arguments.callee
An in-scope variable that refers to the function

<!-- Nested Function -->
To summarize:

The inner function can be accessed only from statements in the outer function.
The inner function forms a closure: the inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function.

function addsquare(a,b){
    function square(x){
        return x*x;
    }
    return square(a) + square(b);
}

console.log(addsquare(2,3));  //13
console.log(addsquare(3,4));  //25
console.log(addsquare(4,5));  //41

<!-- Multiple Nested functions -->
function A(x){
    function B(y){
        function C(z){
            console.log(x+y+z);  //6

        }
        C(3);
    }
    B(2);
}
A(1);  


<!-- Name Conflict -->
When two arguments or variables in the scopes of a closure have the same name, there is a name conflict. More nested scopes take precedence. So, the innermost scope takes the highest precedence, while the outermost scope takes the lowest. This is the scope chain.

function outside(){
    const x = 5;
    function inside(x){
        return x*2;

    }
    return inside;
}

console.log(outside()(10));  //20(instead of 10)

<!-- Arrow Function -->
An arrow function expression (also called a fat arrow to distinguish from a hypothetical -> syntax in future JavaScript) has a shorter syntax compared to function expressions and does not have its own this, arguments, super, or new.target. Arrow functions are always anonymous.


const a = ["Hydrogen","Helium","Lithium","Beryllium"];
const a2 = a.map(function(s){
    return s.length;
});
console.log(a2);  //[8, 6, 7, 9]

const a3 = a.map((s) => s.length);
console.log(a3);  //[8, 6, 7, 9]


