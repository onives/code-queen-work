// A for result 80+
//B for result 70-79
// C for result 60-69
//D for result 50-59
//F for result 49-0


document.querySelector(".btn").addEventListener('click', function(){
    let result = document.querySelector("#result").value
    let display = document.querySelector(".display-grade")
    let grade;

    if(result >=80 && result <= 100){
        grade = "A"
    }else if(result >=70 && result <= 79){
        grade = "B"
    }else if(result >=60 && result <= 69){
        grade = "C"
    }else if(result >=50 && result <= 59){
        grade = "D"
    }else if(result <=49 && result >= 0){
        grade = "F"
    }else{
        grade = "You've entered an incorrect result."
    }
    console.log(grade)
    display.innerHTML = grade
})
