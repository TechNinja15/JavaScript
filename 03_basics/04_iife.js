// Immediately Invoked Function Expression (IIFE)


// this is an Named IIFE
(function chai(){
    console.log(`DB Connected`);
})(); // This will print "DB Connected" immediately when the script is loaded


// This is an Unnamed IIFE (Arrow Function)
((name) =>{
    console.log(`DB Connected TWO ${name}`);
})("AKJ")



//()()// This is an IIFE that calls itself immediately

//NOTE : When two IIFEs are used together the we need to end the first IIFE with a semicolon to avoid syntax errors
