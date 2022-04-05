

let family = {
    incomes: [2000, 20.3, 50, 533],
    expenses: [300.2 , 526, 546.6, 200]
}

function sum (array){
    total = 0; 
    for (let value of array){
        total += value
    }
    return total 
}

function calculateBalance (){ 

    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses 
    
    const itsOk = total >= 0 

    let balanceText = " Negativo "

    if (itsOk){
        balanceText = " Positivo "
    }
    console.log( "Seu saldo é " + balanceText + total)

}

calculateBalance()





















/* let family = {
    incomes: [2500,561,54.5,563.2],
    expenses: [320.20,502.6,200,1450]
}

function sum(array){ 
    let total = 0;

    for (let value of array){
        total += value
    }

    return total

}

function calculateBalance(){
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0 

    let balanceText = " Negativo "

    if (itsOk){
        balanceText = " Positivo "
    }

    console.log(    'Seu saldo é ' + balanceText + total.toFixed(2) )
}
calculateBalance()

 */



















/* 
 Receitas 


let revenue = [ 100 , 1000 ];
let expenses = [ 1500, 500 ];

function calcSpending (){
    
    let saldo;
    let revenue1 = revenue[0] + revenue[1]
    let expenses1 = expenses[0] + expenses[1]

    let total = revenue1 - expenses1
    
    if (revenue1 >= expenses1){
        saldo = "Saldo Positivo " + total;
    } else {
        saldo = "Saldo Negativo " + total; 
    }
    
    return saldo
    return total 
}
console.log(calcSpending()) */