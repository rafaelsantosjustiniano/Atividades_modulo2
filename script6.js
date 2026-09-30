const readline = require('readline');

const entrada = readline.createInterface({
    input: process.stdin,

    output: process.stdout
});

// Criando um array vazio para guardar os hobbies
const hobbies = [];

// Perguntando o primeiro hobby
entrada.question('Digite um hobby ou "sair" para terminar: ', function(hobby) {

    // Enquanto o usuário não digitar "sair"
    while (hobby.toLowerCase() !== 'sair') {

        // Adicionando o hobby ao array
        hobbies.push(hobby);

        // Pedindo outro hobby
        entrada.question('Digite outro hobby ou "sair" para terminar: ', function(novoHobby) {

            if (novoHobby.toLowerCase() !== 'sair') {
                hobbies.push(novoHobby);
            }

            console.log('\nSeus hobbies:');

            hobbies.forEach(function(hobby) {
                console.log(`- ${hobby}`);
            });

            // Encerrando a entrada
            entrada.close();
        });

        break;
    }

    // Caso o usuário digite sair logo no começo
    if (hobby.toLowerCase() === 'sair') {
        console.log('\nVocê não adicionou nenhum hobby.');
        entrada.close();
    }
});