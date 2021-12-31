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



*/