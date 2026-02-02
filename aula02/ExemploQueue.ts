import leia = require('readline-sync')
import Queue = require('./Queue')

const fila = new Queue<string>()

fila.enqueue('Renan')
fila.enqueue('Vivian')
fila.enqueue('Erik')
fila.enqueue(leia.question('Digite um nome: '))

fila.printQueue()

fila.dequeue()
console.log()
fila.printQueue()