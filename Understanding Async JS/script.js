// The function which are mostly used in Async JS
/*
// This method is used to call the callback funtion after a certain time

setTimeout(function(){
    console.log("Ashly");
}, 10000) 

// Since the function is asyns, JS environment will execute the sync command
console.log("First command -- sync command");

setTimeout(function(){
    console.log("Second command -- async command");
}, 2000) 

console.log("Third command -- sync command");

// Using the reference of the function inside the method
const asynMethod = function() {
    console.log("Hi world! My name is Ashly");
}

setTimeout(asynMethod, 5000) // Using the reference 'asyncMethod'

*/