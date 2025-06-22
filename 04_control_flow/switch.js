// ============================Switch Statement===========================
// The switch statement is used to perform different actions based on different conditions.

// // Syntax :
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
// The switch statement evaluates the expression (day in this case) and compares it with each case.
// When a match is found, the code block for that case is executed until a break statement is encountered.
// If no match is found, the code in the default case is executed.
// NOTE: The break statement is important to prevent the execution from falling through to the next case.


