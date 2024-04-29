// variáveis e escopo de bloco 

const age = 31 // 



if (true) {
    const age = 41
    const name = 'OLIVER'
    console.log(`dentro do 1 bloco de código: ${age} ${name}`)

    if(true) {
        const age = 51
        console.log(`dentro do 2 bloco de código: ${age} `)

        
    }

}

console.log(`fora do bloco de código: ${age} ${name}`)