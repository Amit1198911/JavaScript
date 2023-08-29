// Iterating over arrays

const colors = ["red","green","blue"];
colors.forEach((color) => console.log(color));

// red
// green
// blue

Arrays Methods

1.concat()

The concat() method joins two or more arrays and returns a new array.

let myArray = ["1","2","3"];

myArray = myArray.concat("a","b","c");

console.log(myArray);

//['1', '2', '3', 'a', 'b', 'c']

2.join()

The join() method joins all elements of an array into a string.

const myArray = ["Wind","Rain","Fire"];

const list = myArray.join("-");

console.log(list);

// Wind-Rain-Fire

3.push()

The push() method adds one or more elements to the end of an array and returns the resulting length of the array.

const myArray = [1,2,3];

myArray.push("8");

console.log(myArray);

//[1, 2, 3, '8']

4.pop()

The pop() method removes the last element from an array and returns that element.

const myArray = ["1","2","3"];

const first = myArray.pop();

console.log(first);

//3

5.shift()

The shift() method removes the first element from an array and returns that element.

const myArray = ["1","2","3"];

const first = myArray.shift();

console.log(first);

//1

// 6.unshift()

The unshift() method adds one or more elements to the front of an array and returns the new length of the array.

const myArray = ["1","2","3"];

myArray.unshift("4","5");

console.log(myArray);

// ['4', '5', '1', '2', '3']

// 7.slice()

The slice() method extracts a section of an array and returns a new array.

const myArray = ["1","2","3","4","5"];

console.log(myArray.slice(1,4));

// ['2', '3', '4']