const readline = require('readline');

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const alunos = [];

entrada.question('Digite o nome do aluno: ', function(nome) {

    entrada.question('Digite a idade do aluno: ', function(idade) {

        entrada.question('Digite o curso do aluno: ', function(curso) {

            const aluno = {
                nome: nome,
                idade: Number(idade),
                curso: curso
            };

            alunos.push(aluno);

            console.log('\nAlunos cadastrados:');

            alunos.forEach(function(aluno) {

                console.log(`Nome: ${aluno.nome}`);
                console.log(`Idade: ${aluno.idade}`);
                console.log(`Curso: ${aluno.curso}`);
                console.log('--------------------');
            });

            entrada.close();
        });
    });
});