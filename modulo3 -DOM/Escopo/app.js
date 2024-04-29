// Escopo pode ser definido como uma visibilidade de uma váriavel 

function myFunc () {   
    let cat =  'oli'
    const age = 41
    var color = 'black'
    console.log(age)
}
// variaveis e constantes criada dentro da funcao só poderão ser usada dentro dela

function myFunc2 () {
    const age = 5
    var color = 'white'
    console.log(age)
}
myFunc()
myFunc2()


// escopo em bloco, essa forma as variáveis e constantes só existem no bloco( no if )

// if(true) {
// const dragon = 'Charizard'
// }
// console.log(dragon)


// ultilizando o var , pode ser acessado de fora do bloco
if(true) {
    var dragon = 'Charizard'
}
console.log(dragon)



//Escopo lexco

const external = () => {
    const book = 'Sapiens'

    const internal = () =>{
        console.log(book.toUpperCase())
    }
    internal()
}