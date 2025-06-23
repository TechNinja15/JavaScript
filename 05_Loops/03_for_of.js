//========================for...of Loop========================
// The for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.

// [{} {} {}]

// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//     console.log(num);   
// }

// const greeting = "Hello World!";
// for (const greet of greeting) {
//     console.log(`Each Character is ${greet}`);
// }


//=========================== Maps ==============================
// The for...of loop can also be used with other iterable objects like Map and Set.

const map = new Map()
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");
map.set('IN', "India"); //
// console.log(map)

for (const [key,value] of map){
    console.log(key,':-',value);
    
}


const myObject = {
    game1: 'Cricket',
    game2: 'Football',
}
// for (const [key, value] of myObject) {
//     console.log(key, value);
// }