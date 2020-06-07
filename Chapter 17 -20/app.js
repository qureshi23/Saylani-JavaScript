// var arr = [[]];



// var arr = [[0,1,2,3],
// [1,0,1,2],
// [2,1,0,1]];

// for(var i = 0; i<=2; i++){
//     for(var j = 0; j<=3; j++){
//         document.write(arr[i][j])
//     }
//     document.write("<br>")
// }


// for(var i = 1; i<=10; i++){
//     document.write(i+"<br>")
// }



// var table = +prompt("Enter multiplaction table of: ");
// var length = +prompt("Enter length of table is: ");

// document.write("Multiplication table of "+ table + "<br>")
// document.write("Length of table is "+ length + "<br>"+ "<br>"+ "<br>"+ "<br>")

// for(var i = 0; i<=length; i++){
//     document.write(table+ " X "+ i+ " = "+ table*i+ "<br>")
// }




// var fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];

// for(var i = 0; i <= fruits.length-1; i++){
//     document.write(fruits[i]+ "<br>")
// }
// document.write("<br>")


// for(var i = 0; i <= fruits.length-1; i++){
//     document.write("Element at index "+i+ " is "+fruits[i]+ "<br>")
// }




// document.write("<h3>Counting: </h3>"+ "<br>");
// for(var i = 1; i <= 15; i++){
//     document.write(i+ " , ");
// }

// document.write("<h3>Reverse counting: </h3>"+ "<br>");
// for(var i = 10; i >= 1; i--){
//     document.write(i+ " , ");
// }


// document.write("<h3>Even: </h3>"+ "<br>");
// for(var i = 0; i <= 20; i=i+2){
//     document.write(i+ " , ");
// }



// document.write("<h3>Odd: </h3>"+ "<br>");
// for(var i = 1; i <= 20; i=i+2){
//     document.write(i+ " , ");
// }



// document.write("<h3>Series: </h3>"+ "<br>");
// for(var i = 0; i <= 20; i=i+2){
//     document.write(i+ "k, ");
// }






// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var search = prompt("What do you want from bakery");

// var check = false;
// for (var i = 0; i < A.length; i++) {

//     if (search == A[i]) {
//         check = true;
//         document.write(search + " is available at index " + i + " in our bakery")
        
//     }

// }
    
//     if (!check) {
//         document.write("We are sorry "+ search + " is not available in our bakery");
//     }
    





// var A = [24, 53, 78, 91, 12];
// var largest = A[0];

// for (var i = 0; i < A.length; i++) {
//     if (largest < A[i] ) {
//         largest = A[i];
//     }
// }
// document.write("The largest number is: "+ largest);



// var A = [24, 53, 78, 91, 12];
// var smallest = A[0];

// for (var i = 0; i < A.length; i++) {
//     if (smallest > A[i] ) {
//         smallest = A[i];
//     }
// }
// document.write("The smallest number is: "+ smallest);




for(var i = 5; i <= 100; i=i+5){
    document.write(i+ " , ");
}