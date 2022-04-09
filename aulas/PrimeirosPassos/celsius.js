











function transFormDegree (degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if (!celsiusExists && !fahrenheitExists){
        throw new Error ("Errou")
    }

    // Fluxo ideal 
    let updateDegree = Number(degree.toUpperCase().replace('F',''))
    let formula = fahrenheit => (fahrenheit - 32) * 5/9   
    let degreeSign = "C"

    if (celsiusExists){
        updateDegree = Number(degree.toUpperCase().replace('C',''))
        forumula = celsius => celsius * 9/5 + 32 
        degreeSign = "F"
    }

    return formula(updateDegree) + degreeSign

}
try{
    console.log(transFormDegree("80F"))
    console.log(transFormDegree("40C"))
    console.log(transFormDegree("5646"))
}
catch (error){
    console.log(error)
}


/*
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExist = degree.toUpperCase().includes('F')

    // fluxo de erro
    if(!celsiusExists && !fahrenheitExist){
        throw new Error('Grau não identificado')
    }

    // Fluxo ideal 
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    if (celsiusExists){
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updateDegree) + degreeSign
}
try{
    console.log(transformDegree('50F'))
    console.log(transformDegree('10C'))
    /* transformDegree('20Z') */
/* }
catch(error){
     console.log(error.message)
    }  */