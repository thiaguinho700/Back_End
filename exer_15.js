const readline = require("readline")


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var altura;
var peso;
var IMC;

rl.question("Insira sua altura em metros: ", (rep) => {

    rl.question("Insira seu peso: ", (reps) => {
        altura = Number.parseFloat(rep);
        peso = Number.parseFloat(reps);
        IMC = peso / (altura ** 2);

        if (IMC <= 18.5) {

            console.log("Magreza");
        }
        else if (IMC > 18.5 && IMC < 24.9) {

            console.log("Normal");
        }

        else if (IMC > 25 && IMC < 29.9) {

            console.log("Sobrepeso");
        }

        else if (IMC > 30 && IMC < 39.9) {

            console.log("Obsidade");
        }

        else if (IMC > 40) {
            console.log("Obesidade Grave");
        }

        rl.close();
    });

});


