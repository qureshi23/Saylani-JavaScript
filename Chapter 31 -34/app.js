// Question No.1

// var date = new Date()
// document.write(date)


// Question No.2

// var month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var date = new Date()
// var currentMonth = date.getMonth()
// var nameOfMonth = month[currentMonth]
// document.write(nameOfMonth)



// Question No.3


// var date = new Date()
// var now = date.toString();
// var name = now.slice(0,4)

// document.write("Today is "+name)


// Question No.4


// var date = new Date()
// var now = date.toString();
// var name = now.slice(0,4)
// if(name == "Sat" || name == "Sun"){
//     document.write("It's fun day!")
// }
// else{
//     document.write("It's normal day")
// }


// Question No.5


// var date = new Date()
// var now = date.toString();
// var cur = now.slice(8,10)
// if(cur < 15){
//     document.write("First fifteen days of the month")
// }
// else{
//     document.write("Last fifteen days of the month")   
// }


// Question No.6


// var date = new Date()
// document.write("Current date: "+date+"</br>")
// document.write("Elapsed miliseconds since 1 January 1970: : "+date.getMilliseconds()+"</br>")
// document.write("Elapsed minutes since 1 January 1970: : "+date.getMinutes())



// Question No.7


// var date = new Date()
// var now = date.toString();
// var cur = now.slice(16,18)
// if(cur <= 12){
//     document.write("It's AM")
// }
// else{
//     document.write("It's PM")   
// }


// Question No.8


// var date = new Date("Dec 31, 2020")
// document.write("Later date: "+date)


// Question No.9


// var date = new Date("Apr 25, 2020")
// var cdate = new Date()
// var difer = cdate - date
// var now = difer/(1000 * 60 * 60 * 24)
// document.write(Math.floor(now)+" days passed since 1st Ramdan 2020 ")


// Question No.10


// var date = new Date("Jan 1, 2020")
// var cdate = new Date()
// var difer = cdate - date
// var now = difer/(1000 * 60)
// document.write("On reference date "+cdate+"</br>")
// document.write(Math.floor(now)+" seconds has passed since begining of 2020 ")



// Question No.11


// var date = new Date()
// var n = date.toString();
// var cur = n.slice(16,18)
// var d = 24 - cur
// document.write("Current date "+date+"</br>")
// document.write(Math.floor(d)+" hour(s) to go for next day ")



// Question No.12


// var date = new Date("Jun 20, 1920")
// var cdate = new Date()
// document.write("Current date "+cdate+"</br>")
// document.write("100 years back, it was "+date+"</br>")



// Question No.13


// var dob = new Date(prompt("Enter your age: ","Jan 1, 1970"))
// var dobmili = dob.getTime()

// var today = new Date()
// var todaymili = today.getTime()

// var difer = todaymili - dobmili;

// var diferyear = difer/(1000*60*60*24*30*12)

// var accAge = Math.floor(diferyear)
// document.write("Your age is: "+accAge+"</br>")
// var d = dob.toString()
// var dateOfBirth = d.slice(11,15)
// document.write("Your birth year is: "+dateOfBirth+"</br>")



// Question No.14



var cname = prompt("Enter costumer name: ")
var month = prompt("Enter current month: ")
var units = prompt("Enter number of units: ")
var char = prompt("Enter charges of unit: ")
var late = 350;
var NetAmountPayable = units * char;
var GrossAmountPayable = NetAmountPayable + late;

document.write("<h1>K-Electric Bill</h1>"+"</br>"+"</br>")

document.write("Customer Name: "+cname+"</br>")
document.write("Month: "+month+"</br>")
document.write("Number of units: "+units+"</br>")
document.write("Charges per unit: "+char+"</br>"+"</br>")

document.write("Net Amount Paybill (Within Due Date): "+NetAmountPayable+"</br>")
document.write("Late Payment Surcharges: "+late+"</br>")
document.write("Gross Amount Paybill (After Due Date): "+GrossAmountPayable+"</br>")