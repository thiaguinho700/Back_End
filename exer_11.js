const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("Insira seu sálario atual: ", (answer)=>{

    var salarioLiqui = answer - (Number(answer) * 20 )/ 100

    console.log(`Sálario bruto: ${answer}`);
    console.log(`Sálario liquido: ${salarioLiqui}`);
    

    rl.close()
})