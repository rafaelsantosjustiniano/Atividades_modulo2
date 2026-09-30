
const readline = require('readline');


const entrada = readline.createInterface({
    input: process.stdin,

    output: process.stdout
});

entrada.question('Digite uma frase: ', function(frase) {

    const quantidadeCaracteres = frase.length;

    console.log(`Sua frase possui ${quantidadeCaracteres} caracteres.`);

    entrada.close();
});