// ============================================================
// ATIVIDADE 15 – Funções com Parâmetros e Retornos
// ============================================================
//
// IMPORTANTE: a partir de agora, as funções devem RECEBER
// PARÂMETROS e RETORNAR valores sempre que fizer sentido.
// Evite ficar misturando console.log() dentro de funções.
//
// ============================================================

let Keyboard = require("readline-sync")

// ------------------------------------------------------------
// EXERCÍCIO 1 – Função com 1 parâmetro
// ------------------------------------------------------------
function quadrado(n) {
    return n * n;
}
console.log(`Quadrado de 3: ${quadrado(3)}`);
console.log(`Quadrado de 7: ${quadrado(7)}`);
console.log(`Quadrado de 10: ${quadrado(10)}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Função com 2 parâmetros
// ------------------------------------------------------------
function somar(a, b) { return a + b; }
function subtrair(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) { 
    if (b === 0) return "Erro: divisão por zero";
    return a / b; 
}
console.log(`Soma (6+7): ${somar(6, 7)}`);
console.log(`Subtração (10-4): ${subtrair(10, 4)}`);
console.log(`Multiplicação (5*3): ${multiplicar(5, 3)}`);
console.log(`Divisão (10/2): ${dividir(10, 2)}`);
console.log(`Divisão por zero (5/0): ${dividir(5, 0)}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Funções booleanas
// ------------------------------------------------------------
function ehPar(n) {
    return n % 2 === 0;
}
function ehMaiorDeIdade(idade) {
    return idade >= 18;
}
function ehVogal(letra) {
    let vogais = "aeiouAEIOU";
    return vogais.includes(letra);
}
console.log(`2 é par? ${ehPar(2)}`);
console.log(`19 é maior de idade? ${ehMaiorDeIdade(19)}`);
console.log(`'A' é vogal? ${ehVogal("A")}`);
console.log(`'b' é vogal? ${ehVogal("b")}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Múltiplos returns (early return)
// ------------------------------------------------------------
function classificarIMC(imc) {
   if (imc < 18.5) return "Abaixo do peso";
   if (imc < 25) return "Peso normal";
   if (imc < 30) return "Sobrepeso";
   return "Obesidade";
}

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

let peso = Keyboard.questionFloat("Digite seu peso (kg): ");
let altura = Keyboard.questionFloat("Digite sua altura (m): ");

let imcCalculado = calcularIMC(peso, altura);
let classificacao = classificarIMC(imcCalculado);

console.log(`IMC: ${imcCalculado.toFixed(2)} – ${classificacao}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Parâmetros padrão (default)
// ------------------------------------------------------------
function precoComDesconto(valor, desconto = 10) {
    return valor * (1 - desconto / 100);
}
console.log(`R$ 100 com desc padrão (10%): R$ ${precoComDesconto(100).toFixed(2)}`);
console.log(`R$ 100 com desc de 25%: R$ ${precoComDesconto(100, 25).toFixed(2)}`);
console.log(`R$ 250 com desc de 5%: R$ ${precoComDesconto(250, 5).toFixed(2)}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Funções que recebem vetores
// ------------------------------------------------------------
let numeros = [12, 7, 25, 3, 18, 9, 31, 14];

    function somarVetor(vet) {
        let soma = 0;
        for(let numero of vet){
            soma += numero;
        }
        return soma;
    }

    function mediaVetor(vet){
        return somarVetor(vet) / vet.lenght;
    }

    function maiorDoVetor(vet){
        let maior = vet[0];
        for(let numero of vet){
            if (numero > maior){
                maior = numero;
            }
            return maior;
        }
    }

        function menorDoVetor(vet){
            let menor = vet[0];
            for(let numero of vet){
                if (numero< menor){
                    menor = numero;
                }
                return menor;
            }
    }
    console.log(`Vetor analisado: ${numeros}`);
    console.log(`Soma dos valores: ${somarVetor(numeros)}`);
    console.log(`Media dos valores: ${mediaVetor(numeros)}`);
    console.log(`Maior Valor: ${maiorDoVetor(numeros)}`);
    console.log(`Menor Valor: ${menorDoVetor(numeros)}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Função que retorna objeto
// ------------------------------------------------------------
// a) Crie a função 'criarAluno(nome, idade, nota)' que retorna um objeto:
//    { nome, idade, nota, situacao }
//    onde 'situacao' é "Aprovado" se nota >= 7, senão "Reprovado".
// b) A verificação de aprovação deve ser feita por uma função específica para isso.
// c) Crie 3 alunos chamando a função e exiba-os com console.table([a1, a2, a3]).

// → Seu código aqui:
function aprovacao(nota){
    if(nota >= 7){return "aprovado"}
    else {return "reprovado"}
}

function criarAluno(){
    function criarAluno(nome, idade, nota) {
        let situacaoAluno = aprovacao(nota);
        
        return {
            nome: nome,
            idade: idade,
            nota: nota,
            situacao: situacaoAluno
        };
    }
    
    let a1 = criarAluno("Ana", 20, 8.5);
    let a2 = criarAluno("Carlos", 19, 6.0);
    let a3 = criarAluno("Mariana", 22, 7.0);

    console.table([a1, a2, a3]);
}
criarAluno();

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Função que retorna vetor
// ------------------------------------------------------------
// a) Crie a função 'gerarPares(inicio, fim)' que retorna um vetor
//    com todos os números PARES entre 'inicio' e 'fim' (inclusive).
// b) Teste com gerarPares(1, 20) e exiba o vetor.
// c) Crie 'filtrarMaioresQue(vet, limite)' que retorna um novo vetor
//    apenas com os elementos maiores que 'limite'.
// d) Combine: gere pares de 1 a 50 e filtre os maiores que 30.

// → Seu código aqui:
function gerarPares(inicio, fim){
    let VetorPares = []
    for (let i = inicio; i <= fim; i++){
        if (i % 2 === 0){
            VetorPares.push(i)
        }
    }
    return gerarPares;
}

const paresAte20 = gerarPAres(1,20);
console.log("Pares de 1 a 20:",paresAte20)
console.log("_______________________________");
