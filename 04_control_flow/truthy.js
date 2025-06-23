// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// }else{
//     console.log("No user email");
// }

// In JavaScript, all values are considered "truthy" except for a few specific values.
// The following values are considered "falsy":
// 1. false
// 2. 0 (zero) / -0 (negative zero)  
// 3. "" (empty string)
// 4. null
// 5. undefined
// 6. NaN (Not a Number)
// 7. BigInt(0) (BigInt zero)
// All other values, including non-empty strings, non-zero numbers, objects, arrays, and functions, are considered "truthy".

// Example of truthy values
// 1."0" (string with zero) is truthy
// 2. "false" (string with false) is truthy
// 3. [] (empty array) is truthy
// 4. {} (empty object) is truthy
// 5. function(){} (empty function) is truthy


// Nullish Coalescing Operator (??) : null undefined
// The nullish coalescing operator (??) is used to provide a default value when dealing with null or undefined values.

let val1;
// val1 = 5 ?? 10; // If val1 is null or undefined, it will be set to 10
// val1 = null ?? 10; // If val1 is null, it will be set to 10
// val1 = undefined ?? 15; // If val1 is undefined, it will be set to 15
// val1 = null ?? 5 ?? 10; // If val1 is null, it will be set to 5, otherwise it will be set to 10

// console.log(val1); // Output: 5



// Ternary Operator (?:) : condition ? expr1 : expr2

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("Ice tea is less 80") : console.log("Ice tea is more than 80");
// The ternary operator is a shorthand way to write an if-else statement. It takes three operands: a condition, an expression to evaluate if the condition is true, and an expression to evaluate if the condition is false.
// It is often used for simple conditional assignments or to return values based on a condition.