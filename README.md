# JavaScript
learning  JS

JavaScript (JS) is a high-level, interpreted programming language commonly used to create interactive and dynamic content on websites. It allows developers to add functionalities like:

1. Form validation
2. Animations
3. Interactive maps
4. Real-time updates (like chat apps)

JavaScript runs directly in the browser (like Chrome, Firefox), making it essential for frontend development, but it can also be used on the server-side with environments like Node.js.

In Simple Words : 
JavaScript is the language that makes websites interactive and dynamic, like making a button click do something or showing live updates on a page.


01).                        VARIABLE

A variable in JavaScript is a container for storing data values. Think of it like a labeled box where you can keep things like numbers, text, or more complex data.

Syntax : 
let name = "Avneesh";
const age = 18;
var city = "Raipur";

A JavaScript variable is like a name tag you put on a value so you can use it later in your code. You can create variables using var, let, or const depending on the situation.

https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables 



02).                      Data Types.

In JavaScript, data types define the kind of values a variable can hold and how the interpreter should handle those values. They are essential because they help the program understand what kind of operations can be performed on the data. JavaScript is a dynamically typed language, which means you don’t need to declare the type of a variable explicitly — the type is automatically determined when a value is assigned.

JavaScript has two main categories of data types: Primitive and Non-Primitive (Reference) types.

🔹 Primitive Data Types
These are the most basic data types in JavaScript. They hold only a single value and are immutable, meaning their values cannot be changed after creation.

Number: Used for all kinds of numeric values, whether integer or floating-point.


``` javascript 
let age = 25;
let price = 99.99;
"String: A sequence of characters, enclosed in single, double, or backticks."


let name = "John";
let greeting = 'Hello';
let message = `Hi, ${name}`;
"Boolean: Represents logical values, either true or false."


let isOnline = true;
let isLoggedIn = false;
"Undefined: A variable that has been declared but not assigned a value is automatically undefined."
```

```javascript
let user;
console.log(user); // undefined```
Null: Represents an intentional absence of value. It must be assigned explicitly.

```javascript
let empty = null;```
BigInt: Used for integers that are too large for the Number type.

```javascript
let bigNumber = 1234567890123456789012345678901234567890n;```
Symbol: A unique and immutable data type often used as object keys.

```javascript
let id = Symbol('userID');```

🔸Non-Primitive (Reference) Data Types
These types are more complex and can store multiple values.

Object: A collection of key-value pairs.

```javascript

let person = { name: "Alice", age: 30 };
Array: A special type of object used to store ordered collections.



let fruits = ["apple", "banana", "cherry"];
Function: A block of reusable code.


function greet() {
  return "Hello!";
}``` 

Objects, arrays, and functions are stored by reference, not by value. This means when you assign them to another variable, both variables point to the same object in memory.

✅ Conclusion
Data types are the building blocks of any program. In JavaScript, understanding how data is stored and managed is crucial for writing clean and bug-free code. Since JavaScript is loosely typed, it's important to always keep track of the kind of data a variable holds, especially when writing large or complex programs.