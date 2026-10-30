const readline = require("readline");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Asks and repeats until the person types something (no empty answers)
function ask(text, callback) {
  input.question(text, function (answer) {
    if (answer.trim() === "") {
      console.log("Este campo não pode ficar vazio. Tente novamente.\n");
      ask(text, callback);
    } else {
      callback(answer.trim());
    }
  });
}

// Asks and repeats until the person types a valid number
function askNumber(text, callback) {
  ask(text, function (answer) {
    const number = Number(answer);

    if (isNaN(number)) {
      console.log("Digite apenas números. Tente novamente.\n");
      askNumber(text, callback);
    } else {
      callback(number);
    }
  });
}

ask("Digite seu nome: ", function (name) {
  askNumber("Digite seu ano de nascimento: ", function (birthYear) {
    const currentYear = 2026;
    const age = currentYear - birthYear;

    console.log(`Nome: ${name}`);
    console.log(`Idade: ${age}`);

    if (age >= 18) {
      console.log("Você é maior de idade.");
    } else {
      console.log("Você é menor de idade.");
    }

    ask("Você possui CNH? (sim/não): ", function (answer) {
      const hasLicense = answer.toLowerCase() === "sim";

      if (hasLicense) {
        console.log("Você possui CNH.");
      } else {
        console.log("Você não possui CNH.");
      }

      askNumber("Digite um número: ", function (number) {
        if (number % 2 === 0) {
          console.log("O número é par.");
        } else {
          console.log("O número é ímpar.");
        }

        const hobbies = [];

        ask("Digite o seu primeiro hobby: ", function (hobby1) {
          hobbies.push(hobby1);

          ask("Digite o seu segundo hobby: ", function (hobby2) {
            hobbies.push(hobby2);

            ask("Digite o seu terceiro hobby: ", function (hobby3) {
              hobbies.push(hobby3);

              console.log("\nSeus hobbies:");

              hobbies.forEach(function (hobby) {
                console.log(`- ${hobby}`);
              });

              console.log(`Seu nome possui ${name.length} caracteres.`);

              ask("Digite um hobby para pesquisar: ", function (search) {
                let found = false;

                for (let i = 0; i < hobbies.length; i++) {
                  if (hobbies[i].toLowerCase() === search.toLowerCase()) {
                    found = true;
                  }
                }

                if (found) {
                  console.log("Hobby encontrado.");
                } else {
                  console.log("Hobby não encontrado.");
                }

                input.close();
              });
            });
          });
        });
      });
    });
  });
});