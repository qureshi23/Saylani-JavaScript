// Question No.1

// function dat(){
//     var date = new Date()
//     document.write(date)
// }

// dat()


// Question No.2


// function full(f, l){
//     var fullName = f+" "+l;
//     document.write(fullName)
// }

// full("Subhan", "Qureshi")


// Question No.3


// var num1 = +prompt("Enter first number: ")
// var num2 = +prompt("Enter second number: ")

// function add(a, b){
//     var c = a+b;
//     return c;
// }

// var sum = add(num1, num2);
// document.write(sum)



// Question No.4

// var num1 = +prompt("Enter first number: ")
// var num2 = +prompt("Enter second number: ")
// var opr = prompt("Enter operator: ")

// function cal(num1,opr,num2){
//     if(opr === "+"){
//         var add = num1+num2;
//         return add;
//     }
//     else if(opr === "-"){
//         var sub = num1num2;
//         return sub;
//     }
//     else if(opr === "*"){
//         var mul = num1*num2;
//         return mul;
//     }
//     else if(opr === "/"){
//         var div = num1/num2;
//         return div;
//     }
// }

// var result = cal(num1,opr,num2);
// document.write(result)


// Question No.5


// function sqr(num){
//     var a = num**2;
//     return a;
// }

// var result = sqr(3);
// document.write(result)


// Question No.6


// function fac(num){
//     if (num < 0) 
//           return -1;
//     else if (num == 0) 
//         return 1;
//     else {
//         return (num * fac(num - 1));
//     }
//   }


// var result = fac(4);
// document.write(result)


// Question No.7


// var start = +prompt("Enter start number: ")
// var end = +prompt("Enter end number: ")

// function cont(start,end){
//     for(var i = start; i<=end; i++){
//         document.write(i+" ")
//     }
// }

// cont(start,end)


// Question No.8


// var base = +prompt("Enter base: ")
// var per = +prompt("Enter perpendicular: ")

// function calculateHypotenuse(base,per){
//     // calculateSquare(base,per){
//         base = base**2;
//         per = per**2;
//         hyp = base+per;
//         return hyp;
        
//     // }
// }

// var result = calculateHypotenuse(base,per);
// document.write(result)



// Question No.9


// var w = +prompt("Enter width: ")
// var h = +prompt("Enter height: ")

// function area(w,h){
//     var A = w * h;
//     return A;
// }

// document.write("By value: "+area(2,4)+"</br>")
// document.write("By variable: "+area(w,h))



// Question No.10

// var word = prompt("Enter a word: ")

// function palandrome(word) {
//     var pal = "";
//     for (var i = word.length - 1; i >= 0; i--) {
//         pal += word[i];
//     }
//     if( pal === word){
//         document.write("It's a palandrome!")
//     }
//     else{
//         document.write("It's not a palandrome!")
//     }
// }


// var result = palandrome(word);
// document.write(result)


// Question No.11

// function uppercase(word)
// {
//   var array1 = word.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }


// document.write(uppercase("the quick brown fox"));

// Question No.12


// function find_longest_word(word)
// {
//   var array1 = word.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }


// document.write(find_longest_word('Web Development Tutorial'));

// Question No.13


// function count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var i = 0; i < str.length; i++) 
//  {
//     if (str.charAt(i) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(count('JSResourceS.com', 'o'));


// Question No.14

var radius = +prompt("Enter radius: ")
var pi = 3.142;

function calcCircumference(radius){
    var f = 2*pi*radius;
    return f;
}

function calcArea(radius){
    var f = pi*radius**2;
    return f;
}


document.write("Circumference of circle = "+calcCircumference(radius)+"</br>");
document.write("Area of circle = "+calcArea(radius));