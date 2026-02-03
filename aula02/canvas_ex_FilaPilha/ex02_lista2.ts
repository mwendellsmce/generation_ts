import leia = require('readline-sync')
import Stack = require('../Stack')

let opcao: number
const pilha = new Stack<string>()


do {
    console.log('*********************************************\n')
    console.log('1 - Adicionar Livro na pilha')
    console.log('2 - Listar todos os Livros')
    console.log('3 - Retirar Livro da pilha')
    console.log('0 - Sair')
    console.log('\n*********************************************')

    opcao = leia.questionInt('Digite uma opcao: ')
    console.log()

    if (opcao === 1) {
        let nome = leia.question('Digite o nome: ')
        pilha.push(nome)
        console.log('\nLivro Adicionado!')

    } else if (opcao === 2) {
        pilha.printStack()

    } else if (opcao === 3) {
        const livroRetirado = pilha.pop()
        if (livroRetirado) {
            console.log('\nUm Livro foi retirado da Pilha!')
        }
    } else if (opcao === 0) {
        console.log("Programa Finalizado!")
    } else {
        console.log("Opção inválida")
    }
} while (opcao !== 0)


