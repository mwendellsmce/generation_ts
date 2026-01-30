import leia = require('readline-sync')

const nums: Array<number> = new Array<number>()

nums.push(5)
nums.push(1,5,7,9)

//console.table(nums)

for(let numero of nums){
    console.log(numero)
} 
console.log(`O numero 5 existe? ${nums.includes(5)}`)
console.log(`O indice do numero 7: ${nums.indexOf(7)}`)

// deletar elemento
nums.splice(nums.indexOf(7), 1)

console.table(nums)
