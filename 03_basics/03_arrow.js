const user =  {
    username: "Avneesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`Welcome to the Website, ${this.username}`);
        console.log(this);
    }
}


// user.welcomeMessage(); // This will print "Welcome to the Website, Avneesh"
// user.username = "John"; // Changing the username
// user.welcomeMessage(); // This will print "Welcome to the Website, John"

// console.log(this);

// function chai(){
//     let username = "Avneesh";
//     console.log(this.username); // This will print "undefined" because 'this' refers to the global object in this context
// }

// chai();

// const chai = function() {
//     let username = "Avneesh";
//     console.log(this.username); // This will print "undefined" because 'this' refers to the global object in this context
// }

// const chai = () => {
//     let username = "Avneesh";
//     // console.log(this); // This will print "undefined" because 'this' refers to the global object in this context
// }


// chai(); // This will print "undefined" because 'this' refers to the global object in this context
// In arrow functions, 'this' does not refer to the global object, but to the context in which the function was defined

// const addtwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addtwo = (num1, num2) => num1 + num2;

const addtwo = (num1, num2) => (num1 + num2);

const addtwo = (num1, num2) => ({username : "Avneesh"});

console.log(addtwo(2, 3)); // This will print 5


const myArray = [1, 2, 3, 4, 5];

// myArray.forEach();