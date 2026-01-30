import leia = require('readline-sync')

let numeros: Set<number> = new Set<number>()

for(let i = 0; i < 10; i++){
numeros.add(leia.questionInt('Digite um numero: '))
}

let ordem = Array.from(numeros).sort((a , b) => a - b)
console.log('\nListar dados do set:\n')

for(let num of ordem){
    console.log(`\n${num}`)
}





