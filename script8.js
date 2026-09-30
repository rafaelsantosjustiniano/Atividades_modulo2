const readline = require('readline');

const entrada = readline.createInterface({
    input: process.stdin,

    output: process.stdout
});

// Criando uma lista de números
const numeros = [10, 20, 30, 40, 50];

entrada.question('Digite um número: ', function(numero) {

    numero = Number(numero);

    let encontrado = false;

    for (let i = 0; i < numeros.length; i++) {

        if (numero === numeros[i]) {

            // Se encontrou, muda para true
            encontrado = true;
        }
    }

    if (encontrado) {
        console.log(`O número ${numero} está na lista.`);
    } else {
        console.log(`O número ${numero} não está na lista.`);
    }

    entrada.close();
});