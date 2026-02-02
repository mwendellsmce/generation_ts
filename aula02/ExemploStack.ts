import leia = require('readline-sync')
import Stack = require('./Stack')

const pilha = new Stack<string>()

pilha.push('Renan')
pilha.push('Vivian')
pilha.push('Erik')
pilha.push(leia.question('Digite um nome: '))

console.log()

console.log('Pilha inicial:')
pilha.printStack()

pilha.pop()

console.log()
console.log('Pilha removida o primeiro que entrouu:')
pilha.printStack()
