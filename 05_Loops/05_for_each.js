// ============================ forEach Loop ============================
// The forEach loop is a method available on arrays that executes a provided function once for each array element.
// It is not a loop in the traditional sense, but rather a method that allows you to iterate over array elements.
// It does not return a new array and cannot be used with break or continue statements.
// It is commonly used for performing operations on each element of an array, such as logging values or modifying them.
// It is important to note that the forEach loop does not support asynchronous operations directly.

const coding = ["JavaScript", "Python", "Java", "C++", "Ruby"];

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js",
    },
    {
        languageName: "Python",
        languageFileName: "py",
    },
    {
        languageName: "Java",
        languageFileName: "java",
    },
    
]

myCoding.forEach ( (item) => {
    
    console.log(item.languageName);
    
} )