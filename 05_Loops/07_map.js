// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

//Adding 10 to each number in the array using map
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// The map() method is used to transform each element of an array and return a new array with the transformed elements.
// The map() method does not modify the original array, it returns a new array.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newNums = myNums.map((num) => {return num + 10}); 
// console.log(newNums); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


// Chaining map() with filter()

const newNums = myNums
            .map( (num) => num * 10 )
            .map( (num) => num + 1)
            .filter( (num) => num > 40);

console.log(newNums); // [41, 51, 61, 71, 81, 91, 101]