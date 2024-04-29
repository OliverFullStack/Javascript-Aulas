// Argumentos, parâmetros e default parameters
const myFunc = function (name = 'Rato', lastName = 'Bolado')  {
    console.log(`Oi, ${name} ${lastName}!`)
}

myFunc()
myFunc('Pedro', 'Oliver')

const oiFunc = function (params) {
    console.log(`Oi, ${params}!`)
}
oiFunc('argumento')