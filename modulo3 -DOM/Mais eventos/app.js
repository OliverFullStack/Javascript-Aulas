const paragraph = document.querySelector('.copy-me')

paragraph.addEventListener('copy', () =>{
    console.log('Texto copiado');
})

console.log(paragraph);

const div = document.querySelector(`.box`)

div.addEventListener(`mousemove`, event => {
    div.textContent = `X ${event.offsetX} | Y ${event.offsetY}`;

})
console.log(div);

document.addEventListener(`wheel`, event => {
    console.log(event.pageX , event.pageY);
})