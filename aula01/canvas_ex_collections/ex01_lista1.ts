import leia = require('readline-sync')

const cores: Array<string> = new Array<string>()

for (let i = 0; i < 5; i++) {
    let user = leia.question('Digite uma das cores: ')
    cores.push(user)
}
console.log('\nListar todas as cores:\n')

for(let cor of cores){
    console.log(cor)
}

cores.sort()
console.log('\nOrdenar cores:\n')

for (let cor of cores){
console.log(cor)
}

