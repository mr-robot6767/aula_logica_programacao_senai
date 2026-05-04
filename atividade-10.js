// ============================================================
//   ATIVIDADE 10 – Estruturas de Controle (Repetição - While)
// ============================================================

let Keyboard = require('readline-sync');

// ------------------------------------------------------------
// EXERCÍCIO 1 – While simples
// ------------------------------------------------------------
// a) Declare uma variável 'n' com valor 1.
// b) Usando while, exiba os números de 1 a 7 no console.
// c) Ao final, exiba: "Fim da contagem!"

// → Seu código aqui:
let n = 1

while (n <= 7) {
console.log(n)
n++;
}
console.log(`Fim da contagem!`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Contagem regressiva
// ------------------------------------------------------------
// a) Declare uma variável 'regressiva' com valor 10.
// b) Usando while, exiba a contagem de 10 até 1.
// c) Ao final, exiba: "Lançamento ON!"

// → Seu código aqui:
let regressiva = 10
while(regressiva >=1) {
    console.log(regressiva);
regressiva--;
}
console.log("Lançamento ON!")
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Validação de entrada
// ------------------------------------------------------------
// a) Usando while, peça ao usuário um número entre 1 e 5 e repita enquanto o valor for inválido.
//    A cada entrada inválida, exiba: "Valor fora do intervalo. Tente novamente."
// b) Quando o valor for válido, exiba: "Você escolheu: <número>"

// → Seu código aqui:
let escolha;

do {
    escolha = Keyboard.questionInt("Escolha um numero de 1 a 5: ");
    
    if (escolha < 1 || escolha > 5) {
        console.log("Valor fora do intervalo. Tente novamente.");
    }
} while (escolha < 1 || escolha > 5);
  
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Acumulador com while
// ------------------------------------------------------------
// a) Usando while, peça ao usuário números até que ele digite 0.
// b) Acumule a soma de todos os números digitados.
// c) Conte quantos números foram digitados (exceto o 0).
// d) Ao final, exiba a soma, a quantidade de numeros digitados e quais foram os números digitados.

// → Seu código aqui:
let numero;
let soma = 0;
let quant = 0;
let listaDeNumeros = []

do {
     numero= Keyboard.questionInt("Escolha um numero: ");
     if (numero !== 0) {
         soma += numero;
         quant++;
         listaDeNumeros.push(numero);
     }
} while(numero !== 0);
console.log(`Soma: ${soma}`);
console.log(`Quantidade de números: ${quant}`);
console.log(`Números digitados: ${listaDeNumeros}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Média com while e validação
// ------------------------------------------------------------
// a) Usando while, peça ao usuário notas de 0 a 10 até que ele digite -1 para encerrar.
//    Se a nota for inválida (< 0 e diferente de -1, ou > 10), exiba: "Nota inválida." e peça novamente.
// b) Calcule e exiba a média.

// → Seu código aqui:
// let nota;
// let somaNota = 0;
// let quantNota = 0;

//     do {
//         nota= Keyboard.questionInt("Defina a nota: ");
//         if (nota !== -1) {
//         if (nota >= 0 && nota <= 10){
//         }else{
//             console.log("Nota inválida! Digite um valor entre 0 e 10.");
//         }  
//     }
// }while(nota !== -1);
// let media = quantNota > 0 ? somaNota / quantNota : 0;
// console.log(`Quantidade de notas válidas: ${quantNota}`);
// console.log(`Média da turma: ${media.toFixed(2)}`);
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Do...while: menu simples
// ------------------------------------------------------------
// a) Usando do...while, exiba um menu repetitivo:
//    1 – Exibir hora atual  (use: new Date().toLocaleTimeString())
//    2 – Exibir data atual  (use: new Date().toLocaleDateString())
//    0 – Sair
// b) Processe a opção com switch/case.
// c) O menu deve repetir até o usuário escolher 0.

// → Seu código aqui:
let opcao;

do {
    console.log("1 - Hora Atual | 2 - Data Atual | 0 - Sair");
    opcao = Keyboard.questionInt("Escolha uma opcao: ");

    switch (opcao) {
        case 1:
            console.log("Hora agora: " + new Date().toLocaleTimeString());
            break;
        case 2:
            console.log("Data hoje: " + new Date().toLocaleDateString());
            break;
        case 0:
            console.log("Saindo do sistema...");
            break;
        default:
            console.log("Opção inválida! Tente novamente.");
    }
} while (opcao !== 0);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Adivinhe o número (while)
// ------------------------------------------------------------
// a) Gere um número secreto aleatório de 1 a 50 (Math.random())
// b) Peça o nome do jogador.
// c) Usando while, repita até o jogador acertar:
//    - Peça um palpite.
//    - Se muito alto, exiba: "Muito alto! Tente menor."
//    - Se muito baixo, exiba: "Muito baixo! Tente maior."
//    - Se acertou, saia do while.
// d) Ao acertar, exiba:
//    "<nome> acertou após <tentativas> tentativa(s)! O número era <secreto>."

// → Seu código aqui:
let numeroSecreto = Math.floor(Math.random() * 50) + 1;
let nome = Keyboard.question("Seu nome: ");
let palpite;
let tentativas = 0;
console.log("faça um palpite");
while(palpite !== numeroSecreto) {
    palpite = Keyboard.questionInt("Qual o seu palpite? ");
    tentativas++;
    if (palpite > numeroSecreto) {
        console.log("Muito alto! Tente menor.");
    } else if (palpite < numeroSecreto) {
        console.log("Muito baixo! Tente maior.");
    }
}
console.log(`${nome} acertou após ${tentativas} tentativa(s)! O número era ${numeroSecreto}.`);  

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Tabuada com while
// ------------------------------------------------------------
// a) Peça ao usuário um número inteiro.
// b) Usando while, exiba a tabuada desse número de 1 a 10:
//    Formato para exibição: "<número> x <i> = <resultado>"

// → Seu código aqui:
let numInteiro = Keyboard.questionInt("Digite um numero inteiro: ");
let i = 1;

while (i <= 10) {
    console.log(`${numInteiro} x ${i} = ${numInteiro * i}`);
    i++;
}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Contador com condição composta
// ------------------------------------------------------------
// a) Declare 'saldo' com valor 1000 e 'rodada' com valor 0.
// b) Usando while, simule saques aleatórios enquanto o saldo for maior que 0 E a rodada for menor que 10:
//    - A cada rodada, gere um saque aleatório de 50 a 200:
//    - Se o saque for maior que o saldo, exiba: "Saldo insuficiente. Fim!" e encerre.
//    - Caso contrário, desconte do saldo e exiba:
//      "Rodada <rodada>: sacou R$ <saque> | Novo saldo: R$ <saldo>"
// c) Ao final, exiba o saldo restante e o total de rodadas.

// → Seu código aqui:
let saldo = 1000;
let rodada = 0;

while (saldo > 0 && rodada < 10) {
    rodada++;

    let saque = Math.floor(Math.random() * (200 - 50 + 1)) + 50;

    if (saque > saldo) {
        console.log(`Saque de R$ ${saque} tentado. Saldo insuficiente. Fim!`);
        break;
    } else {
        saldo -= saque; 
        console.log(`Rodada ${rodada}: sacou R$ ${saque} | Novo saldo: R$ ${saldo}`);
    }
}
console.log(`Saldo restante: R$ ${saldo}`);
console.log(`Total de rodadas realizadas: ${rodada}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Do...while: cadastro em loop
// ------------------------------------------------------------
// a) Crie um array vazio 'contatos'.
// b) Usando do...while, repita:
//    - Peça nome e telefone do contato.
//    - Adicione um objeto { nome, telefone } ao array.
//    - Pergunte: "Adicionar outro contato?" (keyInYN()).
//    - Repita enquanto o usuário responder que sim.
// c) Ao sair do loop, exiba todos os contatos com console.table().
// d) Exiba: "Total de contatos cadastrados: <qtd>"

// → Seu código aqui:
let contatos = []
do{
nome1 = Keyboard.question("Digite seu nome: ");
telefone = Keyboard.questionInt("Digite seu telefone: ");
contatos.push({ nome: nome1, telefone: telefone });

} while (Keyboard.keyInYN("Adicionar outro contato? "));

console.table(contatos);
console.log(`Total de contatos cadastrados: ${contatos.length}`);
console.log("_______________________________");