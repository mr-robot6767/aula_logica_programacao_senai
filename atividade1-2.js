
// ============================================================
//   ATIVIDADE 01.1 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Apresentação criativa
// ------------------------------------------------------------
// Crie variáveis para nome, idade e hobby favorito.
// Monte uma frase usando template literal que se apresente e diga o que gosta de fazer.

// → Seu código aqui:
let nome = "Kevin";
let Idade = 16
let Hobby = "hackear";
console.log(`Meu nome é ${nome}, tenho ${Idade} e gosto de ${Hobby}`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Frase sobre clima
// ------------------------------------------------------------
// Crie variáveis para cidade e temperatura atual (número).
// Use template literal para criar uma frase como:
// "Hoje em <cidade> está fazendo <temperatura>°C, perfeito para ..."

// → Seu código aqui:
let cidade = "Jaragua do Sul"
let temperatura = 23
console.log(`Hoje em ${cidade} está fazendo ${temperatura}°C, perfeito para ficar em casa`)


console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Tipos primitivos em frases
// ------------------------------------------------------------
// Crie uma variável de cada tipo primitivo: string, number, boolean, undefined, null.
// Para cada uma, exiba uma frase usando template literal que diga o valor e o tipo.

// → Seu código aqui:
let texto = "bomdia" //string
let numero = 20 //number
let verdade = true //boolean
let gasparzinho
let nada = null
console.log(`${texto},amigo tudo bem, o tipo é ${typeof texto}`)
console.log(`eu tenho ${numero} reais, o tipo é ${typeof numero}`)
console.log(`eu tenho medo do ${gasparzinho},o tipo é ${typeof gasparzinho} `)
console.log(`${nada}, o tipo é ${typeof nada}`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Mini história
// ------------------------------------------------------------
// Crie variáveis para personagem, idade, cidade e missão.
// Monte uma frase usando template literal contando uma mini história com esses dados.

// → Seu código aqui:
let personagem = "eliott"
let idade = 23
let Cidade = "Nova York"
let missão = "acabar com a f society"
console.log(` Olá meu nome é ${personagem} tenho ${idade} anos e moro em ${Cidade} minha missão é ${missão}`)


console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 5 – Mensagem motivacional
// ------------------------------------------------------------
// Crie uma variável com seu nome e outra com um objetivo para este ano.
// Use template literal para criar uma mensagem motivacional personalizada.

// → Seu código aqui:
let Nome = "Kevin"
let objetivo = "cursar em desenvolvimento de sistemas"
console.log(`Meu nome é ${Nome} e esse ano eu pretendo ${objetivo}`)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Menu
// ------------------------------------------------------------
// Utilizando apenas console.log(), reproduza o menu que esta na imagem "exemplo-menu-atividade-01-2" anexa junto a esta atividade

// → Seu código aqui:
console.log (`========================================
        SISTEMA DO USUÁRIO            
========================================
1  - Ver Perfil
2  - Editar Perfil
3  - Configurações
4  - Notificações
5  - Relatórios
6  - Ajuda
7  - Sobre o Sistema
0  - Sair
========================================
Digite o número da opção desejada
======================================== `)


console.log("_______________________________");