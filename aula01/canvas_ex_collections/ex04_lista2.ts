import leia = require('readline-sync')

let numeros = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6])

let user = leia.questionInt('Digite o numero que voce deseja encontrar: ')

if(numeros.has(user)){
console.log(`O número ${user} foi encontrado!`)
}else{
    console.log(`O número ${user} não foi encontrado!`)
}
