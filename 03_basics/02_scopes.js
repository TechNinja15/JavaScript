// +++++++++++++++++++++++ Local and Global Scope ++++++++++++++++++++++



// var c = 300
let a =300

if (true) {
    let a = 10
    const b = 20
    // console.log("Inner :", a); // 10
}
// console.log("Outer :", a); // 300


// console.log(a);
// console.log(b);


function one(){
    const username = "Avneesh";
    function two(){
        const website = "Youtube";
        console.log(username); // Accessing variable from outer function        
    }
    // console.log(website); // This will throw an error because website is not defined in this scope

    two(); // Calling the inner function to access the variable from outer function
    
}
// one(); // Calling the outer function to access the variable from outer function


if (true) {
    const username = "Avneesh";
    if (username === "Avneesh") {
        const website = "Youtube";
        // console.log(username+ website); // Accessing variable from outer scope
    }
    // console.log(website); // This will throw an error because website is not defined in this scope

} 

// console.log(username); // This will throw an error because username is not defined in this scope


// ======================== Intresting Example ========================


function addOne(num){
    return num + 1;
}
console.log(addOne(5)); // This will return 6


const addTwo = function(num){
    return num + 2;
}
addTwo(5); // This will return 7