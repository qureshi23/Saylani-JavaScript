// Question 1 

// alert("Hello World")

// Question

// function phoneClicked(){
//     alert('Thanks for purchasing from us');
// }




// Question 3


// var studentArray = [['0', 'Jhone', '10'],
// ['1', 'Doe', '9'],
// ['2', 'Marks', '10'],
// ['3', 'James', '8']];

// renderTable();
// function renderTable() {
//     if (studentArray.length > 1) {
//         for (var i = 0; i < studentArray.length; i++) {
//             document.getElementById("studentTable").innerHTML +=
//                 "<table>" +
//                 "<th>Index</th>" +
//                 "<th>Name</th>" +
//                 "<th>Class</th>" +
//                 "<th>Action</th>" +
//                 "<tr>" +
//                 "<td>" +
//                 " " + studentArray[i] + " " +
//                 "<button onclick=DeleteStudent(" + i + ")>Delete</button>" +
//                 "</td>" +
//                 "</tr>" +
//                 "</table>"
//         }
//     } else {
//         document.getElementById("studentTable").innerHTML += "Empty Data"
//     }
// }

// function DeleteStudent(indexValue) {
//     document.getElementById("studentTable").innerHTML = "";
//     studentArray.splice(indexValue, 1);
//     renderTable();
// }

// Question 4

// var treeImage = document.getElementById("treeImage");

// function mouseOver() {
//     console.log(treeImage);
//     treeImage.src = "Images/tree2.jpg"
// }
// function mouseOut() {
//     console.log(treeImage)
//     treeImage.src = "Images/tree1.jpg"
// }


// Question 5

// var number = document.getElementById("count");
// var count = 0;
// console.log(count);
// function increase() {
//     count++;
//     console.log(count);
//     number.innerText = count;
// }

// function decrease() {
//     count--;
//     number.innerText = count;
// }