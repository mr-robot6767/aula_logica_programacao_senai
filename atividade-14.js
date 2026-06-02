// ============================================================
// ATIVIDADE 14 – Funções Simples
// ============================================================
//
// IMPORTANTE: nesta atividade, NÃO use parâmetros nem return.
// As funções devem apenas executar um bloco de código.
//
// ============================================================

let Keyboard = require("readline-sync")

// ------------------------------------------------------------
// EXERCÍCIO 1 – Primeira função
// ------------------------------------------------------------
// a) Crie uma função 'saudacao' que exibe 3 linhas no console:
//    "Olá!"
//    "Bem-vindo(a) ao curso de JavaScript."
//    "Bons estudos!"
// b) Chame a função 2 vezes.

// → Seu código aqui:
function saudacao(){
    console.log("Olá!")
    console.log("Bem-vindo(a) ao curso de JavaScript.")
    console.log("Bons estudos!")
}
saudacao();
saudacao();
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Função que organiza
// ------------------------------------------------------------
// a) Crie uma função 'linha' que exibe:
//    "----------------------------------------"
// b) Crie uma função 'titulo' que exibe:
//    "         RELATÓRIO MENSAL              "
// c) Crie uma função 'cabecalho' que CHAMA, em ordem:
//    linha(), titulo(), linha().
// d) Chame cabecalho() uma vez.

// → Seu código aqui:
function linha(){
    console.log("----------------------------------------")
}

function titulo(){
    console.log("         RELATÓRIO MENSAL              ")
}
function cabecalho(){
    linha(),
    titulo(),
    linha();
}

cabecalho();
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Calculadora de informações
// ------------------------------------------------------------
// a) Crie uma função 'meusDados' que pergunta ao usuário:
//    - Nome
//    - Idade
//    - Cidade
// b) Crie uma função 'exibirDados' que recebe exibe os dados e exibe um cartão no formato:
//    -------------------------
//    Nome:   <nome>
//    Idade:  <idade>
//    Cidade: <cidade>
//    -------------------------
// c) Pergunte os dados de 2 usuários e os guarde em um objeto.
// d) Exiba os dados dos 2 usuários.
//
// ATENÇÃO: APÓS CRIADA, DIGITAR/CHAMAR A FUNÇÃO APENAS UMA VEZ
// PENSE EM UMA LÓGICA QUE EVITE DIGITAR A FUNÇÃO MAIS DE UMA VEZ
// Após finalizar, me chame para eu verificar a lógica - questão importante

// → Seu código aqui:

// let users = []

// function linhas(){
//     console.log("-----------------------------------------------")
// }
// function meusDados(){
//     for(let i = 0;i < 2;i ++){
//         users.push(
//             {
//                 nome : Keyboard.question("nome:"),
//                 idade : Keyboard.questionInt("idade:"),  
//                 cidade : Keyboard.question("cidade:")
//             }
//         )
//     }
// }
// function exibirDados(){
//     for(let i = 0;i < 2;i ++){
//         linhas();
//         console.log(users[i])
//         linhas();}
// }
// meusDados();
// exibirDados();

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Sorteio de número
// ------------------------------------------------------------
// a) Crie uma função 'sortear' que:
//    - Gera um número aleatório de 1 a 100
//      (Math.floor(Math.random() * 100) + 1).
//    - Exibe: "Número sorteado: <n>"
// b) Execute a função 5 vezes - tente fazer sem digitar a função 5 vezes.

// → Seu código aqui:
function sortear(){
   let num = Math.floor(Math.random() * 100) + 1
   console.log(`Número sorteado: ${num}`)
}

function exibirNumero(){
    for(let i = 0;i < 5;i ++){
        sortear();
        linha();
        }
}
exibirNumero();

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Tabela de multiplicação
// ------------------------------------------------------------
// a) Crie uma função 'tabuadaDoCinco' que exibe a tabuada do 5 inteira:
// (pense em uma lógica para não precisar digitar todos os valores)
//    5 x 1 = 5
//    5 x 2 = 10
//    ...
//    5 x 10 = 50
// b) Crie uma função 'tabuadaDoSete' análoga, para o 7.
// c) Chame as duas funções.

// → Seu código aqui:
function tabuadaDoCinco(){
    console.log(`Tabuada do 5`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${5} x ${i} = ${5 * i}`);
    }   
}

function tabuadaDoSete(){
    console.log(`Tabuada do 7`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${7} x ${i} = ${7 * i}`);
    }   
}
tabuadaDoCinco();
linha();
tabuadaDoSete();
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Conversão fixa
// ------------------------------------------------------------
// a) Crie uma função 'converterTemperatura' que:
//    - Pergunta uma temperatura em Celsius.
//    - Calcula em Fahrenheit: F = C * 1.8 + 32.
//    - Exibe: "<C>°C equivalem a <F>°F".
// b) Chame a função 3 vezes.

// → Seu código aqui:
// function converterTemperatura(){
//    let C = Keyboard.question("temperatura em Celsius: ");
//    let F = C * 1.8 + 32
//    console.log(`${C}°C equivalem a ${F}°F`)

// }
// for (let i = 1; i <= 3; i++){
// converterTemperatura();}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Listando informações
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const filmes = ["Matrix", "Interestelar", "Origem", "Senhor dos Anéis"];
// b) Crie a função 'listarFilmes' que percorre o vetor 'filmes' com for
//    e exibe cada um no formato: "<i+1> - <filme>".
// c) Chame listarFilmes() duas vezes.

// → Seu código aqui:
function listarFilmes(){
    for (let i = 1; i < filmes.length; i++) {
        console.log(`indice ${i}: ${filmes[i]}`);
        
      }

    }
listarFilmes();
linha();
listarFilmes();

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Dividindo um programa em partes
// ------------------------------------------------------------
// Vamos criar um "mini sistema de boas-vindas" composto por 4 funções:
//
// a) 'limparTela'      → exibe 30 linhas em branco (console.log("")).
// b) 'banner'          → exibe um banner com 3 linhas (exiba qualquer informação dentro de "-----------").
// c) 'pedirNome'       → pergunta o nome do usuário e exibe "Olá, <nome>!".
// d) 'rodape'          → exibe "Sistema desenvolvido por <seu nome>".
//
// Em seguida, monte o programa principal (outra função) chamando, em ordem:
//    limparTela(); banner(); pedirNome(); rodape();
// E chame a função principal.

// → Seu código aqui:
function limparTela(){
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("") 
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")

}
function banner(){
    console.log("------------------------")
    console.log("       BOAS VINDAS      ")
    console.log("------------------------")
}
function pedirNome(){
    let nome = Keyboard.question("nome: ");
    console.log(`ola, ${nome}!`)
}
function rodape(){
    console.log("Sistema desenvolvido por Kevin")
}
function main(){
    limparTela(); banner(); pedirNome(); rodape();
}
main();
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Menu organizado em funções
// ------------------------------------------------------------
// Você vai criar um menu onde CADA opção é uma função separada.
//
// a) Crie as funções:
//    - 'opcaoSomar'       → pede 2 números e exibe a soma.
//    - 'opcaoSubtrair'    → pede 2 números e exibe a subtração.
//    - 'opcaoMultiplicar' → pede 2 números e exibe a multiplicação.
//    - 'opcaoDividir'     → pede 2 números, trata divisão por zero e exibe o resultado.
//    - 'exibirMenu'       → exibe as opções no console.
//
// b) Usando do...while + switch, monte o menu chamando a função
//    correspondente em cada case. Encerre quando o usuário digitar 0.

// → Seu código aqui:
// Certifique-se de importar a biblioteca no topo (ex: readline-sync)
// const Keyboard = require('readline-sync');

function opcaoSomar(){
    let num1 = Keyboard.questionInt("numero 1: ");
    let num2 = Keyboard.questionInt("numero 2: ");
    console.log("Resultado: " + (num1 + num2));
}

function opcaoSubtrair(){
    let num1 = Keyboard.questionInt("numero 1: ");
    let num2 = Keyboard.questionInt("numero 2: ");
    console.log("Resultado: " + (num1 - num2));
}

function opcaoMultiplicar(){
    let num1 = Keyboard.questionInt("numero 1: ");
    let num2 = Keyboard.questionInt("numero 2: ");
    console.log("Resultado: " + (num1 * num2));
}

function opcaoDividir(){
    let num1 = Keyboard.questionInt("numero 1: ");
    let num2 = Keyboard.questionInt("numero 2: ");
    
    if (num2 !== 0) {
        console.log("Resultado: " + (num1 / num2));
    } else {
        console.log("Erro: Divisão por zero não é permitida.");
    }
}

function exibirMenu(){
    console.log('\n--- MENU CALCULADORA ---');
    console.log('1 PARA SOMAR');
    console.log('2 PARA SUBTRAIR');
    console.log('3 PARA MULTIPLICAR');
    console.log('4 PARA DIVIDIR');
    console.log('0 PARA SAIR');
}

let opcao;

do {
    exibirMenu();
    opcao = Keyboard.questionInt("escolha uma opcao: ");

    switch(opcao){
        case 1:
            opcaoSomar();
            break;
        case 2:
            opcaoSubtrair();
            break;
        case 3:
            opcaoMultiplicar();
            break;
        case 4:
            opcaoDividir();
            break;
        case 0:
            console.log('Saindo do programa...');
            break;
        default:
            console.log('Opção inválida!');
    }
} while(opcao !== 0);

console.log("_______________________________");