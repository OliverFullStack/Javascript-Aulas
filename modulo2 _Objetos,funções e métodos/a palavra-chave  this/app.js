// a palavra-chave this  

let user = {
    name: 'João',
    age: 31,
    email: 'joaocardoso@gmail.com',
    city: 'São Paulo',
    blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],
    login: function () {
        console.log('Usuário logado')
    },
    logout: function () {
        console.log('Usuário deslogado')
    },
    logBlogPost () { //abreviação de fuction declaretion
        console.log(`${this.name} escreveu os seguintes posts :`)

        this.blogPosts.forEach(post => {
            console.log(post)
        })
    }
}
user.logBlogPost()
// user.login()
// user.logout()