// Booleans e comparações 

//console.log(true, false, 'true', 'false')

// Métodos podem retornar booleans
const email = 'brucewayne@rogermelo.com'
const includes = email.includes('wayne')
const names = ['dio', 'roger', 'robert']
const arrayIncludes = names.includes('rob')
//console.log()


// Operadores de comparação 
// const age = 31 
// const name = 'roger'

// console.log(age == 31)
// console.log(age == 35) //age é igual a 35 ?
// console.log(age != 31) //age é não é igual a 31 ?
// console.log(age > 30) // maior que
// console.log(age < 31) // menor que 
// console.log(age <= 31)// menor ou igual que
// console.log(age >= 31)// maior ou igual que

// console.log(name == 'roger')
// console.log(name == 'Roger')
// console.log(name > 'belinha') // letras minusculas são maiores que os maiusculos 
// console.log(name > 'Roger')
// console.log(name > 'Belinha')


//aula 21 
const age = 31

// 'igual a' e 'diferente de'
// console.log(age == 31)
// console.log(age == '31')
// console.log(age != 31)
// console.log(age != '31')

// 'igual a, e do mesmo tipo' e 'diferente de, e do mesmo tipo'

// console.log(age === 31) // tem o valor e o mesmo tipo
// console.log(age === '31')
console.log(age !== 31) // agora o operador considera o tipo 
console.log(age !== '31')