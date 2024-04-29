// Arrays 
let heroes = ['Batmam', 'Catwoman', 'Iron Man']
heroes[2] = 'Spider-Man'
const ages = [31, 25, 39, 40, 25]
const randomArray = ['Parker', 'Diana', 19 , 18]

//console.log(ages[2])
//console.log(heroes[0])


//Metodos de arrays
const joinHeroes = heroes.join('-')
const indexOf25 = ages.indexOf(25)
const moreHeroes = heroes.concat(['Superman', 'Wolverine'])
const pushToHeroes = heroes.push('Cyclops', 'Hulk')
const popHeroes = heroes.pop()
console.log(popHeroes)