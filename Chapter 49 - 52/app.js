// Question 1


// function saveUser() {

//     let firstName = document.getElementById("firstName");
//     let lastName = document.getElementById("lastName");
//     let email = document.getElementById("email");
//     let dob = document.getElementById("dob");
//     let gender = "";
//     if (document.getElementById("male").checked)
//         gender = "Male";
//     else
//         gender = "Female";



//     let registeredBox = document.getElementById("registeredUsers");
//     registeredBox.innerText += "<span>First Name: " + firstName.value + "</span>";
//     registeredBox.innerText += "Last Name: " + lastName.value;
//     registeredBox.innerText += "Email: " + email.value;
//     registeredBox.innerText += "Gender: " + gender;
//     registeredBox.innerText += "Date of Birth: " + dob.value;

// }


// Question 2

// function showContent() {
//     //let content = document.getElementById("hiddenContent");
//     let para = document.getElementById("para");
//     let readMore = document.getElementById("readMore");
//     let hiddenContent = document.getElementById("hiddenContent");
//     let p = document.createElement("p");
//     let spanText = document.createTextNode(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci debitis tenetur voluptate excepturi
//     labore odit libero repellendus eum
//     deserunt saepe! Molestiae enim repellendus nam et, pariatur perspiciatis ratione quas`);
//     p.appendChild(spanText);
//     hiddenContent.appendChild(p);

//     readMore.style.visibility = 'hidden';
// }

// Question 3

// let userArray = [];
// let userSubArray = [];
// showUsers(userArray);
// let isEdit = false;

// function saveUser() {


//     let gender;
//     let firstName = document.getElementById("firstName");
//     let lastName = document.getElementById("lastName");
//     let email = document.getElementById("email");
//     if (document.getElementById("male").checked)
//         gender = "Male";
//     else
//         gender = "Female";

//     let dob = document.getElementById("dob");


//     userSubArray.push(firstName.value);
//     userSubArray.push(lastName.value);
//     userSubArray.push(email.value);
//     userSubArray.push(gender);
//     userSubArray.push(dob.value);

//     userArray.push(userSubArray);
//     console.log(userSubArray);
//     userSubArray = [];   // Emptying the sub array


//     document.getElementById("firstName").value = "";
//     document.getElementById("lastName").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("dob").value = "";



//     showUsers(userArray);

// }

// function showUsers(users) {

//     if (userArray.length > 0) {
//         document.getElementById("registeredUsers").innerHTML = `<th>Index</th> 
//          <th>First Name</th> 
//          <th>Last Name</th> 
//          <th>Email</th> 
//          <th>Gender</th>
//          <th>DOB</th>`;

//         for (var i = 0; i < users.length; i++) {
//             document.getElementById("registeredUsers").innerHTML += `
//          <tr>
//          <td>${i}</td>
//          <td>${users[i].join(",").split(",")[0]}</td>
//          <td>${users[i].join(",").split(",")[1]}</td>
//          <td>${users[i].join(",").split(",")[2]}</td>
//          <td>${users[i].join(",").split(",")[3]}</td>
//          <td>${users[i].join(",").split(",")[4]}</td>
//          <td><button onclick=editUser(${i})>Edit</button></td>
//          <td><button onclick=deleteUser(${i})>Delete</button></td>

//         </tr>`
//         }
//     } else {
//         document.getElementById("registeredUsers").innerHTML = `No Users Registered`
//     }

// }

// function deleteUser(userIndex) {
//     console.log(userArray);
//     console.log(userIndex);
//     userArray.splice(userIndex, 1);
//     showUsers(userArray)
// }

// function editUser(userIndex) {
//     let toEdit = userArray.splice(userIndex, 1);
//     console.log(toEdit);
//     document.getElementById("firstName").value = toEdit[0].join(',').split(',')[0];
//     document.getElementById("lastName").value = toEdit[0].join(',').split(',')[1];
//     document.getElementById("email").value = toEdit[0].join(',').split(',')[2];
//     document.getElementById("dob").value = toEdit[0].join(',').split(',')[4];



//     saveButton = document.getElementById("btnSave");
//     saveButton.innerHTML = "Update";
//     saveButton.setAttribute("onclick", `updateUser(${userIndex})`);



// }

// function updateUser(userIndex) {
//     console.log(userIndex);
//     userSubArray.push(document.getElementById("firstName").value)
//     userSubArray.push(document.getElementById("lastName").value)
//     userSubArray.push(document.getElementById("email").value)
//     userSubArray.push(document.getElementById("dob").value)

//     console.log("user Array");
//     console.log(userArray);
//     let tempArray = userArray.slice(userIndex, 0, userSubArray);
//     console.log(userSubArray);
//     console.log(tempArray);
//     userSubArray = [];

//     saveButton = document.getElementById("btnSave");
//     saveButton.innerHTML = "Save";
//     saveButton.setAttribute("onclick", 'saveUser()');

//     showUsers(tempArray);

// }