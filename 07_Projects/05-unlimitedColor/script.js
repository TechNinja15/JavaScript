//generate a random color

document.body.style.backgroundColor = "#1f1d1dff"; // Initial background color
const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }    
    return color;
};

let intervalid; 
const startChangingColor = function(){
    intervalid = setInterval(changeBgColor, 1000);
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = function(){
    clearInterval(intervalid); // This will stop the interval from running
    console.log("Stopped");
    // document.body.style.backgroundColor = "#1f1d1dff"; // Reset to white or any default color
    intervalid = null; // Clear the interval variable
};

document.getElementById('start').addEventListener('click',startChangingColor);


document.getElementById('stop').addEventListener('click',stopChangingColor);














































// const sayDate = function(str) {
//         console.log(str, new Date().toLocaleTimeString());
//     }
    

//     let intervalid;
//     document.getElementById('start').addEventListener('click', function() {
//         intervalid = setInterval(sayDate , 3000 , "hi");
//     });
//     document.getElementById('stop').addEventListener('click', function(){
//         clearInterval(intervalid); // This will stop the interval from running
//         console.log("Stopped");
//     });

//     console.log(intervalid);