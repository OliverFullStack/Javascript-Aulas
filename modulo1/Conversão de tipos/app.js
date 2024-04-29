// Conversão de tipos
let score = '100'

//score = Number(score) // conversão de string 

// console.log(score + 1) // contcatenaçao de string e número = string
// console.log(typeof score)


const crazyConversion = Number('Maçã')
const convertedNumber = String(97)
const booleanConversion = Boolean(10)


console.log(booleanConversion, typeof booleanConversion)

/* 

Valores falsy:
    - false
    - 0
    -"", '', ``
    - null 
    - undefined
    -NaN 
    

Valores truthy :
    -  Qualque valor que não é falsy