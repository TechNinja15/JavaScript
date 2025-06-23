// ====================== For Loops =====================
// For loops are used to repeat a block of code a certain number of times.
// The syntax for a for loop is as follows:
// for (initialization; condition; increment/decrement) {
//     // Code to be executed
// }
//Example :
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
        // console.log("5 is best number");
        
    }
    // console.log(element);
    
}

// console.log(element); // This will throw an error because 'element' is not defined outside the loop


// Nested For Loops (Tables)
// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of: ${i}`);
//     // Inner loop    
//     for (let j = 1; j <= 10; j++) {
//         console.log(i+'*'+j+'=' + i*j);
        
//     }
// }


let myArray=["flash", "batman", "superman"];
// console.log(myArray.length); // Length of the array
for (let i =0; i < myArray.length; i++){
    const element = myArray[i];
    // console.log(element);
}


// break and continue statements
// The break statement is used to exit a loop prematurely, while the continue statement is used to skip the current iteration and move to the next one.

// Example of break statement:
// for (let i = 1; i <= 20; i++) {
//     if (i == 5){
//         console.log("Detected 5");
//         break; // Exit the loop when i is 5
//     }
//     console.log(`Value of i ${i}`);    
// }
// The break statement stops the loop entirely when the condition is met, preventing any further iterations.

// Example of continue statement:
for (let i = 1; i <= 20; i++) {
    if (i == 5){
        console.log("Detected 5");
        continue; // Skip the rest of the loop when i is 5
    }
    console.log(`Value of i ${i}`);    
}
// The continue statement skips the current iteration and moves to the next one, allowing the loop to continue executing without exiting.
