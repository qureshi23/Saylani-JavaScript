function getNumber(num){
    console.log(num)
    var result = document.getElementById("result")

    result.value += num;
}

function Clear(){
    var result = document.getElementById("result")

    result.value = "0";
}

function ClearAll(){
    var result = document.getElementById("result")

    result.value = "";
}

function getResult(){
    var result = document.getElementById("result")

    result.value = eval(result.value)
}