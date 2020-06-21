
// Question No.1

// var num = +prompt("Enter a positive number: ")
// document.write("Number: "+num+"</br>")
// document.write("Round off value: "+Math.round(num)+"</br>")
// document.write("Floor value: "+Math.floor(num)+"</br>")
// document.write("Ceil value: "+Math.ceil(num)+"</br>")


// Question No.2


// var num = +prompt("Enter a negative number: ")
// document.write("Number: "+num+"</br>")
// document.write("Round off value: "+Math.round(num)+"</br>")
// document.write("Floor value: "+Math.floor(num)+"</br>")
// document.write("Ceil value: "+Math.ceil(num)+"</br>")


// Question No.3

// var num = -4;
// document.write("absolute value of "+num+" is "+Math.abs(num))


// Question No.4


// var num = Math.random();
// var num2 = Math.random();
// var newNum = (num * 9);
// var number = Math.floor(newNum);
// var newNum2 = (num2 * 5);
// var number2 = Math.floor(newNum2);
// document.write("Random dice value: "+number+"</br>")
// document.write("Random dice value: "+number2)


// Question No.5

// var toss = prompt("Enter heads or tails: ")

// var num = Math.random();
// var newNum = (num * 3);
// var number = Math.floor(newNum);
// if(number === 2){
//     document.write("Heads won the toss")
// }
// else{
//     document.write("Tails won the toss")
// }


// Question No.6


// var num = Math.random();
// var newNum = (num * 101);
// var number = Math.floor(newNum);
// document.write("Random number between 1 and 100: "+number)


// Question No.7


// var weight = prompt("Enter your weight: ")
// var now = Number(weight)
// document.write("The weight of user is "+now+" kilograms")


// Question No.8


var user = +prompt("Enter a number between 1 and 10: ")
var num = Math.random();
var newNum = (num * 11);
var number = Math.floor(newNum);
if(user === number){
    document.write("Congratulations your are won!")
}
else{
    document.write("Sorry! Better luck next time")
}