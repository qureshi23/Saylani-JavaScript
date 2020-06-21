// QUESTION 1

// var firstName = prompt("Enter your first name: ")
// var lastName = prompt("Enter your last name: ")
// var fullName = firstName+" "+lastName;

// document.write("Your full name is: "+fullName)

// QUESTION 2

// var mobile = prompt("Enter your favorite mobile model: ")
// document.write("My favorite phone is: "+mobile+"</br>")
// document.write("Length of string is: "+mobile.length)

// QUESTION 3

// var string = "Pakistani"
// document.write("String: "+string+"</br>")
// document.write("Index of 'n' is: "+string.indexOf("n"))


// QUESTION 4

// var string = "Hello World"
// document.write("String: "+string+"</br>")
// document.write("Index of 'l' is: "+string.lastIndexOf("l"))


// QUESTION 5

// var string = "Pakistani"
// document.write("String: "+string+"</br>")
// document.write("Character at index 3: "+string[3])

// QUESTION 6

// var firstName = prompt("Enter your first name: ")
// var lastName = prompt("Enter your last name: ")
// var fullName = firstName.concat(" "+lastName)

// document.write("Your full name is: "+fullName)


// QUESTION 7

// var city = "Hyderabad"
// document.write("City: "+city+"</br>")
// document.write("After replacement: "+city.replace("Hyder", "Islam"))


// QUESTION 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("Message: "+message+"</br>")
// var nm = message.replace(/"and"/g,"&")
// document.write("Message after replacement of and into &: "+nm)


// QUESTION 9


// var value = "472"
// document.write("Value: "+value+"</br>")
// document.write("Value: "+typeof value+"</br>")
// var nvalue = Number(value);
// document.write("Value: "+nvalue +"</br>")
// document.write("Value: "+typeof nvalue+"</br>")

// QUESTION 10


// var string = "peanut"
// document.write("User input: "+string+"</br>")
// document.write("Upper case: "+string.toUpperCase())


// QUESTION 11

// var string = "javascript"
// document.write("User input: "+string+"</br>")
// var n = "";
// n = n+string[0].toUpperCase() 
// for(var j = 1; j<string.length; j++){
//     n = n+string[j] 
// }
// document.write("Title case: "+n+"</br>")


// QUESTION 12

// var num = 35.36 ;
// document.write("Number: "+num+"</br>")
// var n = num.toString().replace(".","")
// document.write("Result: "+n)


// QUESTION 13

// var userName = prompt("Enter username: ")
// for(var i = 0; i<userName.length; i++){
//     if(userName[i] === "@"  || userName[i] === "." || userName[i] === "," ||userName[i] === "!"){
//         alert("Please enter a valid user name")
//     }
// }


// QUESTION 14


// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var search = prompt("What do you want from bakery");

// var check = false;
// for (var i = 0; i < A.length; i++) {

//     if (search === A[i].toLowerCase()) {
//         check = true;
//         document.write(search + " is available at index " + i + " in our bakery")
        
//     }

// }
    
//     if (!check) {
//         document.write("We are sorry "+ search + " is not available in our bakery");
//     }
    


// QUESTION 15

// var pass = prompt("Enter your password use a-z, A-Z & 0-9,: ")
// var num = [1,2,3,4,5,6,7,8,9]
// var special = ["@", ",", "%", "&", "!", "$"]
// for(var i = 0; i<+num.length; i++){
//     if(pass[0] == num[i] || pass[i] == special[i] || pass.length < 6){
//         alert("Please enter password as requirment")
//     }
// }  


// QUESTION 16


// var university = "University of Karachi";
// var a = university.split("")
// for(var i = 0; i<university.length; i++){
//     document.write(a[i]+"</br>")
// }



// QUESTION 17

// var inp = "Pakistan"
// document.write("User input: "+inp+"</br>")
// var find = inp.charAt(inp.length-1)
// document.write("Last character of input is: "+find)


// QUESTION 18

// var text = "The quick brown fox jumps over the lazy dog"
// function count(main_str, sub_str) 
//     {
//     main_str += '';
//     sub_str += '';

//     if (sub_str.length <= 0) 
//     {
//         return main_str.length + 1;
//     }

//        subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//        return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
//     }
// document.write("Text: "+text+"</br>")
// document.write("There are "+count(text, 'the')+" occurrence of word 'the'");
