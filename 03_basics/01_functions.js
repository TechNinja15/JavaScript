// ========================Functions & Parameters========================
// Functions are reusable blocks of code that perform a specific task.

// Function Declaration

function sayMyName(name) {
    console.log("A");
    console.log("v");
    console.log("n");
    console.log("e");
    console.log("e");
    console.log("s");
    console.log("h");
}

// sayMyName();

// function addTwoNumbers(number1, number2){   // number1, number2 are parameters
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){  
    // let result = number1 + number2; // result is a local variable
    // console.log("AKJ"); // This line will execute before the return statement.
    // return result; // return statement sends the result back to the caller.
    // console.log("AKJ"); // This line will never execute because the function has already returned.    
    return number1 + number2; // This will return the sum of number1 and number2. (this is another way to write the function)
}

const result = addTwoNumbers(5, 10); // addTwoNumbers(5, 10); // (5, 10) this is an argument.

// console.log(result); // undefined, because the function does not return anything.


function loginUserMessage(username = "stranger") { // Default parameter value
    if(!username){
        console.log("Please provide a username.");
        return "No username provided.";
    }
    return `User logged in with username: ${username}`;

}
// loginUserMessage("Avneesh"); // This will return the message but not print it to the console.
// console.log(loginUserMessage("Avneesh")); // This will print the message to the console.

function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(200,400,500,1000,2000)); // This will return an array of all the arguments passed to the function. (because of the rest operator(...num1))

function calculateCartPrice2(val1,val2, ...num1){
    return num1;
}
// console.log(calculateCartPrice2(200,400,500,1000,2000)); // This will return an array of all the arguments passed to the function by storing first two arguments in val1 and val2 and rest of the arguments in num1. (because of the rest operator(...num1))


// const user = {
//     userName : "Avneesh",
//     price: 199
// }

function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);
    
}

// handleObject(user); // This will print the username and price from the user object.
handleObject({
    userName : "Sam",
    price: 399
}); // This will print the username and price from the object passed to the function directly.


const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1]; // This will return the second value of the array passed to the function.
}

console.log(returnSecondValue(myNewArray)); // This will print the second value of the array passed to the function.
