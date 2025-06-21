// Singleton
// Object.create

// Object Literals

const mySym= Symbol("key1");

const JsUser = {
    name: "Avneesh",
    "full Name": "Avneesh Kumar Jha",
    [mySym]:"mykey1",
    age: 18,
    location: "India",
    email: "avneesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
 }

//  console.log(JsUser.email); // Accessing email property
//  console.log(JsUser["email"]); // Accessing email property using bracket notation
//  console.log(JsUser["full Name"]); // Accessing full Name property with space in the name
//  console.log(JsUser[mySym]);

//  JsUser.email = "avneesh@chatgpt.com"; // Updating email property
//  Object.freeze(JsUser); // Freezing the object to prevent further modifications
//  JsUser.email = "avneesh@microsoft.com"; // This will not change the email property due to freeze
//  console.log(JsUser.email); // Still prints "


 JsUser.greeting = function(){
   //  console.log("Hello Js User");
 }
 JsUser.greetingTwo = function(){
   //  console.log(`Hello Js user, ${this.name}`);
 }

//  console.log(JsUser.greeting()); // Calling the greeting method
//  console.log(JsUser.greetingTwo()); // Calling the greetingTwo method with 'this' context


//+++++++++++++++++++++++++++++ Object Methods +++++++++++++++++++++++++++


// const tinderUser = new Object(); // Creating an empty object using Object constructor
const tinderUser = {} // Creating an empty object using object literal syntax
// Adding properties to the tinderUser object

tinderUser.id = "123abc";
tinderUser.name = "Bhabani Shankar Biswal";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); // Logs the empty object

const regularUser = {
   email: "some@gmail.com",
   fullName: {
      userfullname : {
         firstName: "Avneesh",
         lastName: "Jha"
      }
   }
}

// console.log(regularUser.fullName.userfullname.firstName); // Accessing nested properties


const obj1 = {1:"a", 2:"b", 3:"c"};
const obj2 = {4:"d", 5:"e", 6:"f"};
const obj3 = {7:"g", 8:"h", 9:"i"};

// const obj3 = {obj1,obj2}; // This creates an object with obj1 and obj2 as properties, not merging them
// const obj4 = Object.assign({}, obj1, obj2, obj3); // Merging obj1, obj2, and obj3 into a new object


const obj4 = {...obj1, ...obj2, ...obj3}; // Using spread operator to merge objects
// console.log(obj4); // Logs the merged object with properties from both obj1 and obj2



const users = [
   {
      id:1,
      email: "akj@gmail.com",
   },
   {
      id:1,
      email: "akj@gmail.com",
   },
   {
      id:1,
      email: "akj@gmail.com",
   },
]

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // Logs the keys of the tinderUser object
// console.log(Object.values(tinderUser)); // Logs the values of the tinderUser object
// console.log(Object.entries(tinderUser)); // Logs the key-value pairs of the tinderUser object
// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // Checks if the property 'isLoggedIn' exists in the tinderUser object


const course = {
   courseName: "JavaScript",
   coursePrice: 999,
   courseInstructor: "Avneesh Kumar Jha",
}

// course.courseInstructor

const {courseInstructor: CI} = course; // Destructuring to extract courseInstructor and renaming it to CI
console.log(CI); // Logs the value of courseInstructor, which is "Avneesh Kumar Jha"



