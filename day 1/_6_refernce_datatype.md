//objects

let animal = {
    name : "Cow",
    legs : 4
}

//Dot Notation
console.log(animal.name);
Cow

//Bracket Notation
console.log(animal["legs"]);
4

//Arrays
let selectbooks = ["THink and Grow Rich","Invisible man"];
console.log(selectbooks);
['THink and Grow Rich', 'Invisible man']
console.log(selectbooks.length);
2

//Function
function prin(){
    console.log("Namaste World")
}
prin()
Namaste World

function nm(name,lastname){
    console.log("Namaste " + name + " " + lastname);

}
nm("Amit","Ahirwar");
Namaste Amit Ahirwar

function add(a,b){
    return a+b;
}
console.log(add(3,4));
7
