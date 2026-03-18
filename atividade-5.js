// ============================================================
//   ATIVIDADE 05 – Operadores Relacionais em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-05.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================ 

let Keyboard = require('readline-sync')

// ------------------------------------------------------------
// EXERCÍCIO 1 – Comparando com == e ===
// ------------------------------------------------------------
// Para cada par de valores abaixo, declare duas variáveis e exiba:
//   a) O resultado de == usando template literal: "<a> == <b> → <resultado>"
//   b) O resultado de === usando template literal: "<a> === <b> → <resultado>"
//
// Pares de valores:
//   1) 10 e 10
//   2) 10 e "10"
//   3) 0 e false
//   4) null e undefined
//   5) "JS" e "JS"

// → Seu código aqui:
// let a = 10, a1 = 10
//     console.log (`10 == 10 → ${a == a1}`);

// let b = 10, b1 = 10
//     console.log(`10 == "10" → ${b == b1}`);

// let c = 0, c1 = false
//     console.log(`0 == false → ${c == c1}`);

// let d = null, d1 = undefined
//     console.log(`null == undefined → ${d == d1}`);

// let e = "JS", e1 = "JS"
//     console.log(`"JS" == "JS" → ${e == e1}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Comparando com != e !==
// ------------------------------------------------------------
// Para cada par de valores abaixo, exiba:
//   a) O resultado de != : "<a> != <b> → <resultado>"
//   b) O resultado de !== : "<a> !== <b> → <resultado>"
//
// Pares de valores:
//   1) 5 e 5
//   2) 5 e "5"
//   3) 7 e 3
//   4) true e 1

// → Seu código aqui:
// let a = 5, a1 = 5 
//     console.log(`5 !== 5 → ${a !== a1}`);

// let b = 5, b1 = "5"
//     console.log(`5 !== "5" → ${b !== b1}`);

// let c = 7, c1 = 3
//     console.log(`7 !== 3 → ${c !== c1}`);

// let d = true, d1 = 1
//     console.log(`true !== 1 → ${d !== d1}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior, menor e igual
// ------------------------------------------------------------
// a) Declare "salarioA" com valor 3500 e "salarioB" com valor 4200.
// b) Calcule e armazene em variáveis (booleanas) os resultados de:
//    - salarioA > salarioB
//    - salarioA < salarioB
//    - salarioA >= salarioB
//    - salarioA <= salarioB
//    - salarioA === salarioB
// c) Exiba cada resultado com template literal e verificação ternária no formato:
//    "Salário A (R$ <a>) > Salário B (R$ <b>): <resultado>"

// → Seu código aqui:
let salarioA = 3500
let salarioB = 4200

const Maior = salarioA > salarioB;
const Menor = salarioA < salarioB;
const MaiorOuIgual = salarioA >= salarioB;
const MenorOuIgual = salarioA <= salarioB;
const Igual = salarioA === salarioB;

console.log(`Salário A (R$ ${salarioA}) > Salário B (R$ ${salarioB}): ${Maior ? "Verdadeiro" : "Falso"}`);
console.log(`Salário A (R$ ${salarioA}) < Salário B (R$ ${salarioB}): ${Menor ? "Verdadeiro" : "Falso"}`);
console.log(`Salário A (R$ ${salarioA}) >= Salário B (R$ ${salarioB}): ${MaiorOuIgual ? "Verdadeiro" : "Falso"}`);
console.log(`Salário A (R$ ${salarioA}) <= Salário B (R$ ${salarioB}): ${MenorOuIgual ? "Verdadeiro" : "Falso"}`);
console.log(`Salário A (R$ ${salarioA}) === Salário B (R$ ${salarioB}): ${Igual ? "Verdadeiro" : "Falso"}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Armazenando resultados em variáveis
// ------------------------------------------------------------
// a) Declare "estoque" com valor 0.
// b) Armazene em "temEstoque" o resultado de: estoque > 0
// c) Armazene em "estoqueZerado" o resultado de: estoque === 0
// d) Declare "temperatura" com valor 36.5.
// e) Armazene em "febre" o resultado de: temperatura >= 37.6
// f) Exiba cada variável usando template literal.

// → Seu código aqui:
let estoque = 0
let temEstoque = estoque > 0
let estoqueZerado = estoque === 0
let temperatura = 36.5
let febre = temperatura >= 37.6

console.log(`estoque: ${estoque}`);
console.log(`Tem estoque: ${temEstoque}`);
console.log(`Estoque zerado: ${estoqueZerado}`);
console.log(`Temperatura: ${temperatura}°C`);
console.log(`Esta com febre: ${febre}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Comparações com input do usuário
// ------------------------------------------------------------
// a) Peça ao usuário dois números.
// b) Armazene em variáveis o resultado das seguintes comparações:
//    - num1 > num2
//    - num1 < num2
//    - num1 === num2
//    - num1 >= num2
// c) Exiba cada resultado com template literal.

// → Seu código aqui:
const num1 = Keyboard.questionInt('digite o primeiro numero: ');
const num2 = Keyboard.questionInt('digite o segundo numero: ');

const maior = num1 > num2;
const menor = num1 < num2;
const igual = num1 === num2;
const maiorOuIgual = num1 >= num2;

console.log(`${num1} > ${num2}: ${maior}`);
console.log(`${num1} < ${num2}: ${menor}`);
console.log(`${num1} === ${num2}: ${igual}`);
console.log(`${num1} >= ${num2}: ${maiorOuIgual}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Verificação de preço
// ------------------------------------------------------------
// a) Peça ao usuário o preço de um produto.
// b) Defina uma constante "precoMaximo" com valor 100.
// c) Armazene em "estaDentroDoOrcamento" o resultado de: preco <= precoMaximo.
// d) Armazene em "esteItemEhCaro" o resultado de: preco > precoMaximo.
// e) Exiba no console:
//    "Preço informado: R$ <preco>"
//    "Dentro do orçamento (≤ R$ <precoMaximo>)? : <estaDentroDoOrcamento ? "Sim" : "Não">"
//    "Item caro (> R$ <precoMaximo>)? : <esteItemEhCaro ? "Sim" : "Não">"

// → Seu código aqui:
const preco = Keyboard.questionFloat('digite o preco: ');
const precoMaximo = 180

const estaDentroDoOrcamento = preco <= precoMaximo;
const esteItemEhCaro = preco > precoMaximo;

console.log(`Preço informado: R$ ${preco}`);
console.log(`Dentro do orçamento R$ ${precoMaximo}? : ${estaDentroDoOrcamento ? "Sim" : "Não"}`);
console.log(`Item caro R$ ${precoMaximo}? : ${esteItemEhCaro ? "Sim" : "Não"}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Comparando notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome e a idade de 2 pessoas e armazene como objetos dentro de uma lista "cadastro".
// b) Armazene os resultados das comparações:
//    - idadePessoa1 > idadePessoa2
//    - idadePessoa1 === idadePessoa2
//    - idadePessoa1 >= 18 (maior de idade)
//    - idadePessoa2 >= 18 (maior de idade)
// c) Exiba todos os resultados com template literal e verificação ternária.
//    Exemplo: `Idade da <nomePessoa1> é <idadePessoa1> e ela é ${idadePessoa1 >= 18 ? "maior de idade" : "menor de idade"}.`
// d) Similar ao exemplo acima, verifique e exiba qual pessoa é mais velha.

// → Seu código aqui:
const cadastro = [
    {
        nome: Keyboard.question('Nome da primeira pessoa: '),
        idade: Keyboard.questionInt('Idade da primeira pessoa: ')
    },
        {
        nome: Keyboard.question('Nome da segunda pessoa: '),
        idade: Keyboard.questionInt('Idade da segunda pessoa: ')
        }
];

const p1 = cadastro[0];
const p2 = cadastro[1];

const p1MaiorDeIdade = p1.idade >= 18;
const p2MaiorDeIdade = p2.idade >= 18;

console.log(`Idade de ${p1.nome} é ${p1.idade} e ela é ${p1MaiorDeIdade ? "maior de idade" : "menor de idade"}.`);
console.log(`Idade de ${p2.nome} é ${p2.idade} e ela é ${p2MaiorDeIdade ? "maior de idade" : "menor de idade"}.`);

const p1MaisVelha = p1.idade > p2.idade;
console.log(p1MaisVelha)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Comparando notas (versão avançada)
// ------------------------------------------------------------
// a) Peça ao usuário o nome e três notas de 2 alunos e armazene como objetos dentro de uma lista "alunos".
// b) Calcule a média de cada aluno e armazene em "mediaAluno1" e "mediaAluno2".
// e) Verifique e exiba no console qual aluno obteve a maior média usando template literal e comparador ternário
// c) Compare e exiba no console, qual aluno obteve a primeira maior nota, a segunda e a terceira.
//    Exemplo: `Aluno com primeira maior nota: ${nota1aluno1 > nota1aluno2 ? nomeAluno1 : nomeAluno2}`
// → Seu código aqui:


console.log("_______________________________");