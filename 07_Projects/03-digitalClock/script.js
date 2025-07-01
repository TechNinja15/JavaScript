const time = document.getElementById('time');
const timeformat = document.getElementById('timeformat');

document.addEventListener('DOMContentLoaded', ()=>{
    setInterval(showTime, 1000);
});

const showTime = () => {
    let date = new Date(); // Get current date and time
    let hr = date.getHours(); // Get current hours
    let min = date.getMinutes(); // Get current minutes
    let sec = date.getSeconds(); // Get current seconds
    
    hr = hr<10 ? `0${hr}` : hr; // Add leading zero if hours are less than 10
    min = min<10 ? `0${min}` : min; // Add leading zero if minutes are less than 10
    sec = sec<10 ? `0${sec}` : sec; // Add leading zero if seconds are less than 10
    
    time.innerHTML = `${hr}:${min}:${sec}`; // Display time in the format hr:min:sec


    timeformat.innerHTML = hr>12 ? "PM" : "AM"; // Determine AM or PM based on hours
    
    // console.log("hours"+ hr + "mins" + min + "sec" + sec ); // Log the time to the console
}