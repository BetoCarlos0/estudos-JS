// let weight 
// console.log(typeof weight)

// let user = {
//     name: 'beto',
//     age: 25,
//     weight: 88.6,
//     stars: 5.7,
//     isSubscribed: true,

//     descrever: function() {
//         return `meu nome é ${this.name} e tenho ${this.age}`;
//     }
// }

// console.log(user.descrever());

// class Carro {
//     marca;
//     cor;
//     preco;
//     km;
        
//     constructor (marca, cor, preco, km){
//         this.marca = marca;
//         this.cor = cor;
//         this.preco = preco;
//         this.km = km;
//     }

//     gastoMedio () {
//         return this.preco * this.km;
//     }
// }

// let carro = new Carro('fiat', 'branco', 1, 12);

const numero = [];
for (let index = 0; index < 10; index++) {
    const element = index % 2 === 0;
    if (element) {
        numero.push(index);
    }
    
}
console.log(numero);
