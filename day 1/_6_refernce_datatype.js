//objects

let animal = {
    name : "Cow",
    legs : 4
}

//Dot Notation
console.log(animal.name);
//Bracket Notation
console.log(animal["legs"])

//Arrays
let selectbooks = ["THink and Grow Rich","Invisible man"];
console.log(selectbooks);
console.log(selectbooks.length);

//Function
function prin(){
    console.log("Namaste World")
}
prin()

function nm(name,lastname){
    console.log("Namaste " + name + " " + lastname);

}
nm("Amit","Ahirwar");

function add(a,b){
    return a+b;
}
console.log(add(3,4));