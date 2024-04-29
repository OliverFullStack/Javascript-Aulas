const button = document.querySelector(`button`)
const popup = document.querySelector(`.popup-wrapper`)

button.addEventListener(`click`, (event) => {
    popup.style.display = `block`
})

popup.addEventListener(`click`, (event) => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = [`popup-close`,`popup-wrapper`,`popup-link`]

    const shouldClosePopup = classNames.some(className => 
        className === classNameOfClickedElement)

    if (shouldClosePopup) {
        popup.style.display = `none`
    }
})





// const close = document.querySelector(`.popup-close`)
// close.addEventListener(`click`,(event)=>{
//     popup.style.display = `none`
// })

