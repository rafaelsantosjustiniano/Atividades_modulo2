const readline = require('readline');

const entrada = readline.createInterface({
    input: process.stdin,

    output: process.stdout
});

const numeros = [];

entrada.question('Digite o primeiro número: ', function(numero1) {

    numeros.push(Number(numero1));

    entrada.question('Digite o segundo número: ', function(numero2) {

        numeros.push(Number(numero2));

        entrada.question('Digite o terceiro número: ', function(numero3) {

            // Adicionando o terceiro número ao array
            numeros.push(Number(numero3));

            // Criando uma variável para guardar a soma
            let soma = 0;

            // Percorrendo o array
            for (let i = 0; i < numeros.length; i++) {

                // Somando cada número
                soma = soma + numeros[i];
            }

            // Calculando a média
            const media = soma / numeros.length;

            // Mostrando o resultado
            console.log(`A média é: ${media}`);

            entrada.close();
        });
    });
});