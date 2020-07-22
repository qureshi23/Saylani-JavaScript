// Question 1

// function power(a,b){
//     c = a**b
//     return c
// }

// document.write(power(2,4))


// // Question 2

// var a = +prompt("Enter any year: ")

// function leap(a){
//     if(a % 4 == 0){
//         document.write("This is leap year.")
//     }
//     else{
//         document.write("This is not leap year.")
//     }
// }

// leap(a)


// // Question 3


// var a = +prompt("Enter side a: ")
// var b = +prompt("Enter side b: ")
// var c = +prompt("Enter side c: ")

// function area(a,b,c){
//     var s = (a+b+c)/2
//     var area = s*(s-a)*(s-b)*(s-c)
//     document.write("Area of triangle is :"+area)
// }

// area(a,b,c)


// // Question 4

// var a = +prompt("Enter first subject marks: ")
// var b = +prompt("Enter second subject marks: ")
// var c = +prompt("Enter third subject marks: ")

// function avg(a,b,c){
//     var aver = a+b+c/3
//     return aver
// }

// function per(a,b,c){
//     var perc = a+b+c/300*100
//     return perc
// }

// function main(){
//     var avr = avg(a,b,c)
//     document.write("Average marks is: "+avr+"<br>")
//     var pr = per(a,b,c)
//     document.write("Percentage of marks is: "+pr)
// }

// main()


// // Question 5

// function chArray(arr) {
//     arr[0] = "surprise!";
//  }
 
//  var newArray = new Array("val1", "val2");
//  var newLiteral = ["val1","val2"];
 
//  chArray(newArray);
//  chArray(newLiteral);
 
//  alert(newArray);
//  alert(newLiteral);

// // Question 6

// var string = "hello world";
// var vowel = ["a", "e", "i", "o", "u"];

// String.prototype.character = function name() {
//     var i;
//     for ( i = 0; i < vowel.length; i++) {
//         var secondLoop = string.length;
//         for ( j = 0; j < secondLoop; j++) {
//             if (vowel[i] == string.charAt(j)) {
//                 string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
//             }

//         }
//     }
// }

// string.character();
// document.write(string);



// Question 7

// var myLine = "Pleases read this application and give me gratuity";
// countVowel(myLine);
// function countVowel(sentence) {
//     var arrSentence = sentence.split("");
//     var suchOccurence = "";
//     var count = 0;

//     for (var i = 0; i < arrSentence.length; i++) {
//         switch (arrSentence[i] + "" + arrSentence[i + 1]) {
//             case "ea":
//                 suchOccurence += " ea ";
//                 count++;
//                 break;
//             case "ui":
//                 suchOccurence += " ui ";
//                 count++;
//                 break;
//         }

//     }
//     document.write("Such occurence: " + suchOccurence + " and the count is: " + count);
// }


// Question 8

// var distance = +prompt("Enter the distance between two cities in km");

// document.write("Distance in kilometers is: " + distance + "<br>");
// document.write("Distance in meters is: " + kmIntoMeters(distance) + "<br>");
// document.write("Distance in Feet is: " + kmIntoFeet(distance) + "<br>");
// document.write("Distance in Inches is: " + kmIntoInches(distance) + "<br>");
// document.write("Distance in centimeters is: " + kmIntoCentimeters(distance) + "<br>");
// function kmIntoMeters(distance) {
//     return distance * 1000;
// }
// function kmIntoFeet(distance) {
//     return distance * 3280;
// }
// function kmIntoInches(distance) {
//     return distance * 39370;
// }
// function kmIntoCentimeters(distance) {
//     return distance * 100000
// }



// Question 9


// var employees = [44, 55, 40];
// var leftOf = 0;
// var extraHour = 0;
// for (var i = 0; i < employees.length ; i++) {
//     if (employees[i] > 40) {
//         leftOf = employees[i] - 40;
//         extraHour = leftOf * 12;
//         document.write("Employee " + i + " has worked " + employees[i] + " hours and his extra hours salary is: " + extraHour);
//         document.write("<br>");
//     } else {
//         document.write("Employee " + i + " has worked " + employees[i] + " hours and he haven't done any extra hours");
//     }
// }



// Question 10


// var amount = +prompt("Enter amount to withdraw");
// var hundred = fifty = ten = 0;

// while(amount > 0){
//     if(amount > 100)
//     {
//         hundred++;
//         amount -= 100;
//     }else if(amount < 100 && amount > 49){
//         fifty++;
//         amount -= 50;
//     }else if(amount > 9 && amount < 50){
//         ten ++
//         amount -= 10;
//     }
// }

// document.write("You will have " + hundred + " hundreds " + fifty + " fifty " + ten + " ten currency notes");

