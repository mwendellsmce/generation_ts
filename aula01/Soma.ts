import leia = require("readline-sync")

let num1: number, num2: number

num1 = leia.questionInt('Digite o primeiro numero: ')
num2 = leia.questionInt('Digite o segundo numero: ')

console.log(`${num1} + ${num2} = ${num1 + num2}`)

