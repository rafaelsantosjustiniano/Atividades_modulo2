
const readline = require('readline');


const entrada = readline.createInterface({
    
    input: process.stdin,
 
    output: process.stdout
});


entrada.question('Você gosta de café? ', function(resposta) {

    
    const gostaDeCafe = resposta.toLowerCase() === 'sim';

    // Verificando a resposta
    if (gostaDeCafe) {

       
        console.log('Você gosta de café!');

    } else {

        
        console.log('Você não gosta de café.');
    }

  
    entrada.close();
});