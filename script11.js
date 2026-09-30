const readline = require('readline');

const entrada = readline.createInterface({
    input: process.stdin,

    output: process.stdout
});

const livros = [];

entrada.question('Digite o título do livro: ', function(titulo) {

    entrada.question('Digite o autor do livro: ', function(autor) {

        // Criando um objeto com as informações do livro
        const livro = {
            titulo: titulo,
            autor: autor
        };

        // Adicionando o livro dentro do array
        livros.push(livro);

        console.log('\nLivro adicionado com sucesso!');

        entrada.question('\nDigite o título do livro que deseja buscar: ', function(busca) {

            let encontrado = false;

            // Percorrendo todos os livros do array
            for (let i = 0; i < livros.length; i++) {

                // Verificando se o título do livro é igual ao que foi pesquisado
                if (livros[i].titulo.toLowerCase() === busca.toLowerCase()) {

                    encontrado = true;

                    console.log('\nLivro encontrado!');
                    console.log(`Título: ${livros[i].titulo}`);
                    console.log(`Autor: ${livros[i].autor}`);
                }
            }

            if (encontrado === false) {
                console.log('\nLivro não encontrado.');
            }

            console.log('\nTodos os livros disponíveis:');

            livros.forEach(function(livro) {

                console.log(`Título: ${livro.titulo}`);

                console.log(`Autor: ${livro.autor}`);

                console.log('--------------------');
            });

            entrada.close();
        });
    });
});