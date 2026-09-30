
const readline = require('readline');


const entrada = readline.createInterface({
   
    input: process.stdin,

    output: process.stdout
});


entrada.question('Digite um número: ', function(numero) {

    // Transformando a resposta em número
    numero = Number(numero);

    // Verificando se o número é par
    if (numero % 2 === 0) {

        // Se o resto da divisão for 0
        console.log(`O número ${numero} é par.`);

    } else {

        // Se o resto da divisão não for 0
        console.log(`O número ${numero} é ímpar.`);
    }

    
    entrada.close();
});