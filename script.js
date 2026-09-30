
const readline = require('readline');

const entrada = readline.createInterface({
    
    input: process.stdin,

    
    output: process.stdout
});


entrada.question('Digite seu nome: ', function(nome) {

    entrada.question('Digite sua idade:', function(idade) {

        entrada.question('Você possui CNH?', function(resposta){
        
            //transformando a resposta em booleano
            //resposta.toLowerCase - transforma tudo em letras minúsculas
            //=== 'sim' - isso pergunta se a resposta é realmente "sim" se for sim - true e se for não é false
            const possuiCNH = resposta.toLowerCase() === 'sim';

                const usuario = {
                    nome : nome,
                    idade : idade,
                    possuiCNH : possuiCNH
                };



        
        // mostra uma mesagem no terminal
        // ${nome} pega o nome que o usuário digitou
        // ${idade} pega a idade que o usuário digitou
        console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

        //tomando decisão
        if (possuiCNH){
            console.log('Você possui CNH.');
        } else {
            console.log('Você não possui CNH.');
        }

        // Encerra a entrada de informações do usuário
        entrada.close();


         });
   
    });


});