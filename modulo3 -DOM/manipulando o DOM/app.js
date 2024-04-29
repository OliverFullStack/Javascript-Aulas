const ul = document.querySelector('ul')
// ul.remove()



const lis = document.querySelectorAll('li')

lis.forEach(li => { 
    li.addEventListener('click', event => {
       const clickElement = event.target

       clickElement.remove()
    })
});


//event.target
//li

const button = document.querySelector('button')

button.addEventListener("click", () => {
    // ul.innerHTML += '<li>Novo item</li>'
    const li = document.createElement('li')
    li.textContent = 'Novo item'
    // ul.append(li)   ( ultimo filho )
    ul.prepend(li) //  ( primeiro filho)
})
