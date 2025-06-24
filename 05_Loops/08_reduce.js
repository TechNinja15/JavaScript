// Reduce method
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The reduce() method takes two arguments: a callback function and an initial value.
// The callback function takes four arguments: accumulator, currentValue, currentIndex, and array.
// The accumulator accumulates the callback's return values; it is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
// The currentValue is the current element being processed in the array.
// The currentIndex is the index of the current element being processed in the array.

const myNums = [ 1, 2, 3 ];

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc}, currval: ${currval}`)
//     return acc + currval;
// }, 0); // Initial value is 0

// const myTotal = myNums.reduce((acc, currval) => acc + currval, 0); // Initial value is 0)


// console.log(myTotal); // 6

const shoppingCart = [
    {
        itemName : "Js course",
        price : 299,
    },
    {
        itemName : "DSA course",
        price : 399,
    },
    {
        itemName : "Python course",
        price : 499,
    },
]


const shoppingCartTotal = shoppingCart.reduce((acc,item) => acc + item.price, 0);
console.log(shoppingCartTotal); // 1197