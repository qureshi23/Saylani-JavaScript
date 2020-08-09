function Result(){
    var score = 0
    var answer1 = document.getElementById("q1_a1")
    var answer2 = document.getElementById("q1_a2")
    var answer3 = document.getElementById("q1_a3")
    var answer4 = document.getElementById("q1_a4")

    if(answer2.checked == true){
        score++
    }

    var answer1 = document.getElementById("q2_a1")
    var answer2 = document.getElementById("q2_a2")
    var answer3 = document.getElementById("q2_a3")
    var answer4 = document.getElementById("q2_a4")

    if(answer1.checked == true){
        score++
    }

    var answer1 = document.getElementById("q3_a1")
    var answer2 = document.getElementById("q3_a2")
    var answer3 = document.getElementById("q3_a3")
    var answer4 = document.getElementById("q3_a4")

    if(answer4.checked == true){
        score++
    }

    var answer1 = document.getElementById("q4_a1")
    var answer2 = document.getElementById("q4_a2")
    var answer3 = document.getElementById("q4_a3")
    var answer4 = document.getElementById("q4_a4")

    if(answer2.checked == true){
        score++
    }

    var answer1 = document.getElementById("q5_a1")
    var answer2 = document.getElementById("q5_a2")
    var answer3 = document.getElementById("q5_a3")
    var answer4 = document.getElementById("q5_a4")

    if(answer2.checked == true){
        score++
    }

    alert("Your marks is: "+ score)
}