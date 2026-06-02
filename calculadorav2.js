let Keyboard = require('readline-sync');

let continuar;
do {
let num1 = Keyboard.questionInt("digite um primeiro numero: ")
let num2 = Keyboard.questionInt("digite um segundo numero: ")
let operacao = Keyboard.question(`digite a operacao desejada \n +:para adicao , - :para subtracao , * :para multiplicacao , / :para divisao `)

let resultado;
switch(operacao){
    case '+': resultado = num1 + num2;
        break;
    case '-': resultado = num1 - num2;
        break;
    case '*': resultado = num1 * num2;
        break;
    case '/': resultado = (num2 !== 0) ? num1 / num2 : "erro";
        break;
    
default: resultado = "tentativa invalida";
}
console.log(`resultado: ${resultado} `)

let resposta = Keyboard.question("novamente?(s/n): ")

if(resposta === "s" || resposta === "S" ) {
    continuar = true;
    }else {
        continuar = false;
        console.log("Saindo...");
    }
} while (continuar);