import leia = require('readline-sync')

const cores: Set<string> = new Set<string>()

cores.add('azul')
cores.add('verde')
cores.add('azul')
cores.add('vermelho')
cores.add('amarelo')

console.table(cores)
console.log(`A cor verde existe? ${cores.has('verde')}`)

cores.delete('azul')
console.table(cores)



/*
for(let numero of nums){
    console.log(numero)
} 
console.log(`O indice do numero 7: ${nums.indexOf(7)}`)

// deletar elemento
nums.splice(nums.indexOf(7), 1)

console.table(nums)
*/