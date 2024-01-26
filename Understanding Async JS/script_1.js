const nameDate = function() {
    // will print the sentence after certain interval
    console.log("Ashly", Date.now());
}

const interval = setInterval(nameDate,5000)
// Clear the set interval function
clearInterval(interval) // passing the refernce of the interval function


// So our task is when we press the 'start' button the setIntervalfunction will run and when the 'stop' function is pressed the setInterval function will stop printing. 


// The callback function is to generate random color
const randomColor = function() {
    const hex = '0123456789ABCDEF'
    let color = '#';

    for(let i=0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }

    return color;
}

let IntervalId

const startChangingColor = function(){
    if(!IntervalId) {
        IntervalId = setInterval(function(){
            document.body.style.backgroundColor = randomColor();
        }, 1000) 
    }  
}
const stopChangingColor = function(){
    clearInterval(IntervalId)
    // Flushing out the IntervalId, so that the variable doesn't get overide
    IntervalId = null
}

// Adding the callback function to the start buttom
document.querySelector("#start").addEventListener('click', startChangingColor)

// Add the clearInterval function to stop the setInterval function
document.querySelector("#stop").addEventListener('click', stopChangingColor)