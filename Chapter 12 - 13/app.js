
// var inp = prompt("Enter any alphabet: ");

// if(inp === "A"){
//     alert("65")
// }
// else if(inp === "a"){
//     alert("97")
// }
// else if(inp === "Z"){
//     alert("90")
// }
// else if(inp === "z"){
//     alert("122")
// }


// var num1 = +prompt("Enter any number: ");
// var num2 = +prompt("Enter any alphabet: ");

// if(num1 > num2){
//     alert("Number 1 is greater than Number 2")
// }
// else if(num2 > num1){
//     alert("Number 2 is greater than Number 1")
// }
// else{
//     alert("Number 1 and Number 2 are equals")
// }


// var num = +prompt("Enter any number");

// if(num < 0){
//     alert("Given number is negative")
// }
// if(num > 0){
//     alert("Given number is positive")
// }
// else if(num === 0){
//     alert("Given number is Zero")
// }


// var char = prompt("Enter a character");

// if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//     alert(true)
// }
// else{
//     alert(false)
// }




// var pass = "abc123";
// var upass = prompt("Enter password");

// if(upass === ""){
//     alert("Please enter password")
// }
// else if(upass === "abc123"){
//     alert("Correct")
// }
// else{
//     alert("Incorect Password")
// }



// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
//     greeting = "Good day";
//     alert(greeting)
// } 
// else{
//     greeting = "Good evening";
//     alert(greeting) 
// }


var time = +prompt("Enter any hour in format like: 1900 = 7pm.");
if(time >= 0000 && time < 1200){
    alert("Good Morning!")
 }
else if(time >= 1200 && time < 1700){
    alert("Good Afternoon!")
 }
else if(time >= 1700 && time < 2100){
    alert("Good Evening!")
 }
else if(time >= 2100 && time < 2359){
    alert("Good Night!")
 }