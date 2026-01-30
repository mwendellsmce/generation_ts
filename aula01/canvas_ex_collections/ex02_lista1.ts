import leia = require('readline-sync')

let numeros = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6)

let user = leia.questionInt('Digite o numero que voce deseja encontrar: ')

if(numeros.includes(user)){
console.log(`O número ${user} está localizado na posição: ${numeros.indexOf(user)}`)
}else{
    console.log(`O número ${user} não foi encontrado!`)
}
