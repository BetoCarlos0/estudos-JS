const bookstore = [
    {
        categoria:'riqueza',
        books: [
            {
                title: 'Os segredos da mente milionária',
                author: 'T. Harv Eker',
            },
            {
                title: 'O homem mais rico da Babilônia',
                author: 'George S. Clason',
            },
            {
                title: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lecther'
            },
        ],
    },
    {
        categoria: 'Inteligência Emocional',
        books: [
            {
                title: 'Você é Insubstituível',
                author: 'Augusto Cury',
            },
            {
                title: 'Ansiedade - Como enfrentar o mal do século',
                author: 'Augusto Cury',
            },
            {
                title: 'Os 7 hábitos das pessoas altamente eficazes',
                author: 'Stephen R. Covey'
            },
        ],
    }
]

console.log('Número de categorias '+ bookstore.length)

for (const i of bookstore) {
    console.log('-------------------------')
    console.log('categoria: ' + i.categoria)
    console.log('número de livros: ' + i.books.length)
}
console.log('-------------------------')

const countBooks = function(){
    auth = []
    for (const i of bookstore) {
        for (const j of i.books) {
    
            if(!auth.includes(j.author)) {
                if(j.author.includes(" e ")){
                    
                    temp = j.author.split(" e ")
                    for (const z of temp) {
                        auth.push(z)
                    }
                }else {
                    auth.push(j.author)
                }
            }
        }
    }
    return auth
}
console.log('número de autores: ' + countBooks().length)
console.log('-------------------------')

const findBook = function(name){
    result = ''
    for (const i of bookstore) {
        for (const j of i.books) {
            if(j.author.includes(name))
                result += j.title + ', '
        }
    }

    return result
}

console.log('Livros '+ findBook('Augusto Cury'))