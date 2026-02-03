import leia = require('readline-sync')
import Queue = require('../Queue')

let opcao: number
const fila = new Queue<string>()


do {
    console.log('*********************************************\n')
    console.log('1 - Adicionar Cliente na Fila')
    console.log('2 - Listar todos os Clientes')
    console.log('3 - Retirar Cliente da Fila')
    console.log('0 - Sair')
    console.log('\n*********************************************')

    opcao = leia.questionInt('Digite uma opcao: ')
    console.log()

    if (opcao === 1) {
        let nome = leia.question('Digite o nome do cliente: ')
        fila.enqueue(nome)
        console.log('\nCliente Adicionado!')

    } else if (opcao === 2) {
        fila.printQueue()

    } else if (opcao === 3) {
        const clienteRetirado = fila.dequeue()
        if (clienteRetirado) {
            console.log('\n O cliente foi chamado')
        }
    } else if (opcao === 0) {
        console.log("Programa Finalizado!")
    } else {
        console.log("Opção inválida")
    }
} while (opcao !== 0)
    


