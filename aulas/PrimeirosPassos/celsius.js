




function trasformeDegree(degree){

    const existCelsius = degree.toUpperCase().includes('C')
    const existFahrenheit = degree.toUpperCase().includes('F')

    // Fluxo errado
    if (!existCelsius && !existFahrenheit){
        throw new Error("Número não identificado")
    }

    // Fluxo ideal
    let newDegree = Number (degree .toUpperCase() .replece("F",""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'
    
    // Fluxo Alternativo 
    if(existCelsius){ 
        newDegree = Number(degree.toUpperCase().replace("C",""))
        formula = celsius => celsius * 9/5 + 32 
        degreeSing = 'F' 
    }

    return formula(newDegree) + degreeSign

}
try{
  console.log (trasformeDegree('10F'))
  console.log (trasformeDegree('50C'))
  trasformeDegree('50')
}
catch (error) {
    console.log(error)
}