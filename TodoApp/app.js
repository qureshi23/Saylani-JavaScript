var list = document.getElementById("list")

function addTodo(){
    var todo_item = document.getElementById("todo-item")


    var li = document.createElement("li")
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)


    var delBtn = document.createElement("button")
    var delText = document.createTextNode("Delete")
    delBtn.appendChild(delText)
    
    li.appendChild(delBtn)
    delBtn.setAttribute("class",'delBtn')
    delBtn.setAttribute("onClick",'delItem(this)')
    
    
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.appendChild(editText)
    
    li.appendChild(editBtn)
    editBtn.setAttribute("class",'editBtn')
    editBtn.setAttribute("onClick",'editItem(this)')
    
    
    list.appendChild(li)

    todo_item.value = ""

}

function delItem(e){
    
    e.parentNode.remove()

}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue
    var editValue = prompt("Enter edit value: ",val)

    e.parentNode.firstChild.nodeValue = editValue
}

function delAll(){
    list.innerHTML = ""
}
