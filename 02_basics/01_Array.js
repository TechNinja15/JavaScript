//++++++++++++++++++++++++++ Arrays +++++++++++++++++++++++++++++++++

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myArray = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArray);
// console.log(myHeors);
// console.log(myArr2);

// myArray.push(6)
// myArray.push(7)
// myArray.pop() // removes the last element

// myArray.unshift(9) // adds an element at the beginning
// myArray.shift() // removes the first element


// console.log(myArray.includes(3)); // checks if 3 is present in the array
// console.log(myArray.indexOf(3)); // returns the index of 3 in the array

const newArray = myArray.join(","); // joins the array elements into a string with " , " as a separator

// console.log(newArray); // converts the array to a string
// console.log(typeof newArray); // checks the type of newArray

// console.log(myArray);

// ++++++++++++++++++++++++ Slice & Splice +++++++++++++++++++++++++++

// console.log("A", myArray);
// const myn1=myArray.slice(1, 3); // returns a new array with elements from index 1 to 2 (3 is not included)

// console.log(myn1);
// console.log("B", myArray);

// const myn2=myArray.splice(1, 3); // removes 3 elements from index 1 and returns them
// console.log("c", myArray);
// console.log(myn2);


// +++++++++++++++++++++++++++++++Array part 2++++++++++++++++++++++++++++++

const marvelHeros = ["Ironman", "Spiderman","Thor"];
const dcHeros = ["Batman", "Superman", "Flash"];

// marvelHeros.push(dcHeros); // adds dcHeros as a single element to marvelHeros
// console.log(marvelHeros); // ["Ironman", "Spiderman", "Thor", ["Batman", "Superman", "Flash"]]


// console.log(marvelHeros[3][2]); // Accessing "Flash" from the nested array  




// +++++++++++++++++++++++++++++++Concatenation++++++++++++++++++++++++++++++

// const allHeros=marvelHeros.concat(dcHeros); // concatenates dcHeros to marvelHeros
// console.log(allHeros); // ["Ironman", "Spiderman", "Thor", "Batman", "Superman", "Flash"]





// +++++++++++++++++++++++++++++++Spread Operator++++++++++++++++++++++++++++++

// const all_new_heros= [...marvelHeros, ...dcHeros]; // using spread operator to concatenate arrays
// console.log(all_new_heros); // ["Ironman", "Spiderman", "Thor", "Batman", "Superman", "Flash"]



// +++++++++++++++++++++++++++++++Flattening Arrays++++++++++++++++++++++++++++++
const anotherArray = [1,2,3, [4,5,6],7,[6,7,[4,5]]];

const real_another_array = anotherArray.flat(Infinity); // flattens the array to a depth of 2
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4,5]



// +++++++++++++++++++++++++++++++Array Methods++++++++++++++++++++++++++++++
// console.log(Array.isArray("Avneesh")); // checks if the given value is an array, returns false
// console.log(Array.from("Avneesh")); // converts a string to an array, returns ['A', 'v', 'n', 'e', 'e', 's', 'h']
// console.log(Array.from({name:"Avneesh"})); // converts an object to an array, returns ['name']


// +++++++++++++++++++++++++++++++Array.of()++++++++++++++++++++++++++++++
// Array.of() creates a new array instance with a variable number of arguments, regardless of the number or type of the arguments passed to it.
// It is similar to Array.from() but does not convert array-like or iterable objects into arrays.
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3)); // creates an array from the given arguments, returns [100, 200, 300]
