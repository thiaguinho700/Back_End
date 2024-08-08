const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


rl.question("Quantos litros você irá abastecer? ", (answer) =>{

    var valor = Number(answer) * 5.50

    console.log(`O valor total: R$`, valor);
    

    rl.close()
})