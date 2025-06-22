const userEmail = []

if (userEmail) {
    console.log("Got user email");
}else{
    console.log("No user email");
}

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