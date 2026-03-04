// ============================================================
//   ATIVIDADE 02 – Arrays (Listas) em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando e acessando arrays
// ------------------------------------------------------------
// a) Crie uma array chamada "cores" com pelo menos 4 cores.
// b) Exiba a primeira e a última cor usando índices.

// → Seu código aqui:
let cores = ["azul", "preto", "vermelho", "verde"];
console.log(cores[0]); // "azul"
console.log(cores[3]); // "verde"
console.log(cores)
console.log(cores.length)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Métodos básicos
// ------------------------------------------------------------
// a) Adicione uma nova cor ao final de "cores", utilizando as funções de array.
// b) Remova a primeira cor, utilizando as funções de array.
// c) Exiba o array resultante e depois a quantidade de itens armazendos (length).

// → Seu código aqui:

cores.push("marrom bombom"); // "marrom"
console.log(cores)
cores.shift() // "azul"
console.log(cores)
console.log(cores.length)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Números
// ------------------------------------------------------------
// a) Crie um array de números.
// b) Em uma única linha, exiba os valores armazenados nesta lista e a quantidade de números armazenados (quantidade de itens, não a soma)

// → Seu código aqui:
let numero = [1,2,3,4,5,6,7,8,9]
console.log(`${numero}, quantidade de numeros ${numero.length}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Todos os tipos
// ------------------------------------------------------------
// a) Crie um array com todos os tipos de dados que você conhece (number, string...).
// b) Em uma única linha, exiba os valores armazenados nesta lista e a quantidade de itens armazenados

// → Seu código aqui:
let boolean = true
let nada = null
let undefiniti
let string = "textin"
const number = 67
let tipos = [boolean, nada, undefiniti, string, number]
console.log(`${tipos}, quantidade de tipos ${tipos.length}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Mudando a lista
// ------------------------------------------------------------
// a) Crie um array com vários dados de vários tipos diferentes.
// b) Exiba a lista.
// c) Remova o primeiro e o último item da lista, utilizando as funções de array.
// d) Exiba a lista novamente.
// e) Adicione um novo item no final e ou no início da lista.
// f) Exiba a lista final.

// → Seu código aqui:
let Tipos = ["verdadi", "nulo", "indefinido", "textin", 67, 69];
console.log(Tipos);
Tipos.shift();
Tipos.pop();
console.log(Tipos);
Tipos.push(68);
console.log


console.log("_______________________________");     