let name = "Amit Ahirwar";
console.log(name);

let t = 5;
if(t===5){
    alert("true");

}
else{
    alert("false");
}

// function
function add(n1,n2){
    return n1+n2;
}
console.log(add(4,7));

//Events

document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });