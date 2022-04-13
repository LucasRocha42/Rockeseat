













function trasformeDegree (degree){
    // Create two variable for soon input in flow
    const fahrenheitExist = degree.toUpperCase().includes('F')
    const celsiusExists = degree.toUpperCase().includes('C')
    // Create of flow case to error]
    if(!fahrenheitExist && !celsiusExists){// Se celsius e fahrenheit não existirem 
    throw new Error ('Grau não identificado')
    }
    // flow ideal for fahreinht 
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) + 5/9 
    let degreeSign = "C"
    // control of flow
    if(celsiusExists){
     uptadeDegree = Number(degree.toUpperCase().replace("C",""))
     formula = celsius => celsius * 9/5 + 32
     degreeSign = "F"
    }
    return formula(updateDegree) + degreeSign
}

try{
    console.log(trasformeDegree('50F'))
    console.log(trasformeDegree('10C'))
    trasformeDegree('20Z') 
}
 catch(error){
     console.log(error.message)
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
 
/* catch(error){
     console.log(error.message)
    }  */
    