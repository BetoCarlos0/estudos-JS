/*console.log("bem vindos ao stater")
console.log(`${1+3}`)
console.log(12.5 / 50)

====================================

variável global var

console.log('x indefinido')
{
    var x = 4
}
console.log('existe x')

====================================

variável local let/ const

console.log('y não definido')
{
    let y = 10
    console.log('y definido')
}
console.log('y não definido')

====================================

arrays

let animals = [
            'lion', 'cat', 23, 'dog'
            {
                name: snake,
                age: 2
            }
            ]

console.log('animals[0]') == lion
console.log('animals[4].name') == snake

====================================

estruturas

const person = {
    name: 'jhon',
    age: 32,
    weight: 88.6,
    isAdmin: true
}
console.log(person.name)

====================================

function createPhases() {
    console.log("estudar é muito bom")
    console.log("paciência e persistencia")
    console.log("revisão é mãe do aprendizado")
}
createPhases()

function expression
 const sum = function(number1, number2){
     console.log(number1 + number2)
}
const sum = function(number1, number2){
    return number1 + number2
}

console.log(sum(4, 6))

const sum = function(number1, number2){
    return number1 + number2
}

console.log(sum(4, 6))


// função callback - chama outra função dentro de um função
function sayMyName(name) {
    console.log("antes de executar a função callback")

    console.log(name())
}

sayMyName(
    () => {
        //console.log("estou em uma callback")

        return "estou em uma callback"
    }
)


function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " está andando"
    }
}

const beto = new Person("Beto")

console.log(beto.walk())


let number = 354.54654
console.log(number.toFixed(2))
let number2 = number.toFixed(2).replace(".", ",")
console.log(Number(number))


let frase = "tesde de js com visual studio code"
console.log(frase.includes("code"))


console.log(["a", "b", "c"].length)

text = ["a", "b", function() { return "alo"}]
console.log(text[2]())


let word = "manipulação"
console.log(Array.from(word))


let names = ['pedro', 'joão', 'luiz']
for(let char of names) {
    console.log(char)
}


let person = {
    name: 'beto',
    age: 18,
    weight: 100
}
for(let i in person) {
    console.log(i)
    console.log(person[i])
}


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


=============DOM================
const element = document.getElementById('blog')
console.log(element)

const classe = document.getElementsByClassName('post')
console.log(classe)

const element = document.getElementsByTagName('h3')
console.log(element)


// pega o primeiro resultado que achar
const element = document.querySelector('meta')
console.log(element)

// pega resultados como atributos []
const elemento = document.querySelector('[name]')
console.log(elemento)


// pega todos os resultados que achar
const element = document.querySelectorAll('meta')

element.forEach(el => console.log(el))
console.log(element)


getElementById       (element)
getElementByClassName(HTMLCollection)
getElementByTagName  (HTMLCollection)
querySelectior       (element)
querySelectiorAll    (NodeList)


// manipuland oconteudo
// textContent
const element = document.querySelector('h1')
element.textContent = "olá!"

console.log(element.textContent)


// manipuland oconteudo
// innertext
const element = document.querySelector('h1')
element.innerText = "olá!"

console.log(element.innerText)


// manipuland oconteudo
// innerHTML
const element = document.querySelector('h1')
const title = document.getElementById('title')

element.innerHTML = element.textContent + " olá! <strong>" + title.textContent+"</strong>"

console.log(element.innerText)


// manipuland oconteudo
// value
const element = document.querySelector('input')

element.value = "52"

console.log(typeof Number(element.value))


// manipuland oconteudo
// atributos
const element = document.querySelector('header')
element.setAttribute('id', 'header')
element.setAttribute('class', 'bg')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class'))

element.removeAttribute('id')
element.removeAttribute('class')


// alterando estilos
const element = document.querySelector('body')
element.style.backgroundColor = "red"


// alterando estilos
const element = document.querySelector('body')

element.classList.add('bg')
element.classList.remove('bg')
//interruptor on off
element.classList.toggle('bg')

console.log(element.classList)


/ navegando pelos elementos
// parentNode parentElement

const element = document.querySelector('h1')

console.log(element.parentNode)


// navegando pelos elementos
// childNodes children firstChild firstElementChild lastChild lastElementChild

const element = document.querySelector('header')

console.log(element.children)


// navegando pelos elementos
// nextSibling nextElementSibling
// previousSibling nextElementSibling

const element = document.querySelector('header')

console.log(element.nextElementSibling)


// criando e adicionando elementos
// append prepend

const element = document.createElement('div')
element.innerText = 'olá'

const body = document.querySelector('body')

body.prepend(element)


//adicionando elementos
// insetBefore

const element = document.createElement('div')
element.innerText = 'olá'

const body = document.querySelector('body')
const script = body.querySelector('h1')

body.insertBefore(element, script.nextElementSibling)

// insetAfter
const header = body.querySelector('header')

body.insertBefore(element, header.nextElementSibling)


// eventos
html - onmousemove="mouseover()"
function mouseover(){
    console.log('olá')


// eventos
const input = document.querySelector('input')

input.onkeydown = function(){
    console.log('rodei')
}


// eventos
const h1 = document.querySelector('h1')

h1.addEventListener('click', print)

function print(){
    console.log("print")


// eventos
const h1 = document.querySelector('h1')

h1.addEventListener('click', print)

function print(){
    console.log("print")
}

h1.addEventListener('click', function(){
    console.log('outro evento')
})


// eventos
// argumento event
const input = document.querySelector('input')

input.onkeydown = function(event) {
    console.log(event.currentTarget.value)
}



*/