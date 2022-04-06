







function school (score){

   let resultFinnaly;

    scoreA = score >= 90 && score <=100 
    scoreB = score >= 80 && score <= 90
    scoreC = score >= 70 && score <= 80
    scoreD = score >= 60 && score <= 70
    scoreF = score < 60 && score >= 0

    if (scoreA) {
        resultFinnaly = " Nota A"
    } else if (scoreB){
        resultFinnaly =" Nota B"
    } else if (scoreC){
        resultFinnaly = " Nota C"
    } else if (scoreD){
        resultFinnaly = " Nota D"
    } else if (scoreF){
        resultFinnaly = " Nota F"
    }

    return resultFinnaly;
}

console.log(school(100))
console.log(school(90))
console.log(school(70))
console.log(school(60))
console.log(school(25))
console.log(school(100))























/* 



function getScore(score){

let scoreFinal;

let scoreA = score >= 90 && score <= 100 
let scoreB = score >= 80 && score <= 90
let scoreC = score >= 70 && score <= 80
let scoreD = score >= 60 && score <= 70
let scoreF = score < 60 && score >= 0  
 
if (scoreA){
    scoreFinal = 'A'
} else if (scoreB){
    scoreFinal = 'B'
} else if (scoreC){
    scoreFinal = 'C'
} else if ( scoreD){
    scoreFinal = 'D'
} else if (scoreF){
    scoreFinal = 'F'
}
return scoreFinal

}
console.log(getScore(90))
console.log(getScore(80))
console.log(getScore(70))
console.log(getScore(60))
console.log(getScore(50)) */