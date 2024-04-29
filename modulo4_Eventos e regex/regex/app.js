const form = document.querySelector(`form.signup-form`)
// const userNameInput = document.querySelector(`#username`)

form.addEventListener(`submit`, event => {
    event.preventDefault()

    console.log(event.target.username.value);
})