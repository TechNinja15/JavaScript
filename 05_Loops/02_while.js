//========================== While Loop ==========================
// A while loop is used to execute a block of code repeatedly as long as a specified condition is true.
// This is a while loop that continues to execute as long as the condition is true.

// let i =0;
// while (i <= 10) {
//     console.log(`Value of i is ${i}`);
//     i = i+2; // Increment i by 2 in each iteration
// }

// let myArray = ["flash", "batman", "superman"];
// let arr = 0;
// while(arr < myArray.length) {
//     console.log(`Value is ${myArray[arr]}`);
//     arr++; // Increment arr to move to the next element
// }



//========================= Do-While Loop =========================
// A do-while loop is similar to a while loop, but it guarantees that the code block will be executed at least once before checking the condition.
// The syntax for a do-while loop is as follows:
// do {
//     // Code to be executed
// } while (condition);
//
// Example of a do-while loop:

let score = 11;
do{
    console.log(`Score is ${score}`);
    score++; // Increment score by 1 in each iteration
}while(score <= 10);