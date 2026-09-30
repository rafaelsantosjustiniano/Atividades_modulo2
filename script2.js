const readline = require('readline');

const entrada = readline.createInterface({
    input: process.stdin,

    output: process.stdout

});

entrada.question('Digite seu ano de nascimento:' , function(anoNascimento) {

    const anoAtual = 2026;

    const idade = anoAtual - Number(anoNascimento);

    console.log(`Você tem aproximadamente ${idade} anos.`)

    entrada.close();

})