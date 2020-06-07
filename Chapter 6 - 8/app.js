// var a = 10;
// document.write("Result:"+ "<br>"+ "The value of a is: "+ a+ "<br>"+ ".........................................."+ "<br>"+ "<br>"+ "<br>")


// a = ++a;
// document.write("Result:"+ "<br>"+ "The value of ++a is: "+ a+ "<br>"+ "Now the value of a is: "+a +"<br>"+ "<br>"+ "<br>")


// a = a++;
// document.write("Result:"+ "<br>"+ "The value of a++ is: "+ a+ "<br>"+ "Now the value of a is: "+a + "<br>"+ "<br>"+ "<br>")

// a = --a;
// document.write("Result:"+ "<br>"+ "The value of --a is: "+ a+ "<br>"+ "Now the value of a is: "+a + "<br>"+ "<br>"+ "<br>")

// a = a--;
// document.write("Result:"+ "<br>"+ "The value of a-- is: "+ a+ "<br>"+ "Now the value of a is: "+a + "<br>"+ "<br>"+ "<br>")


// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a is: " + a + "<br>"+ "b is: " + b + "<br>"+  "Final result is: "+result+"<br>"+ "<br>"+ "<br>");


// var name = prompt("Enter your name: ");
// alert(name);

// var num = prompt("Enter a number: ");

// document.write(num + " x " + " 1 " + " = " + num*1+ "<br>")
// document.write(num + " x " + " 2 " + " = " + num*2+ "<br>")
// document.write(num + " x " + " 3 " + " = " + num*3+ "<br>")
// document.write(num + " x " + " 4 " + " = " + num*4+ "<br>")
// document.write(num + " x " + " 5 " + " = " + num*5+ "<br>")

var sub1 = prompt("Enter First subject: ");
var sub2 = prompt("Enter Second subject: ");
var sub3 = prompt("Enter Third subject: ");

var totalMarks = 100;
var oMarks1 = prompt("Enter First subject obtained marks: ")
var oMarks2 = prompt("Enter Second subject obtained marks: ")
var oMarks3 = prompt("Enter Third subject obtained marks: ")
var per1 = oMarks1/totalMarks*100;
var per2 = oMarks2/totalMarks*100;
var per3 = oMarks3/totalMarks*100;


document.write("<b>Subject </b> " +"<b> Total Marks </b> "+"<b> Obtained Marks </b> "+"<b> Percentage</b> "+ "<br>");
document.write(sub1 + " "+ totalMarks+ " "+oMarks1+" "+per1+" %"+ "<br>");
document.write(sub2 + " "+ totalMarks+ " "+oMarks2+" "+per2+" %"+ "<br>");
document.write(sub3 + " "+ totalMarks+ " "+oMarks3+" "+per3+" %"+ "<br>");